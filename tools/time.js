// timer

const hoursInput = document.getElementById('hours-input');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');
const timerInputs = document.getElementById('timer-inputs');

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
const timerCancelButton = document.getElementById('timer-cancel-button')

const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, '0')

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

let timerTotalMili = 0

const checkTimerInputs = () => {
    if (hoursInput.value || minutesInput.value || secondsInput.value) {
        return true
    } else {
        return false;
    }
}

const getTimerMilliseconds = () => {
    if (checkTimerInputs() && !isTimerRunning) {
            let hoursMili = hoursInput.value * 60 * 60 * 1000;
            let minutesMili = minutesInput.value * 60 * 1000;
            let mili = secondsInput.value * 1000;
            let totalTimeMili = hoursMili + minutesMili + mili;  
            timerTotalMili = totalTimeMili;
    } else {
        timerTotalMili = timerTotalMili
    }
}

const endTimer = () => {
    timerInputs.classList.add('active');
    timerCountdown.classList.remove('active');
    timerTotalMili = 0;
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

const pauseTimer = () => {
    timerCountdown.innerText = formatTime(timerTotalMili);
    timerTotalMili = timerTotalMili;
}

isTimerRunning = false;

const timerCountAndDisplay = () => {
        isTimerRunning = true;
       timerTotalMili -= 1000
        // console.log(formatTime(timerTotalMili))
        timerInputs.classList.remove('active')
        timerCountdown.classList.add('active')
        timerCountdown.innerText = formatTime(timerTotalMili); 

}

const changePause = () => {
    timerStartPauseButton.innerText = 'Pause'
}

const changeStart = () => {
    timerStartPauseButton.innerText = 'Start'
}

const noticationSound = new Audio('assets/sounds/notification-sound-1.wav')

const playNotificationSound = () => {
    noticationSound.play()
}



timerStartPauseButton.addEventListener('click', () => {
    if (checkTimerInputs() && !isTimerRunning && timerTotalMili === 0) {
        getTimerMilliseconds();
        timerCountAndDisplay()
        changePause()
        intervalId = setInterval(() => {
            if (timerTotalMili > 0) {
                timerCountAndDisplay();
            } else {
                clearInterval(intervalId);
                changeStart()
                playNotificationSound()
                endTimer()
            }
        }, 1000)
    } else if (isTimerRunning) {
        clearInterval(intervalId)
        pauseTimer()
        changeStart()
        isTimerRunning = false;
    } else if (!isTimerRunning && timerTotalMili !== 0) {
        timerCountAndDisplay()
                intervalId = setInterval(() => {
            if (timerTotalMili > 0) {
                timerCountAndDisplay();
            } else {
                clearInterval(intervalId);
                changeStart()
                endTimer()
                playNotificationSound()
            }
        }, 1000)
        changePause()
    }

})

timerCancelButton.addEventListener('click', endTimer)

// stop watch

const stopWatchCount = document.getElementById('stop-watch-count');
const stopWatchStartPauseButton = document.getElementById('stop-watch-start-pause-button');
const stopWatchResetButton = document.getElementById('stop-watch-reset-button');

let stopWatchMilliseconds = 0

isStopWatchRunning = false;

const changeStopWatchPause = () => {
    stopWatchStartPauseButton.innerText = 'Pause'
}
const changeStopWatchStart = () => {
    stopWatchStartPauseButton.innerText = 'Start'
}

const stopWatchCountUp = () => {
    stopWatchMilliseconds += 1000;
    stopWatchCount.innerText = formatTime(stopWatchMilliseconds)
}

const endStopWatch = () => {
    stopWatchMilliseconds = 0
    stopWatchCount.innerText = formatTime(stopWatchMilliseconds);
    isStopWatchRunning = false;
}

let stopWatchIntervalId = null;

stopWatchStartPauseButton.addEventListener('click', () => {
    
    if (!isStopWatchRunning) {
        changeStopWatchPause()
        stopWatchCountUp()
        isStopWatchRunning = true;

        stopWatchIntervalId = setInterval (() => {
        stopWatchCountUp()
        }, 1000)

    } else if (isStopWatchRunning) {
        clearInterval(stopWatchIntervalId)
        isStopWatchRunning = false;
        changeStopWatchStart()
    }

})

stopWatchResetButton.addEventListener('click', () => {
    endStopWatch()
    clearInterval(stopWatchIntervalId)
    changeStopWatchStart()


})



