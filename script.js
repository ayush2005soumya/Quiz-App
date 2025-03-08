const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 3
    },
    {
        question: "What is the world's most expensive spice by weight?",
        answers: ["Vanilla", "Saffron", "Cardamom", "Cinnamon"],
        correct: 1
    },
    {
        question: "Which artist painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: 2
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: ["Venus", "Mars", "Mercury", "Neptune"],
        correct: 2
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: ["China", "Japan", "South Korea", "Thailand"],
        correct: 1
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: ["Christopher Marlowe", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Go", "Gd"],
        correct: 0
    },
    {
        question: "Which planet has the most moons?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 3
    }
];
let currentQuestionIndex = 0;
let score = 0;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    nextButton.style.display = "none";
    scoreElement.innerText = "";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    answerButtons.innerHTML = "";
    nextButton.style.display = "none";
}

function selectAnswer(index) {
    let correctIndex = questions[currentQuestionIndex].correct;
    if (index === correctIndex) {
        score++;
    }
    Array.from(answerButtons.children).forEach((button, i) => {
        button.disabled = true;
        if (i === correctIndex) {
            button.style.backgroundColor = "green";
        } else {
            button.style.backgroundColor = "red";
        }
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerText = "Quiz Over!";
        answerButtons.innerHTML = "";
        scoreElement.innerText = `Your score is ${score}/${questions.length}`;
        nextButton.innerText = "Restart";
        nextButton.style.display = "block";
        nextButton.addEventListener("click", startQuiz);
    }
});

startQuiz();
