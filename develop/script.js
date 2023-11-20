let startButton = document.getElementById("start-btn");
let nextButton = document.getElementById("next-btn");
let questionElement = document.querySelector("#question");
let choices = Array.from(document.querySelectorAll("choice-buttons"));
let timer = document.querySelector("#timer");
let scoreText = document.querySelector("#score");
let finalScore = document.querySelector("#finalScore");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;   
let availableQuestions = [];

let questions = [
    {
        question: "What is an array?",
        choice1: "A pack of ravenous moose",
        choice2: "An unordered list of random items",
        choice3: "A collection of data",
        choice4: "Is mayonnaise an instrument?",
        answer: 3,
    },
    {
        question: "What is JavaScript?",
        choice1: "A series of unfortunate events",
        choice2: "A coffee stained film script",
        choice3: "is mayonnaise an instrument?",
        choice4: "A language used to program web pages",
        answer: 4,
    },
    {
        question: "What term does NOT belong?",
        choice1: "Is mayonnaise an instrument?",
        choice2: ".CSS",
        choice3: ".JS",
        choice4: ".HTML",
        answer: 1,
    },
    {
        question: "Why is JavaScript important?",
        choice1: "It causes the sun to rise and set",
        choice2: "It is used to program web pages",
        choice3: "It's not. Computers are lame",
        choice4: "Is mayonnaise an instrument?",
        answer: 2,
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function:myFunction()",
        choice3: "function myFunction()",
        choice4: "Is mayonnaise an instrument?",
        answer: 1,
    },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

function startGame() {
    console.log("Let the game begin...");
    questionCounter = 0;
    score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    getNewQuestion();   
}

function getNewQuestion() {
    showQuestion(shuffledQuestions[questionCounter]);
}

function showQuestion(questions) {
    questionElement.innerText = questions.question;
    choice1.innerText = questions.choice1;
    choice2.innerText = questions.choice2;
    choice3.innerText = questions.choice3;
    choice4.innerText = questions.choice4;
}

startButton.addEventListener("click", startGame);