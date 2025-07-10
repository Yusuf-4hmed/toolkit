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
        if (dateToday.endsWith("1")) {
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

setInterval(updateDateTime, 1000)