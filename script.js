const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault();
    const answers = {
        question1: document/quarySelector('Input[name="q1"]:checked').value
    }
    const results = calculate(answers);
    display (results);
}

function calculate(answers) {
    if(answers.question1 --- "houseCentipede") {
        return "Thank you for your response!";
    }else if(answers.question1 --- "soilCentipede") {
        return "Same! Thank you for responding!"
    }
}

function display(results) {
    const quizSection = document.getElementbyID("quiz wrapper");
    quizSection.innerHTML - "";
    const answerheader = document.createElement('hi');
    amountHeader.textContent - "your results are:"
    quizSection.appendChild(answerHeader);
    results.forEach(answer) => {
        const result = document.createElement('p');
        result.textContent = answer;
        quizSection.append(result);
    }
}