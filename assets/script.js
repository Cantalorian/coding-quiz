// set initial variables to store core game logic
var highScore1 = "highScore1",
  highScore2 = "highScore2",
  highScore3 = "highScore3";
var decrement = 5;
var quizContainer = document.getElementById("quiz-container");
var title = document.getElementById("intro");
var bulk = document.getElementById("intro-text");
var timerEl = document.getElementById("countdown");
var startButton = document.getElementById("btn-start");

// create dynamic display to run game
title.textContent = "Coding Quiz Challenge!";
bulk.textContent =
"Welcome to the coding quiz challenge! Do your best to answer all the questions quickly. Be careful. Wrong answers will make you lose time. Make it through all the questions with time remaining to claim your spot on the leaderboard!";
startButton.textContent = "Bring it on!";

var display = function() {
  document.getElementById("intro").innerHTML = questionBank[0].question;
  document.getElementById("intro-text").innerHTML = "";
  document.getElementById("a").innerHTML = questionBank[0].a;
  document.getElementById("b").innerHTML = questionBank[0].b;
  document.getElementById("c").innerHTML = questionBank[0].c;
  
}

var runGame = function () {
  // timer operation
  function countdown() {
    var timeLeft = 60;
    
    var timeInterval = setInterval(function () {
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
  countdown();
  displayHighscores();
  if (countdown.timeLeft - decrement > 0) {
    countdown.timeLeft -= decrement;
  } else {
    endGame();
  }
  
  // var quizQuestion = document.getElementById("quiz-container");
  // quizQuestion.innerHTML = questionBank[0];
  display();
};

var endGame = function () {};

// var stopInterval = function () {
  //   console.log("time is up!");
  //   clearInterval(timer);
  // };
  
  // var gameLogic = function (questions) {
    //   this.score = 0;
    //   this.questions = questions;
    //   this.questionIndex = 0;
    // };
    
    // gameLogic.getQuestion = function () {
      //   return this.questionBank[this.questionBank];
      // };
      
      // gameLogic.selection = function (answer) {
        //   if (this.getQuestion().isCorrect(answer)) {
          //     this.score++;
          //   }
          //   this.questionBankIndex++;
          // };
          
          // function question(text, choices, answer) {
            //   this.text = text;
            //   this.choices = choices;
            //   this.answer = answer;
            // }
            
            // question.isCorrect = function (choice) {
              //   return this.answer === choice;
              // };
              
              // var questionBank = [
                //   new question("blah blah blah?", ["a", "b", "c", "d"], "c"),
                //   new question("blah blah blah?", ["a", "b", "c", "d"], "b"),
                //   new question("blah blah blah?", ["a", "b", "c", "d"], "d"),
                //   new question("blah blah blah?", ["a", "b", "c", "d"], "a"),
                //   new question("blah blah blah?", ["a", "b", "c", "d"], "c"),
                // ];
                var questionBank = [
                  {
                    question: "How are you today?",
                    a: "Awesome",
                    b: "Great!",
                    c: "Wonderful!",
                    answer: "Awesome",
                  },
                  {
                    question: "",
                    a: "",
    b: "",
    c: "",
    answer: "B",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    answer: "B",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    answer: "A",
  },
  {
    question: "",
    a: "",
    b: "",
    c: "",
    answer: "C",
  },
];

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

startButton.onclick = runGame;
