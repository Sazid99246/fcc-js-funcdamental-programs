const questions = [
    {
        category: "Science",
        question: "What is the chemical symbol for water?",
        choices: ["H2O", "O2", "CO2"],
        answer: "H2O"
    },
    {
        category: "Geography",
        question: "Which is the largest continent?",
        choices: ["Asia", "Africa", "Europe"],
        answer: "Asia"
    },
    {
        category: "History",
        question: "Who was the first president of the United States?",
        choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
        answer: "George Washington"
    },
    {
        category: "Mathematics",
        question: "What is the square root of 64?",
        choices: ["6", "8", "10"],
        answer: "8"
    },
    {
        category: "Technology",
        question: "Who is known as the father of the computer?",
        choices: ["Alan Turing", "Charles Babbage", "Bill Gates"],
        answer: "Charles Babbage"
    }
];

function getRandomQuestion(questionsArray) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    return questionsArray[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getResults(selectedQuestion, computerChoice) {
    if (computerChoice === selectedQuestion.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`;
    }
}
