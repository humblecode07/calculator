const input = document.getElementById('input');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const add = document.getElementById('plus');
const subtract = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equal = document.getElementById('equal');
const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
const sign = document.getElementById('sign');
const del = document.getElementById('delete');


one.addEventListener('click', calculate);
two.addEventListener('click', calculate);
three.addEventListener('click', calculate);
four.addEventListener('click', calculate);
five.addEventListener('click', calculate);
six.addEventListener('click', calculate);
seven.addEventListener('click', calculate);
eight.addEventListener('click', calculate);
nine.addEventListener('click', calculate);
add.addEventListener('click', calculate);
subtract.addEventListener('click', calculate);
multiply.addEventListener('click', calculate);
divide.addEventListener('click', calculate);
equal.addEventListener('click', calculate);
decimal.addEventListener('click', calculate);
clear.addEventListener('click', calculate);
sign.addEventListener('click', calculate);
del.addEventListener('click', calculate);

// Functions

function calculate() {
    input.innerHTML += this.innerHTML;
}