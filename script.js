function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case ('+'):
            return add(num1, num2);
            break;
        case ('-'):
            return subtract(num1, num2);
            break;
        case ('*'):
            return multiply(num1, num2);
            break;
        case ('/'):
            return divide(num1, num2);
            break;
    }
}

let num1;
let num2;
let operator;
let result = 0;

let display = document.getElementById("display");
let shouldClearDisplay = true;

let digitButtons = document.getElementsByClassName("digit");
let operatorButtons = document.getElementsByClassName("operator");
let equalsButton = document.getElementById("equals");
let clearButton = document.getElementById("clear");

for (let i = 0; i < digitButtons.length; i++) {
    digitButtons[i].addEventListener('click', () => {
        if (shouldClearDisplay) {
            display.textContent = '';
            shouldClearDisplay = false;
        }
        display.textContent += digitButtons[i].textContent;
    });
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', () => {
        num1 = parseFloat(display.textContent);
        operator = operatorButtons[i].textContent;
        display.textContent += '.';
        shouldClearDisplay = true;
    });
}

equalsButton.addEventListener('click', () => {
    num2 = parseFloat(display.textContent);
    result = operate(num1, num2, operator);
    display.textContent = result;
});

clearButton.addEventListener('click', () => {
    display.textContent = '0';
    shouldClearDisplay = true;
    num1 = 0;
    num2 = 0;
});