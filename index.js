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
    this.setDate();
    this.timerId = setInterval(() => this.setDate(), 1000);
  }

  setDate = () => {
    const time = this.targetDate - new Date();
    const numbers = this.getNumbers(time);
    this.displayNumbers(numbers);
  };

  displayNumbers = number => {
    refs.secondsField.innerText = number.secs;
    refs.minutesField.innerText = number.mins;
    refs.hoursField.innerText = number.hours;
    refs.daysField.innerText = number.days;
  };

  getNumbers = time => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  };
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 25, 2021'),
});

timer.start();
