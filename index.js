/** @format */

console.clear();

const types = {
  randomNames: document.querySelector("[data-random-names]"),
  submitBtn: document.querySelector("[data-submit]"),
  result: document.querySelector("[data-result]"),
};
types.submitBtn.addEventListener(
  "click",
  debounce(() => {
    const values = types.randomNames.value.split(",");
    const randomNumber = (Math.random() * values.length).toFixed();
    types.result.textContent = `The winner is ${values[randomNumber - 1]}`;
  }, 2000)
);

function debounce(callback, delay = 1000) {
  let timeout;

  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
}
