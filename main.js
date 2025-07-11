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

const ambienceButton = document.getElementById('ambience-button');
const ambienceControlContainer = document.getElementById('ambience-control-container');

ambienceButton.addEventListener('click', () => {
    ambienceControlContainer.classList.toggle('active')
})

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

// Toggle countdown form

const selectDateButton = document.getElementById('select-countdown-date-button');
const selectCountDownDateForm = document.getElementById('select-countdown-date-form');
const toolBelt = document.getElementById('tool-belt');
const homePage = document.getElementById('home-page')

let countdownFormIsOpen = false;

const openForm = () => {
    selectCountDownDateForm.classList.add('active');
    toolBelt.classList.add('form-open');
    homePage.classList.add('form-open');
    countdownFormIsOpen = true;
}

selectDateButton.addEventListener('click', openForm)

const closeForm = () => {
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
        closeForm()
    }
})

// Countdown function
const countdownNameInput = document.getElementById('countdown-name-input');
const countdownDateInput = document.getElementById('countdown-date-input');
const countdownDateAddButton = document.getElementById('countdown-date-add-button');
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
let todaysDate = new Date(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`);
let countdownDate;


const generateCountdownDate = () => {
    let name = countdownNameInput.value;
    let date = countdownDateInput.value;
    countdownDate = new Date(date);
    localStorage.setItem('countdownDate', countdownDate.toISOString())

    console.log(countdownDate)
}
const calculateCountdown = (countdown) => {
    let difference = Math.abs(countdown-todaysDate);
    const diffDays = Math.ceil(difference / (1000 * 60 * 60 *24) - 1);
    return diffDays;
}

const countdownDaysLeft = document.getElementById('countdown-days-left');

const updateCountdownCounter = () => {
    countdownDaysLeft.innerText = calculateCountdown(countdownDate);
}

countdownDateAddButton.addEventListener('click', () => {
    generateCountdownDate();
    updateCountdownCounter();
    closeForm();
})

window.addEventListener('DOMContentLoaded', () => {
    const storedDate = localStorage.getItem('countdownDate');
    if (storedDate) {
        countdownDate = new Date(storedDate);
        updateCountdownCounter();
        setInterval(updateCountdownCounter, 1000 * 60 * 60);
    }
})


// let difference = Math.abs(countdownDate-todaysDate);
//     const diffDays = Math.ceil(difference / (1000 * 60 * 60 * 24) - 1);



