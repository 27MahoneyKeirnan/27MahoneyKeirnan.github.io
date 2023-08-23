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
    if(answers.question1 === "SoilCentipede") {
        result.textContent = "Same! Thanks for responding!";
    } else if(answers.question1 === "StoneCentipede") {
        result.textContent = "Nice! Thank you for submitting!";
    } else if(answers.question1 === "HouseCentipede") {
        result.textContent = "Great! Thanks for sharing!";
    } else if(answers.question1 === "AllCentipedes") {
        result.textContent = "Super! Thank you for responding!";
    } else if(answers.question1 === "ScolopCentipede") {
        result.textContent = "Awesome! Thanks for submitting!";
    } else if(answers.question1 === "CraterCentipede") {
        result.textContent = "Epic! Thank you for sharing!";
    } else if(answers.question1 === "NoCentipedes") {
        result.textContent = "Why? That's goofy.";
    }
    quizSection.appendChild(result);
}