'use strict';

//#1
/*
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('Лівий клік');
});

button.addEventListener('contextmenu', () => {
    console.log('Правий клік');
});

button.addEventListener('dblclick', () => {
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

/*
let button = document.querySelector('button');
button.addEventListener('click', function() {
    const colorName = document.querySelector('input').value;
    const reservedColors = [
        'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon',
        'navy', 'olive', 'orange', 'purple', 'red', 'silver', 'teal', 'white', 'yellow'
    ];

    if (reservedColors.includes(colorName)) {
        const colorButton = document.createElement('button');
        colorButton.textContent = colorName;
        colorButton.addEventListener('click', function() {
            document.body.style.backgroundColor = colorName;
        });
        document.body.appendChild(colorButton);
    } else {
        alert('Такого кольору немає');
    }
});
*/




/*
document.addEventListener('DOMContentLoaded', function() {
    const value1Input = document.querySelector('.value1');
    const value2Input = document.querySelector('.value2');
    const resultInput = document.querySelector('.result');

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
      button.addEventListener('click', function() {
        if (button.textContent === '=') {
          calculate();
        } else {
          operator = button.textContent;
        }
      });
    });

    let operator = '';

    function calculate() {
      const value1 = parseFloat(value1Input.value);
      const value2 = parseFloat(value2Input.value);

      if (isNaN(value1) || isNaN(value2)) {
        resultInput.value = 'Invalid input';
        return;
      }

      let result;
      switch (operator) {
        case '+':
          result = value1 + value2;
          break;
        case '-':
          result = value1 - value2;
          break;
        case '*':
          result = value1 * value2;
          break;
        case '/':
          if (value2 === 0) {
            resultInput.value = 'Ділення на нуль неможливе';
            return;
          }
          result = value1 / value2;
          break;
        default:
          resultInput.value = 'Невідома операція';
          return;
      }

      resultInput.value = result;
    }
  });
*/

