document.addEventListener("DOMContentLoaded", function(e) {
let count = 1;
const quantity = document.getElementById('quantity');

function increase() {
    count++;
    quantity.textContent = count;
}

function decrease() {
    if (count > 0) {
        count--;
        quantity.textContent = count;
    }
}

const form = document.getElementById('email-signup');
const input = document.getElementById('email');

const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isEmailValid(value) {
  return pattern.test(value);
}

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.backgroundColor = '#b6e3bd';
  } else {
    input.style.backgroundColor = '#e3b6b6';
    //e.preventDefault();
  }
}

input.addEventListener('input', onInput);

});