let startBtn = document.getElementById("start-btn");
startBtn.onclick = startSubediQuiz;
let timeEl = document.getElementById("time");
let timeLeft = 130;
let timerId;

let questions = [
    {
        question: "Javascript is an _______ language?",
        answers: ['Object-Oriented', 'Object-Based', 'Procedural', 'None of the above'],
        correctAns: 'Object-Oriented'
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
let answers = document.getElementById("answers");
let index = 0;
let startPage = document.getElementById("start-page");

function startSubediQuiz() {
    console.log("quiz started");
    timerId = setInterval(timerHandler, 1000);
    timeEl.textContent = timeLeft;
    startPage.setAttribute('class', 'hide-me');

    questionsPage.removeAttribute('class');
    showQuestion();
}

function showQuestion() {
    let thisQuestion = questions[index];
    let questionEl = document.getElementById('question');
    questionEl.textContent = thisQuestion.question;

    answers.innerHTML = "";

    for (let i = 0; i < thisQuestion.answers.length; i++) {
        let ans = thisQuestion.answers[i];
        let ansEl = document.createElement('button');
        ansEl.setAttribute('class', 'answer');
        ansEl.setAttribute('value', ans);

        ansEl.textContent = i + 1 + ". " + ans;

        answers.appendChild(ansEl);
    }
}


function timerHandler() {
    timeLeft--;
    timeEl.textContent = timeLeft
}
answers.onclick = checkAnswers;
let feedbackDiv = document.getElementById("feedback-div")
function checkAnswers(event) {
    let btn = event.target;

    if (!btn.matches(".answer")) {
        return;
    }

    if (btn.value !== questions[index].correctAns) {
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }

        timeEl.textContent = timeLeft;
        feedbackDiv.textContent = "incorrect";
    }
    else {
        feedbackDiv.textContent = "correct";
    }

    feedbackDiv.setAttribute("class", "feedback-div");
    setTimeout((function () {
        feedbackDiv.setAttribute("class", "feedback-div hide-me");
    }, 1000));

    index++;

    if (timeLeft <= 0 || index === questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

function endQuiz() {
    // TBD 
}