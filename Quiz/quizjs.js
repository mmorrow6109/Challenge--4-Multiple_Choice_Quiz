const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;   
let availableQuestions = [];

let questions = [
    {
        question: "What is an array?",
        choice1: "A pack of wild boars",
        choice2: "An unordered list of random items",
        choice3: "A collection of data",
        choice4: "A laser that shoots from the moon",
        answer: 3,
    },
    {
        question: "What is JavaScript?",
        choice1: "A hot cup of coffee",
        choice2: "A coffee stained film script",
        choice3: "A series of unfortunate events",
        choice4: "A language used to program web pages",
        answer: 4,
    },
    {
        question: "What term does NOT belong?",
        choice1: "copy/paste",
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
        choice4: "Because",
        answer: 2,
    },
    {
        question: "What is an array?",
        choice1: "A pack of wild boars",
        choice2: "An unordered list of random items",
        choice3: "A collection of data",
        choice4: "A laser that shoots from the moon",
        answer: 3,
    },
]