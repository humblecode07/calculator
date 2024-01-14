let operandOne = "5.5";
let operator = "+"
let operandTwo = "5";

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