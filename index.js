const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let hours = 0;
let minutes = 0;
let seconds = 0;
const createTimerAnimator = () => {
  return (timeTillEnd) => {
    let intervalId = setInterval(() => {
      hours = Math.floor(timeTillEnd / 60 / 60);
      minutes = Math.floor(timeTillEnd / 60) - (hours * 60);
      seconds = timeTillEnd % 60;

      if (timeTillEnd > 0) {
        timerEl.innerHTML = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        timeTillEnd -= 1
      } else {
        timerEl.innerHTML = 'Время вышло'
        clearInterval(intervalId)
      }
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  if (!Number.isInteger(+e.data)) {
    inputEl.value = inputEl.value.replace(e.data, '')
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
