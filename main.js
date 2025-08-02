// Functionality for different greetings at each time of the day
const welcomeHeader = document.getElementById('welcome-header');

const updateGreeting = () => {
    const today = new Date();
    let hours = today.getHours();
    if (hours >= 1 && hours <= 12) {
        welcomeHeader.innerText = `Good Morning..`
    } else if (hours >= 13 && hours <= 17) {
        welcomeHeader.innerText = 'Good Afternoon..'
    } else if (hours >= 18 && hours <= 21) {
        welcomeHeader.innerText = `Good Evening..`
    } else {
        welcomeHeader.innerText = 'Good Night..'
    }
}

updateGreeting()

// Functionality for displaying correct time

const welcomeDateTime = document.getElementById('welcome-date-time');

const updateDateTime = () => {
    const today = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'Februrary', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
    const dayToday = days[today.getDay()];
    const dateToday = String(today.getDate());
    let dateEnding = "th"
        if (Number(dateToday) >= 11 && Number(dateToday) <= 20) {
            dateEnding = "th"
        } else if (dateToday.endsWith("1")) {
            dateEnding = "st"
        } else if (dateToday.endsWith("2")) {
            dateEnding = "nd"
        } else if (dateToday.endsWith("3")) {
            dateEnding = "rd"
        } else {
            dateEnding = "th"
        }
    
    const monthToday = months[today.getMonth()];
    const timeNow = `${String(today.getHours()).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}:${String(today.getSeconds()).padStart(2, "0")}`
    welcomeDateTime.innerText = `${dayToday}, ${monthToday} ${dateToday}${dateEnding} ${today.getFullYear()} ${timeNow}`
}

updateDateTime()
setInterval(updateDateTime, 1000)

// Toggle abience control container

const ambienceButtons = document.querySelectorAll('.ambience-button');
const ambienceControlContainer = document.getElementById('ambience-control-container');

ambienceButtons.forEach(b => {
  b.addEventListener('click', () => {
    ambienceControlContainer.classList.toggle('active');
  });
});



// Toggle  rain ambience

const rainAmbienceButton = document.getElementById('rain-ambience-button');
const ambienceName = document.getElementById('ambience-name')
const rainAudio = new Audio('assets/sounds/rain-ambience.mp3');
rainAudio.loop = true;
let isRainPlaying = false;

rainAmbienceButton.addEventListener('click', () => {
    if (!isRainPlaying) {
        rainAudio.play()
        isRainPlaying = true;
        rainAmbienceButton.classList.add('active');
        ambienceName.innerText = `Rain ambience is playing..`
    } else {
        rainAudio.pause();
        isRainPlaying = false;
        rainAmbienceButton.classList.remove('active');
        ambienceName.innerText = `Please select an ambience:`
    }
})

// recent activity

const activityContainer = document.getElementById('activity-container');
const calcActivity = document.getElementById('calculator-activity')

const loadCalcActivity = () => {
    calcActivity.innerText = `Previous calculation: ${localStorage.getItem('calcActivity')}`;
}

loadCalcActivity()


// Toggle countdown form

const selectDateButton = document.getElementById('select-countdown-date-button');
const selectCountDownDateForm = document.getElementById('select-countdown-date-form');
const toolBelt = document.getElementById('tool-belt');
const homePage = document.getElementById('home-page')

let countdownFormIsOpen = false;

const openCountdownForm = () => {
    selectCountDownDateForm.classList.add('active');
    toolBelt.classList.add('form-open');
    homePage.classList.add('form-open');
    countdownFormIsOpen = true;
}

selectDateButton.addEventListener('click', openCountdownForm)

const closeCountdownForm = () => {
    if (countdownFormIsOpen === true) {
        selectCountDownDateForm.classList.remove('active');
        toolBelt.classList.remove('form-open');
        homePage.classList.remove('form-open');
        countdownFormIsOpen = false;
    }
}

document.addEventListener('click', (e) => {
    if (selectCountDownDateForm.contains(e.target) || selectDateButton.contains(e.target)) {
        return
    } else {
        closeCountdownForm()
    }
})

// Countdown function
const countdownNameInput = document.getElementById('countdown-name-input');
const countdownDateInput = document.getElementById('countdown-date-input');
const countdownDateAddButton = document.getElementById('countdown-date-add-button');
const selectCountdownDateButton = document.getElementById('select-countdown-date-button');
const noDateContainer = document.getElementById('no-date-container');
const counterText = document.getElementById('counter-text');
// set minimum day to today for input
const setMinDayToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const minDate = `${yyyy}-${mm}-${dd}`;
    countdownDateInput.setAttribute('min', minDate);
}
setMinDayToday()


