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