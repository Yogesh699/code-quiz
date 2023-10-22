let startBtn = document.getElementById("start-btn");
startBtn.onclick = startSubediQuiz;
let timeEl = document.getElementById("time");
let timeLeft = 130;
let timerId;

function startSubediQuiz(){
    console.log("quiz started");
    timerId=setInterval(timerHandler, 1000);
    timeEl.textContent = timeLeft;

}

function timerHandler(){
    timeLeft--;
    timeEl.textContent = timeLeft
}