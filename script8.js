let time = document.getElementById('time');
let count = document.getElementById('count');
let start = document.getElementById('start');
let countPerSecond = document.getElementById('count-per-second');
let restart = document.getElementById('restart');

let interval;
let timeout;
let i = 0;
let timeValue = time.value;
let recordCPS = 0; 

time.onchange = (event) => {
    timeValue = event.target.value;
};

start.onclick = () => {
    timeValue = parseInt(timeValue);
    if (timeValue < 5 || timeValue > 15) {
        alert("Ограничение времени: от 5 до 15 секунд");
        return;
    }
    recordCPS = Math.max(recordCPS, i / timeValue); 
    record.textContent = 'Рекорд: ' + recordCPS.toFixed(1); 

    i++;
    count.textContent = i;

    if (i === 1) {
        timeout = setTimeout(() => {
            start.disabled = true;
            countPerSecond.textContent = i / timeValue;
            clearInterval(interval);
        }, timeValue * 1000);

        interval = setInterval(() => {
            time.value--;
        }, 1000);
    }
};


restart.onclick = () => {
    start.disabled = false;
    time.value = 5;
    timeValue = 5;
    count.textContent = 0;
    i = 0;
    countPerSecond.textContent = 0;
    clearInterval(interval);
    clearTimeout(timeout);
}


