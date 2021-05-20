const refs = {
  secondsField: document.querySelector('[data-value="secs"]'),
  minutesField: document.querySelector('[data-value="mins"]'),
  hoursField: document.querySelector('[data-value="hours"]'),
  daysField: document.querySelector('[data-value="days"]'),
};

getNumbers = function (time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  return [days, hours, mins, secs];
};

setDate = function (year, month, day) {
  return new Date(year, month, day);
};

const targetDate = setDate(2022, 01, 02);

timerId = setInterval(() => {
  const time = targetDate - new Date();
  const numbers = getNumbers(time);
  console.log(numbers);
  refs.secondsField.innerText = numbers[3];
  refs.minutesField.innerText = numbers[2];
  refs.hoursField.innerText = numbers[1];
  refs.daysField.innerText = numbers[0];
}, 1000);
