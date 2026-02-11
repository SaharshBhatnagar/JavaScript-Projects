const timerDisplay = document.querySelector('.js-timer');
const jsStart = document.querySelector('.js-start');
const jsStop = document.querySelector('.js-stop');
const jsReset = document.querySelector('.js-reset');

let totalSeconds = Number(localStorage.getItem('stopwatchTime')) || 0;
let intervalId = null;

// start
jsStart.addEventListener('click', () => {
    if (intervalId === null) {
        intervalId = setInterval(() => {
        totalSeconds ++;
        updateDisplay();

        localStorage.setItem('stopwatchTime', totalSeconds);

        }, 1000); // 1000 miliseconds = 1 second

        jsStart.classList.add('start-on');
        jsStop.classList.remove('stop-on');
        jsReset.classList.remove('reset-on');
    }
});

// stop
jsStop.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;

    jsStop.classList.add('stop-on');
    jsStart.classList.remove('start-on');
    jsReset.classList.remove('reset-on');
});

// reset
jsReset.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;

    localStorage.removeItem('stopwatchTime');
    totalSeconds = 0;

    timerDisplay.textContent = '00 : 00 : 00';

    jsReset.classList.add('reset-on');
    jsStart.classList.remove('start-on');
    jsStop.classList.remove('stop-on');
});

function updateDisplay() {
   
    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor((totalSeconds  % 3600) / 60)
    const hours = Math.floor(totalSeconds / 3600) 

    const hrsString = hours.toString().padStart(2, '0');
    const minsString = minutes.toString().padStart(2, '0');
    const secsString = seconds.toString().padStart(2, '0'); 

    timerDisplay.textContent = `${hrsString} : ${minsString} : ${secsString}`;
}

updateDisplay();