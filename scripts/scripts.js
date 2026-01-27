const timerDisplay = document.querySelector('.js-timer');
const jsStart = document.querySelector('.js-start');
const jsStop = document.querySelector('.js-stop');
const jsReset = document.querySelector('.js-reset');

let totalSeconds = 0;
let intervalId = null;

// start
jsStart.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
        totalSeconds ++;
        updateDisplay();
        }, 1000); // 1000 miliseconds
    }
});

// stop
jsStop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
});

// reset
jsReset.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;

    totalSeconds = 0;
    timerDisplay.textContent = '00 : 00 : 00';
});

function updateDisplay() {
   
    seconds = Math.floor(totalSeconds % 60)
    minutes = Math.floor((totalSeconds  % 3600) / 60)
    hours = Math.floor(totalSeconds / 3600) 

    const hrsString = hours.toString().padStart(2, '0');
    const minsString = minutes.toString().padStart(2, '0');
    const secsString = seconds.toString().padStart(2, '0'); 

    timerDisplay.textContent = `${hrsString} : ${minsString} : ${secsString}`;
}

updateDisplay();