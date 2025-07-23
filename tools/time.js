const hoursInput = document.getElementById('hours-input');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');

const timerCountdown = document.getElementById('timer-countdown');

const inputMaxValue = (input, max) => {
    if (input.value > max) {
        input.value = input.value.slice(0, -1)
    }
}

hoursInput.addEventListener('input', () => {
    inputMaxValue(hoursInput, 99)
})

minutesInput.addEventListener('input', () => {
    inputMaxValue(minutesInput, 59)
})

secondsInput.addEventListener('input', () => {
    inputMaxValue(secondsInput, 59)
})

const timerStartPauseButton = document.getElementById('timer-start-pause-button');

const startTimer = () => {
    let hoursMili = hoursInput.value * 60 * 60 * 1000;

}

timerStartPauseButton.addEventListener('click', setInterval(startTimer, 1000))