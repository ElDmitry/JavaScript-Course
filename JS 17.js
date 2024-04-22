'use strict';

//#1
/*
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('Лівий клік');
});

button.addEventListener('contextmenu', (event) => {
    console.log('Правий клік');
});

button.addEventListener('dblclick', (event) => {
    console.log('Подвійний клік');
});
*/

//#2
/*
const showButton = document.querySelector('body')

showButton.addEventListener('keyup', (event) => {
    alert(event.key)
});
*/

//#3
/*
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

function updateText() {
    const textValue = input.value;
    h1.textContent = textValue;
}

input.addEventListener('input', updateText);
*/

//#4

// JS 17.js

// Отримуємо посилання на елементи DOM
const value1Input = document.querySelector('.value1');
const value2Input = document.querySelector('.value2');
const resultInput = document.querySelector('.result');
const buttons = document.querySelectorAll('.buttons-container button');

let operator = ''; // змінна для зберігання вибраного оператора
let num1 = ''; // змінна для зберігання першого числа

// Функція для обчислення результату
function calculate() {
    const num2 = parseFloat(value2Input.value);

    let result;

    switch (operator) {
        case '+':
            result = parseFloat(num1) + num2;
            break;
        case '-':
            result = parseFloat(num1) - num2;
            break;
        case '*':
            result = parseFloat(num1) * num2;
            break;
        case '/':
            result = parseFloat(num1) / num2;
            break;
        default:
            result = 'Виберіть операцію';
    }

    resultInput.value = result;
}

// Додаємо обробник подій для кожної кнопки
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isNaN(button.textContent)) {
            if (operator === '') {
                num1 += button.textContent;
                value1Input.value = num1;
            } else {
                value2Input.value += button.textContent;
            }
        } else if (button.textContent === '=') {
            calculate();
        } else {
            operator = button.textContent;
            value2Input.focus();
        }
    });
});



