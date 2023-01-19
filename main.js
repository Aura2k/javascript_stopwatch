let minuteTime = document.getElementById("minutes");
let secondTime = document.getElementById("seconds");
let millisecondTime = document.getElementById("milliseconds");

let startBtn = document.getElementById("startBtn");
let stopBtn = document.getElementById("stopBtn");
let resetBtn = document.getElementById("resetBtn");

let minutes = 00;
let seconds = 00;
let time = 00;
let timer = false;

let limit = 0;

startBtn.addEventListener('click', function () {
    limit++;
    timer = true;
    if(limit == 1) {
        stopWatch();
    }
})

stopBtn.addEventListener('click', function () {
    limit = 0;
    timer = false;
})

resetBtn.addEventListener('click', function () {
    timer = false;
    minutes = 00;
    seconds = 00;
    time = 00;
    limit = 0;

    minuteTime.innerHTML = "00";
    secondTime.innerHTML = "00";
    millisecondTime.innerHTML = "00";
})


function stopWatch() {
    if(timer) {
        time++;

        if(time == 100) {
            seconds++;
            time = 0;
        }

        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }

        let minuteString = minutes;
        let secondString = seconds;
        let millisecondString = time;

        if(time < 10) {
            millisecondString = "0" + time;
        } 

        if(seconds < 10) {
            secondString = "0" + seconds;
        }

        if(minutes < 10) {
            minuteString = "0" + minutes;
        }

        minuteTime.innerHTML = minuteString;
        secondTime.innerHTML = secondString;
        millisecondTime.innerHTML = millisecondString;

        setTimeout(stopWatch, 10);
    }
}