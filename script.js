let startBtn = document.getElementById("start-btn");
startBtn.onclick = startSubediQuiz;
let timeEl = document.getElementById("time");
let timeLeft = 130;
let timerId;

let questions = [
    {
        question: "q1",
        answers: ['a1', 'a2', 'a3', 'a4'],
        correctAns: 'a3'
    },
    {
        question: "q2",
        answers: ['a1', 'a2', 'a3', 'a4'],
        correctAns: 'a1'
    },
    {
        question: "q3",
        answers: ['a1', 'a2', 'a3', 'a4'],
        correctAns: 'a4'
    },
    {
        question: "q4",
        answers: ['a1', 'a2', 'a3', 'a4'],
        correctAns: 'a2'
    },
    {
        question: "q5",
        answers: ['a1', 'a2', 'a3', 'a4'],
        correctAns: 'a1'
    },
];

let questionsPage = document.getElementById("questions-page");
let answers = document.getElementById("answers-page");
let index = 0;
let startPage = document.getElementById("start-page");

function startSubediQuiz() {
    console.log("quiz started");
    timerId = setInterval(timerHandler, 1000);
    timeEl.textContent = timeLeft;
    startPage.setAttribute('class', 'hide-me');
}

function timerHandler() {
    timeLeft--;
    timeEl.textContent = timeLeft
}