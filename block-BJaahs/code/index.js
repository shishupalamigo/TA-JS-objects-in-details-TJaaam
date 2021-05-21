let title = "title";
let options = ["option1", "option2", "option3", "option4"];

let correctAnswerIndex = 2;

function isAnswerCorrect (index) {
    return index === correctAnswerIndex;
}

function getCorrectAnswer() {
    return correctAnswerIndex;
}


let question1 = {
    title: "title",
    options: ["option1", "option2", "option3", "option4"],
    correctAnswerIndex: 2,
    isAnswerCorrect: function(index) {
        return index === correctAnswerIndex;
    }, 
    getCorrectAnswer: function () {
        return correctAnswerIndex;
    } 
}; 
// Using function to create object 

function createQues1(title, options, correctAnswerIndex) {
    let ques =  {};
    ques.title = title;
    ques.options = options;
    ques.correctAnswerIndex = correctAnswerIndex;
    ques.isAnswerCorrect =  function(index) {
        return index === correctAnswerIndex;
    }
    ques.getCorrectAnswer = function () {
        return correctAnswerIndex;
    }
    return ques; 
}

function createQues2(title, options, correctAnswerIndex) {
    let ques =  {};
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
    this.isAnswerCorrect =  function(index) {
        return index === correctAnswerIndex;
    }
    ques.getCorrectAnswer = function () {
        return correctAnswerIndex;
    } 
    return ques;
}


let firstQuestion = createQues1("Capital of Spain", ["Madrid", "Sevilla", "Barcelona", "Las Palmas"], 0);
let secondQuestion = createQues2("Capital of USA", ["New York", "Washington DC", "Texas", "California"], 1);
let thirdQuestion = createQues1("Where is the capital of Jordan", ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'], 1);