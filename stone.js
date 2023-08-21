const form = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    const answers = {
        question1: document.querySelector('input[name="question1"]:checked').value
    }
    display(answers);
}

function display(answers) {
    const quizSection = document.getElementById("quiz-section");
    quizSection.innerHTML = "";
    const answerHeader = document.createElement('h1');
    answerHeader.textContent = "Your results are: ";
    quizSection.appendChild(answerHeader);
    const result = document.createElement('p');
    if(answers.question1 === "yes") {
        result.textContent = "Glad to hear it! :D";
    } else if(answers.question1 === "no") {
        result.textContent = "Aw, sorry to hear that :(";
    }
    quizSection.appendChild(result);
}