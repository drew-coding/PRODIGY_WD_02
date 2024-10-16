let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;
let lapCount = 1;

const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const lapBtn = document.getElementById('lap-btn');
const lapTimes = document.getElementById('lap-times');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', recordLap);

function startStopwatch() {
	interval = setInterval(() => {
		seconds++;
		if (seconds === 60) {
			minutes++;
			seconds = 0;
		}
		if (minutes === 60) {
			hours++;
			minutes = 0;
		}
		updateStopwatch();
	}, 1000);
	startBtn.disabled = true;
	pauseBtn.disabled = false;
}

function pauseStopwatch() {
	clearInterval(interval);
	startBtn.disabled = false;
	pauseBtn.disabled = true;
}

function resetStopwatch() {
	clearInterval(interval);
	hours = 0;
	minutes = 0;
	seconds = 0;
	lapCount = 1;
	updateStopwatch();
	startBtn.disabled = false;
	pauseBtn.disabled = true;
	lapTimes.innerHTML = '';
}

function recordLap() {
	const lapTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
	const lap = document.createElement('li');
	lap.textContent = `Lap ${lapCount}: ${lapTime}`;
	lapTimes.appendChild(lap);
	lapCount++;
}

function updateStopwatch() {
	document.getElementById('hours').textContent = padZero(hours);
	document.getElementById('minutes').textContent = padZero(minutes);
	document.getElementById('seconds').textContent = padZero(seconds);
}

function padZero(time) {
	return (time < 10 ? '0' : '') + time;
}
