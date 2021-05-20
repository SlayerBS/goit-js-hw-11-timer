const refs = {
  secondsField: document.querySelector('[data-value="secs"]'),
  minutesField: document.querySelector('[data-value="mins"]'),
  hoursField: document.querySelector('[data-value="hours"]'),
  daysField: document.querySelector('[data-value="days"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    this.timerId = setInterval(() => {
      const time = this.targetDate - new Date();
      const numbers = this.getNumbers(time);
      refs.secondsField.innerText = numbers[3];
      refs.minutesField.innerText = numbers[2];
      refs.hoursField.innerText = numbers[1];
      refs.daysField.innerText = numbers[0];
    }, 1000);
  }

  getNumbers = time => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return [days, hours, mins, secs];
  };
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2021'),
});

timer.start();
