var startButton = document.querySelector("#start");
var gameTitle = document.querySelector("#game-title");
var gameDescr = document.querySelector("#game-desc");
var listAnswers = document.querySelector("#answers");
var disappear = document.querySelector("#disappear");
var feedback = document.querySelector("#feedback");
var timer = document.querySelector("#timer");
var secondsLeft = 60; 
var runQuizEnd = false;
var score = document.querySelector("#score");
var inputForm = document.querySelector("#score-form")


var inputInitials = document.createElement("input");
var inputSubmit = document.createElement("button");

function setTimer(){
    var timerInterval = setInterval(function(){
        
        if (runQuizEnd || secondsLeft === 0){
            clearInterval(timerInterval);
            endQuiz();
        } else {
        secondsLeft--;
        timer.textContent = secondsLeft;
        } 
        
    }, 1000);
}
var questions = [
    {
        questionName: "Which of the following options will log x as a string when console.log(typeof(x)) is run?",
        choices: ["var x = 25", "var x = twenty-five", "var x = '25'", "var x = string"],
        correct: "var x = '25'",
    },
    {
        questionName: "How do you select the first index of an array?",
        choices: ["array[0]", "array[1]", "array[first]", "array[1st]"],
        correct: "array[0]",
    },
    {
        questionName: "Select the correct way to call the function pickMe.",
        choices: ["pickMe;", "pickMe()", "pickme{}", "pickMe();"],
        correct: "pickMe();",
    },
    {
        questionName: "What is the correct way to code the logical operator 'and?'",
        choices: ["and", "&&", "&", ".and"],
        correct: "&&",
    },
    {
        questionName: "How do you select an html element with the id of 'select-me'?",
        choices: ["document.querySelector('#select-me'", "document.querySelector(select-me)", "document.querySelector(#select-me)", "document.querySelector('select-me'"],
        correct: "document.querySelector('#select-me'",
    }
]
var questionIndex = 0;
var currentQuestion = questions[questionIndex];

// Start button that runs the quiz function as well as makes the other content 'disappear'
startButton.addEventListener('click', function () {
    gameTitle.textContent = "";
    gameDescr.textContent = ""

    getQuestion();
    disappear.textContent = "";
    startButton.remove();
    setTimer();
    timer.textContent = secondsLeft;
})


function getQuestion() {
    currentQuestion = questions[questionIndex];

    gameTitle.textContent = currentQuestion.questionName;

    currentQuestion.choices.forEach(function (choice) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute("value", choice);
        // style later!!
        answerBtn.setAttribute("class", "styled-button");
        answerBtn.textContent = choice;
        answerBtn.onclick = checkAnswer;
        listAnswers.appendChild(answerBtn);
    })
}

function checkAnswer() {
    if (this.value !== currentQuestion.correct) {
        secondsLeft = secondsLeft - 10;
        feedback.textContent = "Incorrect! You lost 10 seconds.";
    } else {
        feedback.textContent = "Correct!";
        // sound effects if time available
    }
    

    if (questionIndex === (questions.length -1)){
        removeQuestions(listAnswers);
        runQuizEnd = true;
        return runQuizEnd
    } else {
        removeQuestions(listAnswers);
        questionIndex++; 
        getQuestion();
    }
    
}

function removeQuestions(parent){
    parent.innerHTML = "";
    
}
function endQuiz(){
    gameTitle.textContent = "This is the end!!";
    if (secondsLeft !== 0){
        console.log(secondsLeft);
        score.textContent = "You scored " + secondsLeft + " points";
        timer.textContent = "";
    } else {
        console.log(secondsLeft);
        score.textContent = "You scored " + secondsLeft + " points";
        timer.textContent = "";
    }
    inputForm.append(inputInitials);
    inputInitials.setAttribute("type", "text");
    inputInitials.setAttribute("id", "input");
   

    document.querySelector("#label").textContent = "Enter your initials: ";

    inputForm.append(inputSubmit);
    inputSubmit.setAttribute("id", "submit");
    inputSubmit.textContent = "Save score";

    var highScores = document.getElementById("high-scores");
        for (i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        highScores.innerHTML += `${key}: ${value} <br />`;
         }

    document.querySelector("#submit").addEventListener('click', function(event){
        var plsWork = document.querySelector("input").value;
        console.log(plsWork);
        if (plsWork){
        localStorage.setItem("initials", plsWork);
        localStorage.setItem("score", secondsLeft);
        }
        var highScores = document.getElementById("high-scores");
        for (i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        highScores.innerHTML += `${key}: ${value} <br />`;
         }

        event.preventDefault();
    })

    var scoreBoardTitle = document.createElement("h3");
    var scoreBoard = document.getElementById("score-board");
    scoreBoard.append(scoreBoardTitle);
    scoreBoardTitle.textContent = "High Scores";
}

