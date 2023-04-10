import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');
const delayInput =  document.querySelector("[name=delay]");
const stepInput = document.querySelector("[name=step]");
const amountInput = document.querySelector("[name=amount]");

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  if (delayInput.value < 0 || amountInput.value <= 0) {
    return Notify.warning("You written value which less than zero");
 }

  let delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
