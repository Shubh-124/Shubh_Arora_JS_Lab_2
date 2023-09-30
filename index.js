//questions database
let questions = [
    {
        title: "Javascript is a/an _______ language?",
        answer: [
            {
                text: "Object-Oriented",
                isCorrect: true,
            },
            {
                text: "Object-Based",
                isCorrect: false,
            },
            {
                text: "Procedural",
                isCorrect: false,
            },
            {
                text: "None of the above",
                isCorrect: false,
            },
        ]
    },
    {
        title: "Which of the following keywords is used to define a variable in Javascript?",
        answer: [
            {
                text: "var",
                isCorrect: false,
            },
            {
                text: "let",
                isCorrect: false,
            },
            {
                text: "const",
                isCorrect: false,
            },
            {
                text: "All of the above",
                isCorrect: true,
            },
        ]
    },
    {
        title: "Upon encountering empty statements, what does the Javascript Interpreter do",
        answer: [
            {
                text: "Throws an error",
                isCorrect: false,
            },
            {
                text: "Ignores the statement",
                isCorrect: true,
            },
            {
                text: "Gives a warning",
                isCorrect: false,
            },
            {
                text: "None of the above",
                isCorrect: false,
            },
        ]
    },
    {
        title: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answer: [
            {
                text: "Both the datatype and result of the expression are compared",
                isCorrect: true,
            },
            {
                text: "Only the datatype of expression is compared",
                isCorrect: false,
            },
            {
                text: "Only the value of expression is compared",
                isCorrect: false,
            },
            {
                text: "None of the above",
                isCorrect: false,
            },
        ]
    },
    {
        title: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answer: [
            {
                text: "Boolean",
                isCorrect: false,
            },
            {
                text: "Undefined",
                isCorrect: true,
            },
            {
                text: "Object",
                isCorrect: false,
            },
            {
                text: "Integer",
                isCorrect: false,
            },
        ]
    },
    {
        title: "Which function is used to serialize an object into a JSON string in Javascript?",
        answer: [
            {
                text: "stringify()",
                isCorrect: true,
            },
            {
                text: "parse()",
                isCorrect: false,
            },
            {
                text: "convert()",
                isCorrect: false,
            },
            {
                text: "None of the above",
                isCorrect: false,
            },
        ]
    },
    {
        title: "How to stop an interval timer in Javascript?",
        answer: [
            {
                text: "clearInterval",
                isCorrect: true,
            },
            {
                text: "clearTimer",
                isCorrect: false,
            },
            {
                text: "intervalOver",
                isCorrect: false,
            },
            {
                text: "None of the above",
                isCorrect: false,
            },
        ]
    },
    {
        title: "How are objects compared when they are checked with the strict equality operator?",
        answer: [
            {
                text: "The contents of the objects are compared",
                isCorrect: false,
            },
            {
                text: "Their references are compared",
                isCorrect: true,
            },
            {
                text: "Both options are true",
                isCorrect: false,
            },
            {
                text: "None of the above",
                isCorrect: false,
            },
        ]
    },
    {
        title: "Which of the following object method can be used to get a new function from a existing one:",
        answer: [
            {
                text: "Call()",
                isCorrect: false,
            },
            {
                text: "Apply()",
                isCorrect: false,
            },
            {
                text: "Bind()",
                isCorrect: true,
            },
            {
                text: "None of the above",
                isCorrect: false,
            },
        ]
    },
    {
        title: "We can define a function having no name in JavaScript-",
        answer: [
            {
                text: "When the function is defined using function expression syntax",
                isCorrect: true,
            },
            {
                text: "When the function is predefined",
                isCorrect: false,
            },
            {
                text: "When the function is defined as a looping statement",
                isCorrect: false,
            },
            {
                text: "All of the above",
                isCorrect: false,
            },
        ]
    }
]

//js logic
let i = 0;
let n = questions.length
let score = 0;
function loadQuestions() {
    var question = document.querySelector("#question")
    question.innerHTML = questions[i].title;
    document.querySelector('#progress').innerHTML = `Question ${i + 1} of ${n}`
    //options
    let x = 0;
    var btns = document.querySelectorAll('.btn')
    btns.forEach((btn) => {
        btn.querySelector('span').innerHTML = questions[i].answer[x].text;
        x++;
    })

}
loadQuestions()
function checkAnswer(id) {
    let btn = document.getElementById(id)

    let optionNo = parseInt(id.substring(3, 4))
    if (questions[i].answer[optionNo].isCorrect) {
        console.log("Correct")
        //add to score
        btn.style.backgroundColor = "#008000"
        score += 5;
    } else {
        console.log("Wrong")
        btn.style.backgroundColor = "#ff0000"
    }
    setTimeout(function () {
        btn.style.backgroundColor = "#01BBFF"
        nextQuestion();
    }, 1000)
}
function nextQuestion() {
    i++;
    if (i < n)
        loadQuestions();
    else {
        document.querySelector('.quiz-items').classList.add("finished")
        document.querySelector('.result').classList.remove("res")
        //display the score
        let element = document.querySelector('.score')
        element.innerHTML = `<h2>Score: ${score}/50</h2>
        <p>Accuracy: ${((score / 5) / n) * 100}%</p>`
    }
}
function playAgain() {
    i = 0;
    score = 0;
    loadQuestions();
    document.querySelector('.quiz-items').classList.remove("finished")
    document.querySelector('.result').classList.add("res")
}
