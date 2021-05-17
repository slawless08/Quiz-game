var startButton = document.querySelector("#start");
var gameTitle = document.querySelector("#game-title");
var gameDescr = document.querySelector("#game-desc");
var quizQuesitons = ["Should I get another sparkling water?"];
var quizAnswers = ["Yes", "No", "Maybe", "Possibly not"];
var listAnswers = document.querySelector("#answers");
var disappear = document.querySelector("#disappear");
var list = document.createElement("ul");

startButton.addEventListener('click', function () {
    gameTitle.textContent = "";
    gameDescr.textContent = ""

    startQuiz();
    disappear.textContent = "";
})

function startQuiz() {
    gameTitle.textContent = quizQuesitons;

    document.body.appendChild(list)
    quizAnswers.forEach(function (e) {
        var li = document.createElement("li");
        li.innerText = e;
        console.log(li);
        list.append(li);
    })

}
