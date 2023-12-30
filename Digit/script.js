let operationsList = ["+", "-", "*"];
let numbersList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let question = document.getElementById("question");
let gold = 0;

document.getElementById("press-me").addEventListener("click", function () {
    localStorage.setItem("gold", gold);
});

document.getElementById("gold-display").textContent = "Gold: " + parseInt(localStorage.getItem("gold"));

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function newQuestion() {
    question.textContent = randomChoice(numbersList) + " " + randomChoice(operationsList) + " " + randomChoice(numbersList);
}

function evaluateAnswer() {
    let currentAnswer = eval(question.textContent);

    if (currentAnswer == document.getElementById("answer-input").value) {
        gold++;
        localStorage.setItem("gold", parseInt(localStorage.getItem("gold")) + 1);
        document.getElementById("gold-display").textContent = "Gold: " + parseInt(localStorage.getItem("gold"));
    } else {
        gold = 0;
        localStorage.setItem("gold", 0);
        document.getElementById("gold-display").textContent = "Gold: " + parseInt(localStorage.getItem("gold"));
    }
    newQuestion();
    document.getElementById("answer-input").value = "";
}

newQuestion();

document.getElementById("submit-btn").addEventListener("click", evaluateAnswer);
document.getElementById("answer-input").addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        evaluateAnswer();
    }
});