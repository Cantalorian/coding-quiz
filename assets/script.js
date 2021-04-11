var highScore1 = "highScore1",
  highScore2 = "highScore2",
  highScore3 = "highScore3";
var decrement = 5;
var title = document.getElementById("intro");
var bulk = document.getElementById("intro-text");
var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("btn-start");
var endGame = function () {};
var runGame = function () {
  displayHighscores();
  if (state.timeLeft - decrement > 0) {
    state.timeLeft -= decrement;
  } else {
    endGame();
  }
};

title.textContent = "Coding Quiz Challenge!";
bulk.textContent = "Welcome to the coding quiz challenge! Do your best to answer all the questions quickly. Be careful. Wrong answers will make you lose time. Make it through all the questions with time remaining to claim your spot on the leaderboard!";

function countdown() {
  var timeLeft = 60;

  var timeInterval = setInterval(function() {
    
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "Time is up!";
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // endGame();
    }
  }, 1000);
}


var stopInterval = function () {
  console.log("time is up!");
  clearInterval(timer);
};

var state = {
  timeLeft: 60,
  finalScore: 0,
  questions: [
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
      },
      correctAnswer: "c",
    },
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
      },
      correctAnswer: "b",
    },
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
      },
      correctAnswer: "b",
    },
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
      },
      correctAnswer: "a",
    },
    {
      question: "",
      answers: {
        a: "",
        b: "",
        c: "",
      },
      correctAnswer: "c",
    },
  ],
};

var displayHighscores = function () {
  var h1 = localStorage.getItem(highScore1);
  if (h1 === null) {
    h1 = "";
  }
  var h2 = localStorage.getItem(highScore2);
  if (h2 === null) {
    h2 = "";
  }
  var h3 = localStorage.getItem(highScore3);
  if (h3 === null) {
    h3 = "";
  }
  document.getElementById(highScore1).textContent = h1;
  document.getElementById(highScore2).textContent = h2;
  document.getElementById(highScore3).textContent = h3;
};

startButton.onclick = countdown;