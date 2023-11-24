const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionElement = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll("choice-buttons"));
const timer = document.querySelector("#timer");
const scoreText = document.querySelector("#score");
const finalScore = document.querySelector("#finalScore");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let shuffledQuestions = [];
let timeLeft = 90;
let timeIntervalID;

const questions = [
    {
        question: "What is an array?",
        choices: [
            "A pack of ravenous moose",
            "An unordered list of random items",
            "A collection of data",
            "idk lol",
        ],
        answer: 2,
    },
    {
        question: "What is JavaScript?",
        choices: [
            "A series of unfortunate events",
            "A coffee stained film script",
            "idk lol",
            "A language used to program web pages",
        ],
        answer: 3,
    },
    {
        question: "What term does NOT belong?",
        choices: [
            "idk lol",
            ".CSS",
            ".JS",
            ".HTML",
        ],
        answer: 0,
    },
    {
        question: "Why is JavaScript important?",
        choices: [
            "It causes the sun to rise and set",
            "It is used to program web pages",
            "It's not. Computers are lame",
            "idk lol",
        ],
        answer: 1,
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: [
            "function = myFunction()",
            "function:myFunction()",
            "function myFunction()",
            "idk lol",
        ],
        answer: 0,
    },
]

const MAX_POINTS = 100;
const MAX_QUESTIONS = questions.length;

function startGame() {
    console.log("Let the game begin...");
    questionCounter = 0;
    // score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    getNewQuestion();
    startTimer();
}
// how can this be delayed by a half second for the selection to be green or red?
function getNewQuestion() {
    showQuestion(shuffledQuestions[questionCounter]);
    
    let buttons = document.querySelectorAll(".choice");
    buttons.forEach(button => {
        button.addEventListener("click", checkAnswer);
    }) 
}

function checkAnswer(e) {
    e.stopPropagation();
    let currentAnswer = e.target.innerText;
    let correctAnswerIndex = shuffledQuestions[questionCounter].answer;
    let correctAnswer = shuffledQuestions[questionCounter].choices[correctAnswerIndex];
    if (currentAnswer === correctAnswer) {
        score++; // why is this not working?
        e.target.style.backgroundColor = 'green';
        setTimeout(function() {
            e.target.style.backgroundColor = ''; // Reset color
        }, 1000);
    }
    else {
        timeLeft -= 5;
        e.target.style.backgroundColor = 'red';
        setTimeout(function() {
            e.target.style.backgroundColor = ''; // Reset color
        }, 1000);
        }
}

function showQuestion(questions) {
    const buttons = document.querySelectorAll(".choice");
    questionElement.innerText = questions.question;
    questions.choices.forEach((choice, idx) => {
        let button = buttons[idx];
        button.innerText = choice;
        button.classList.add("btn-grid");
    })
}

function startTimer() {
     timeIntervalID = setInterval(function () {
        if (timeLeft > 1) {
            timer.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timer.textContent = "";
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timeIntervalID);

    let endSection = document.getElementById('end');
    let quizSection = document.getElementById('question-container');

    endSection.style.display = "flex";
    quizSection.style.display = "none";
}

function displayMessage() {
    timer.textContent = "Time's up!";
    setTimeout(function() {
        timer.textContent = "";
    }, 1000);
    return;
}

startButton.addEventListener("click", function() {
    let startSection = document.getElementById('start');
    let quizSection = document.getElementById('question-container');

    startSection.style.display = "none";
    quizSection.style.display = "flex";

    startGame();
});

nextButton.addEventListener("click", function() {
    questionCounter++;
    if(questionCounter < MAX_QUESTIONS){
    showQuestion(shuffledQuestions[questionCounter]);
    }
    else {
        endGame();
    }
});