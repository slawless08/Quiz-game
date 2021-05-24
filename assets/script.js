var startButton = document.querySelector("#start");
var gameTitle = document.querySelector("#game-title");
var gameDescr = document.querySelector("#game-desc");
var listAnswers = document.querySelector("#answers");
var disappear = document.querySelector("#disappear");
var feedback = document.querySelector("#feedback");
var timer = document.querySelector("#timer");
var secondsLeft = 30; 
var runQuizEnd = false;
var score = document.querySelector("#score");
var inputInitials = document.createElement("input");
var inputForm = document.querySelector("#score-form")
var inputSubmit = document.createElement("input");

function setTimer(){
    var timerInterval = setInterval(function(){
        
        if (runQuizEnd){
            clearInterval(timerInterval);
            endQuiz();
        }

        else if (secondsLeft === 0 ){
            
            runQuizEnd = true;
            clearInterval(timerInterval);
            endQuiz();
        }
        if (runQuizEnd !== true){
        secondsLeft--;
        timer.textContent = secondsLeft;
        } else {
            null
        }
        
    }, 1000);
}
var questions = [
    {
        questionName: "Question 1?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 2",
    },
    {
        questionName: "Question 2?",
        choices: ["option 1", "option 2", "option 3", "option 4"],
        correct: "option 4",
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
        endQuiz();
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
    gameTitle.textContent = "This is the end of the quiz!";
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
    inputInitials.setAttribute("name", "initials");
    document.querySelector("#label").textContent = "Enter your initials: ";

    inputForm.append(inputSubmit);
    inputSubmit.setAttribute("type" , "submit");
    inputSubmit.setAttribute("value", "Submit!");



}

// store the time to local storage
// display the end page with a form to submit initials and display leaderboard--> function to sort by score
// setItem will save to local storage, localStorage.getItem will grab it from the storage 
// .val to grab the value in the text box they type into, grab timer variable as the score

// changes the previous title to the question

    // my attempt at a for loop to append list items -- doesn't work!! , having issues with the length not being defined
    // var questionAnswers = quizAnswers[a];
    // for (var i = 0; i < questionAnswers.length; i++){
    //     var answer = document.createElement("li");
    //     answer.appendChild(document.textContent(quizAnswers[i]));
    //     listAnswers.appendChild(answer);

    // appends the answers to the list -- it works! Is there a better way to get it to loop easily?

    // document.body.appendChild(list)
    // questionOneAnswers.forEach(function (e) {
    //     var li = document.createElement("li");
    //     li.innerText = e;
    //     listAnswers.append(li);
    // })


    /*  my attempt at styling the list items that are appended -- doesn't work!!!
        var stylePls = document.querySelectorAll("li");
        for (var i =0; i < stylePls.length; i++);{
        stylePls[i].setAttribute("style", "background-color: rgb(142, 201, 241); border: 2px solid black;");
     
    */