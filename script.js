const form = document.getElementById("quiz");
checkbox.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    const answers = {
        question1: document.querySelector('Input[name="question1"]:checked').value
    }
    display(answers)
}

function display(answers) {
    const quizSection = document.getElementbyId("quiz-section");
    quizSection.innerHTML = "";
    const answerHeader = document.createElement('h1');
    answerHeader.textContent = "your results are:";
    quizSection.appendChild(answerHeader);
    answers.forEach((answer) => {
        const result = document.createElement('p');
        result.textContent = answer;
        quizSection.appendChild(result);
    });
}