// calculate difference in days

// initialse todays current date and empty variable for the user selected countdowndate
let todaysDate = new Date(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`);
let countdownDate;
let countdownName =  ``;

// generates the previous initialized countdowndate variable
const generateCountdownDate = () => {
     countdownName = countdownNameInput.value;
    let date = countdownDateInput.value;
    countdownDate = new Date(date);
    // also store in local for future calculations on site loads
    localStorage.setItem('countdownDate', countdownDate.toISOString());
    localStorage.setItem('countdownName',  countdownName);
    console.log(countdownDate)
}

// fucntion that finds the differnce in days between todays date and the countdowndate
const calculateCountdown = (countdown) => {
    let difference = Math.abs(countdown-todaysDate);
    const diffDays = Math.ceil(difference / (1000 * 60 * 60 *24) - 1);
    return diffDays;
}

const counter = document.getElementById('counter');
//  function updates ui with the above fucntions answer
const updateCountdownCounter = () => {
    counter.innerText = calculateCountdown(countdownDate);
}



const counterTextChange = () => {
    let countdownNameLocal = localStorage.getItem('countdownName');
    if (counter.value !== 1) {
        counterText.innerText = `days until ${countdownNameLocal}`
    } else {
        counterText.innerText = `day until ${countdownNameLocal}`
    }
}
// when button clicked the countdown date is generated, the differnce in days calculated and displayed, and the form is closed
countdownDateAddButton.addEventListener('click', () => {
    generateCountdownDate();
    updateCountdownCounter();
    closeCountdownForm()
    counterTextChange();
    // selectCountdownDateButton.classList.add('none');
    noDateContainer.classList.add('none');
    
})
// whenever the site is loaded it will check if the countdown date is stored local, if so, it will make the variable countdowndate have the value of the local, and then will run updatecountdowncounter and get a new amount of the difference of days, this will repeat every hour aswell.
window.addEventListener('DOMContentLoaded', () => {
    const storedDate = localStorage.getItem('countdownDate');
    if (storedDate) {
        countdownDate = new Date(storedDate);
        updateCountdownCounter();
        counterTextChange();
        noDateContainer.classList.add('none');
        setInterval(updateCountdownCounter, 1000 * 60 * 60);
    }
})

// To-do list functionality

// Add to do form toggle
const addTodoButton = document.getElementById('add-to-do-button');
const addTodoForm = document.getElementById('add-to-do-form');

let toDoFormIsOpen = false;

const openTodoForm = () => {
    addTodoForm.classList.add('active');
    toolBelt.classList.add('form-open');
    homePage.classList.add('form-open');
    toDoFormIsOpen = true;
}

addTodoButton.addEventListener('click', openTodoForm)

const closeTodoForm = () => {
    if (toDoFormIsOpen === true) {
        addTodoForm.classList.remove('active');
        toolBelt.classList.remove('form-open');
        homePage.classList.remove('form-open');
        toDoFormIsOpen = false;
    }
}

document.addEventListener('click', (e) => {
    if (addTodoForm.contains(e.target) || addTodoButton.contains(e.target)) {
        return
    } else {
        closeTodoForm()
    }
})

// clear to do form toggle 

const clearToDoButton = document.getElementById('clear-to-do-button');
const clearToDoForm = document.getElementById('clear-to-do-form');

let clearToDoFormIsOpen = false;

const openClearTodoForm = () => {
    clearToDoForm.classList.add('active');
    toolBelt.classList.add('form-open');
    homePage.classList.add('form-open');
    clearToDoFormIsOpen = true;
}

clearToDoButton.addEventListener('click', openClearTodoForm)

const closeClearTodoForm = () => {
    if (clearToDoFormIsOpen === true) {
        clearToDoForm.classList.remove('active');
        toolBelt.classList.remove('form-open');
        homePage.classList.remove('form-open');
        clearToDoFormIsOpen = false;
    }
}

document.addEventListener('click', (e) => {
    if (clearToDoForm.contains(e.target) || clearToDoButton.contains(e.target)) {
        return
    } else {
        closeClearTodoForm()
    }
})


// Add to do
const todoInput = document.getElementById('to-do-input');
const todoSubmitButton = document.getElementById('submit-to-do');
const todoContainer = document.getElementById('to-do-container');

const saveTodo = () => {
    localStorage.setItem('todoContainer', todoContainer.innerHTML)
}

const loadTodo = () => {
    todoContainer.innerHTML = localStorage.getItem('todoContainer')
}

const addTodo = () => {
    if (!todoInput.value) {
        return
    } else {
        todoContainer.innerHTML += `<li class="to-do"><p>${todoInput.value}</p>
                            <svg width="24px" height="24px" stroke-width="1.5"                     viewBox="0 0 24 24"
                            fill="none" xmlns="http://www.w3.org/2000/svg" style="color: currentColor">
                            <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </li>`;
        todoInput.value = ``;
        closeTodoForm();
        saveTodo()
    }
}

loadTodo()

todoSubmitButton.addEventListener('click', addTodo);

// remove to do

todoContainer.addEventListener('click', (e) => {
    if (e.target.closest('svg')) {
        e.target.closest('.to-do').remove()
        saveTodo()
    }
});

// check off to-do

todoContainer.addEventListener('click', (e) => {
    if (e.target.closest('p')) {
        e.target.parentElement.classList.toggle('done')
        saveTodo()
    }
});


// clear to do 

const clearNoButton = document.getElementById('clear-no');
const clearYesButton = document.getElementById('clear-yes');

clearNoButton.addEventListener('click', () => {
    closeClearTodoForm();
})

clearYesButton.addEventListener('click', () => {
    todoContainer.innerHTML = '';
    closeClearTodoForm()
    saveTodo()
})

// mobile info
const mobileInfo = document.getElementById('mobile-info');
const mobileInfoButton = document.getElementById('mobile-info-button')

let mobileInfoIsOpen = false;

const openMobileInfo = () => {
    mobileInfo.classList.add('active');
    toolBelt.classList.add('form-open');
    homePage.classList.add('form-open');
    mobileInfoIsOpen = true;
}

const mq = window.matchMedia('(max-width: 700px)');

document.addEventListener('DOMContentLoaded', () => {
    if (mq.matches) {
        openMobileInfo()
    } else {
        closeMobileInfo()
    }
})


const closeMobileInfo = () => {
    if (mobileInfoIsOpen === true) {
        mobileInfo.classList.remove('active');
        toolBelt.classList.remove('form-open');
        homePage.classList.remove('form-open');
        mobileInfoIsOpen = false;
    }
}

mobileInfoButton.addEventListener('click', closeMobileInfo)

// quote of the day

const quoteOfTheDay = document.getElementById('quote-of-the-day');
const quote = document.getElementById('quote');
const quotePerson = document.getElementById('quote-person');

const quotes = [
    {
        number: 1,
        quote: `"Be the change that you wish to see in the world."`,
        quotePerson: "-Mahatma Gandhi"
    },
    {
        number: 2,
        quote: `"I have not failed. I've just found 10,000 ways that won't work"`,
        quotePerson: "-Thomas A. Edison"
    },
    {
        number: 3,
        quote: `"When you start seeing code in your dreams, becoming a software engineer can't be that far away"`,
        quotePerson: "-Yusuf Ahmed"
    },
    {
        number: 4,
        quote: `"Small progress is still better than no progress"`,
        quotePerson: "-Unknown"
    }
]

const addQuote = () => {
    let quotesDirectory = Math.floor((Math.random() * 4));
    quoteOfTheDay.innerHTML = `
        <h3 class="quote" id="quote">${quotes[quotesDirectory].quote}</h3>
        <p class="quote-person" id="quote-person">${quotes[quotesDirectory].quotePerson}</p>
    `;
}

const today = new Date().getDay().toString()
const lastRunDate = localStorage.getItem('lastRunDate')


const checkIfNewDay = () => {
    if (today !== lastRunDate) {
        addQuote()
        localStorage.setItem('lastRunDate', today)
        localStorage.setItem('lastQuote', quoteOfTheDay.innerHTML)
}
}

const loadQuote = () => {
    quoteOfTheDay.innerHTML = localStorage.getItem('lastQuote');
}

loadQuote()
checkIfNewDay()

// last active

const lastActive = document.getElementById('last-active');



let lastLogIn = localStorage.getItem('lastLogInTime');
const now = new Date().getTime();


const timeSinceLastLogIn = () => {
    if (!lastLogIn) {
        localStorage.setItem('lastLogInTime', now);
    } 
        else if (lastLogIn) {
            localStorage.setItem('lastLogInTime', now);
            const diff = now - parseInt(lastLogIn);

            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            if (days > 0) {
                lastActive.innerText = `${days} day(s) ago`;
            } else if (hours > 0) {
                lastActive.innerText = `${hours} hour(s) ago`;
            } else if (minutes > 0) {
                lastActive.innerText = `${minutes} minute(s) ago`;
            } else {
                lastActive.innerText = `${seconds} second(s) ago`;
            }
    }
    


}

timeSinceLastLogIn()

// toolbelt page toggle & tool toggle

const homeButton = document.getElementById('home-button');

const calcButton = document.getElementById('calc-button');
const calcPage = document.getElementById('calculator-page');

const timeButton = document.getElementById('time-button');
const timePage = document.getElementById('time-page');



let calculatorDisabled = true;


const switchPage = (e) => {
    const nearestLi = e.target.closest('li');
    const arrayOfPages = Array.from(document.getElementsByClassName('page'));
    const arrayOfTools = Array.from(document.getElementsByClassName('tool'));

        if (nearestLi && nearestLi.id === 'calc-button') {
            arrayOfPages.forEach(p => p.classList.remove('open'));
            arrayOfTools.forEach(p => p.classList.remove('active'));
            calcButton.classList.add('active')
            calcPage.classList.add('open');
            calculatorDisabled = false;
        } else if (nearestLi && nearestLi.id === 'home-button') {
            arrayOfPages.forEach(p => p.classList.remove('open'));
            arrayOfTools.forEach(p => p.classList.remove('active'));
            homeButton.classList.add('active')
            homePage.classList.add('open')
            calculatorDisabled = true;
        } else if (nearestLi && nearestLi.id === 'time-button') {
            arrayOfPages.forEach(p => p.classList.remove('open'));
            arrayOfTools.forEach(p => p.classList.remove('active'));
            timeButton.classList.add('active')
            timePage.classList.add('open')
            calculatorDisabled = true;
        }
}

calcButton.addEventListener('click', switchPage);
homeButton.addEventListener('click', switchPage);
timeButton.addEventListener('click', switchPage);

// time tab switch functionality

const timeToolTabs = Array.from(document.getElementById('time-tool-selection-tabs').children)

const timerContainer = document.getElementById('timer-container');
const stopWatchContainer = document.getElementById('stop-watch-container');
const pomodoroContainer = document.getElementById('pomodoro-container');

const switchTimerTab = (e) => {
    // console.log(e.target)
    if (!e.target.classList.contains('active')) {
        timeToolTabs.forEach(tab => {
            tab.classList.remove('active')
        })
        e.target.classList.add('active')
    }
    if (e.target.id === "timer-tab") {
        timerContainer.classList.add('active')
        stopWatchContainer.classList.remove('active')
        pomodoroContainer.classList.remove('active')
    } else if (e.target.id === "stop-watch-tab") {
        timerContainer.classList.remove('active')
        stopWatchContainer.classList.add('active')
        pomodoroContainer.classList.remove('active')  
    } else if (e.target.id === "pomodoro-tab") {
        timerContainer.classList.remove('active')
        stopWatchContainer.classList.remove('active')
        pomodoroContainer.classList.add('active')  
    }
}

timeToolTabs.forEach(tab => {
    tab.addEventListener('click', switchTimerTab)
})

const calcToolTabs = Array.from(document.getElementById('calc-tool-selection-tabs').children)

const basicContainer = document.getElementById('basic-container');
const tipContainer = document.getElementById('tip-container');
const tempContainer = document.getElementById('temp-container');

const switchCalcTab = (e) => {
    // console.log(e.target)
    if (!e.target.classList.contains('active')) {
        calcToolTabs.forEach(tab => {
            tab.classList.remove('active')
        })
        e.target.classList.add('active')
    }
    if (e.target.id === "basic-tab") {
        basicContainer.classList.add('active')
        tipContainer.classList.remove('active')
        tempContainer.classList.remove('active')
    } else if (e.target.id === "tip-tab") {
        basicContainer.classList.remove('active')
        tipContainer.classList.add('active')
        tempContainer.classList.remove('active')  
    } else if (e.target.id === "temp-tab") {
        basicContainer.classList.remove('active')
        tipContainer.classList.remove('active')
        tempContainer.classList.add('active')   
    }
}

calcToolTabs.forEach(tab => {
    tab.addEventListener('click', switchCalcTab)
})




