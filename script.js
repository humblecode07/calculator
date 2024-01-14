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


one.addEventListener('click', operate);
two.addEventListener('click', operate);
three.addEventListener('click', operate);
four.addEventListener('click', operate);
five.addEventListener('click', operate);
six.addEventListener('click', operate);
seven.addEventListener('click', operate);
eight.addEventListener('click', operate);
nine.addEventListener('click', operate);
// add.addEventListener('click', calculate);
// subtract.addEventListener('click', calculate);
// multiply.addEventListener('click', calculate);
// divide.addEventListener('click', calculate);
// equal.addEventListener('click', calculate);
// decimal.addEventListener('click', calculate);
// clear.addEventListener('click', calculate);
// sign.addEventListener('click', calculate);
// del.addEventListener('click', calculate);

let operandOne = "5.5";
let operator = "+"
let operandTwo = "5";

// Functions

function addition(valueOne, valueTwo) {
    return parseFloat(valueOne) + parseFloat(valueTwo);
}

function subtraction(valueOne, valueTwo) {
    return parseFloat(valueOne) - parseFloat(valueTwo);
}

function multiplication(valueOne, valueTwo) {
    return parseFloat(valueOne) * parseFloat(valueTwo);
}

function division(valueOne, valueTwo) {
    return parseFloat(valueOne) / parseFloat(valueTwo);
}

function operate(num1, ope, num2) {
    if (ope === "+") {
        return addition(num1, num2);
    }
    else if (ope === "-") {
        return subtraction(num1, num2);
    }
    else if (ope === "*") {
        return multiplication(num1, num2);
    }
    else if (ope === "/") {
        return division(num1, num2);
    }
}

console.log(operate(operandOne, operator, operandTwo))