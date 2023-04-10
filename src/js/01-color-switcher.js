function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.querySelector("body");

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

let intervalId = null;

function onClickStart() {
    intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
}, 1000);
    startBtn.setAttribute('disabled', false);
    stopBtn.removeAttribute("disabled");
};
function onClickStop() {
    clearInterval(intervalId);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", false);
}