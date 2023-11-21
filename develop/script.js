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

const questions = [
    {
        question: "What is an array?",
        choice1: "A pack of ravenous moose",
        choice2: "An unordered list of random items",
        choice3: "A collection of data",
        choice4: "idk lol",
        answer: 3,
    },
    {
        question: "What is JavaScript?",
        choice1: "A series of unfortunate events",
        choice2: "A coffee stained film script",
        choice3: "idk lol",
        choice4: "A language used to program web pages",
        answer: 4,
    },
    {
        question: "What term does NOT belong?",
        choice1: "idk lol",
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
        choice4: "idk lol",
        answer: 2,
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function = myFunction()",
        choice2: "function:myFunction()",
        choice3: "function myFunction()",
        choice4: "idk lol",
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
    startTimer();
}

function getNewQuestion() {
    // resetState();
    showQuestion(shuffledQuestions[questionCounter]);
}

// function resetState() {
//     clearStatusClass(document.body);
//     // nextButton.classList.add("hidden");
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild);
//     }
// }

function showQuestion(questions) {
    const button = document.querySelectorAll("choice");
    questionElement.innerText = questions.question;
    question.choices.forEach(choice => {
        button.innerText = choice.text;
        button.classList.add("btn-grid");
        if (answer.correct) {
            button.dataset.answer = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        choices.appendChild(button);
    })
}


// function selectAnswer(e) {
//     const selectedButton = e.target;
//     const correct = selectedButton.dataset.correct;
//     setStatusClass(document.body, correct);
//     Array.from(choices.children).forEach(button => {
//         setStatusClass(button, button.dataset.correct);
//     })
//     if (shuffledQuestions.length > questionCounter + 1) {
//         nextButton.classList.remove("hidden");
//     } else {
//         startButton.innerText = "Restart";
//         startButton.classList.remove("hidden");
//     }

//     return window.location.assign("end.html");
// }

// function setStatusClass(element, correct) {
//     clearStatusClass(element);
//     if (correct) {
//         element.classList.add("correct");
//     } else {
//         element.classList.add("wrong");
//     }
// }

// function clearStatusClass(element) {
//     element.classList.remove("correct");
//     element.classList.remove("wrong");
// }

function startTimer() {
    let timeLeft = 90;
    let timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timer.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            timer.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            timer.textContent = "";
            clearInterval(timeInterval);
            // displayMessage();
        }
    }, 1000);
}

// function displayMessage() {
//     timer.textContent = "Time's up!";
//     setTimeout(function() {
//         timer.textContent = "";
//     }, 1000);
//     return window.location.assign("end.html");
// }

startButton.addEventListener("click", startGame);
// nextButton.addEventListener("click", () => {
//     questionCounter++;
//     getNewQuestion();
// })