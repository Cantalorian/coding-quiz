var time = 90;
var timer = setInterval(function () {
  console.log(time);
  time--;
  if (time === 0) {
    stopInterval();
  }
}, 1000);

var stopInterval = function () {
  console.log("time is up!");
  clearInterval(timer);
};

var questions = [];
