// function Timer(seconds) {
//   this.seconds = seconds;
// }

// Timer.prototype.start = function () {
//   const instance = this;
//   var timerInterval = setInterval(() => {
//     if (instance.seconds === 0) {
//       clearInterval(timerInterval);
//     }

//     console.log(instance.seconds);
//     instance.seconds -= 1;
//   }, 1000);
// };

// Refactored code in ES6 class syntax
class Timer {
  constructor(seconds) {
    this.seconds = seconds;
  }

  start() {
    const timerInterval = setInterval(() => {
      if (this.seconds === 0) {
        clearInterval(timerInterval);
      }
      console.log(this.seconds);
      this.seconds -= 1;
    }, 1000);
  }
}

export default Timer;
