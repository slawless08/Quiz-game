var startButton = document.querySelector("#start");
var gameTitle = document.querySelector("#game-title");
var gameDescr = document.querySelector("#game-desc");
var quizQuesitons = [questions];
var quizAnswers = [questionOneAnswers];
var listAnswers = document.querySelector("#answers");
var disappear = document.querySelector("#disappear");
var list = document.createElement("ul");

var questions = {
    one: "Should I get a sparkling water?",
    two: "Does this question work?",
    three: "Will this one work too?",
    four: "Last but not least?"
}

var questionOneAnswers = ["yes","no","maybe so"];

console.log(questions);
console.log(questionOneAnswers);

startButton.addEventListener('click', function () {
    gameTitle.textContent = "";
    gameDescr.textContent = ""

    startQuiz();
    disappear.textContent = "";
})

function startQuiz() {
    gameTitle.textContent = questions.one;

    document.body.appendChild(list)
    questionOneAnswers.forEach(function (e) {
        var li = document.createElement("li");
        li.innerText = e;
        console.log(li);
        list.append(li);
    })

}
