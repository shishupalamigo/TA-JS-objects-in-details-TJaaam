// Prototypal Pattern
let questionMethods = {
    getCorrectAnswer: function () {
        return this.options[this.correctAnswerIndex];
    },
    isAnswerCorrect: function (index) {
        return index === this.correctAnswerIndex;
    }
}

function Question (title, options, correctAnswerIndex) {
    let question = Object.create(questionMethods);
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    return question;
}

// Pseudoclassical Pattern 

function Question (title, options, correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex =  correctAnswerIndex;
}

Question.prototype = {
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    },
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    }
}

//   Class Pattern 

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex];
    }
    isAnswerCorrect(index) {
        return index === this.correctAnswerIndex;
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );

  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );  

  let thirdQuestion = new Question("Where is the capital of Spain", ["Madrid", "Barcelona", "Sevilla", "Las Palmas"], 0);

 let fourthQuestion = new Question("Where is the capital od USA", ["New York", "California", "New Jersey", "Washington DC"], 3); 


