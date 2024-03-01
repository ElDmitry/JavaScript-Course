"use strict"
//#1
/*
let num1 = +prompt("Введіть число №1");
let num2 = +prompt("Введіть число №2");
let message = (num1 === num2) ? "Числа рівні" :
(num1 > num2) ? "Перше число більше" : "Друге число більше"

console.log("message:" , message);
*/
//#2
/*
let message = prompt('Введіть будь-яке повідомлення');
    switch(message) {
        case null:
        console.log('Відміна вводу');
        break;
    case "":
        console.log('Ви нічого не написали');
        break;
    default:
        console.log(message);
        break;
    };
*/
    //№3
/*
let numberOfMonth = +prompt("Введіть номер місяця");
    switch(numberOfMonth){
        case 1:
            console.log("Зима");
            break;
        case 2:
            console.log("Зима");
            break;
        case 3:
            console.log("Весна");
            break;
        case 4:
            console.log("Весна");
            break;
        case 5:
            console.log("Весна");
            break;
        case 6:
            console.log("Літо");
            break;
        case 7:
            console.log("Літо");
            break;
        case 8:
            console.log("Літо");
            break;
        case 9:
            console.log("Осінь");
            break;
        case 10:
            console.log("Осінь");
            break;
        case 11:
            console.log("Осінь");
            break;
        case 12:
            console.log("Зима");
            break;
        default:
            console.log("Некоректний номер місяця");
    }
*/
//#4
/*
for(let i = 0; i <= 10; i++){
    console.log(i)
};

let i = 0;
while(i <= 10) {
    console.log(i);
    i++;
};
*/
//#5
/*
let startNumber = +prompt('Введіть перше число інтервалу');
let endNumber = +prompt('Введіть останнє число інтервалу');

for(let i = startNumber; i <= endNumber; i++){
    if(i === 0 || i % 5 !== 0){
        continue;
    }
    console.log(i);
}

let i = startNumber;
while(i <= endNumber) {
    if(i === 0 || i % 5 !== 0) {
      i++;
        continue;
    }
    console.log(i);
    i++;
}
*/
//#6
/*
let result;
for(let i = 1; i <= 9; i++){
   result = i * 3;
    console.log(`3 помножити на ${i} дорінює ${result}`);  
}

let result;
let factor = 3;
let i = 1;
while(i <= 9){
    result= i * factor;
    console.log(`${factor} помножити на ${i} дорінює ${result}`);
    i++;
}
*/

//№7
/*
let result = 0;
let count = 0;
while (count < 5) {
    let number = +prompt(`Введіть число №${count + 1}`);
        result += number;
        count++;
}
console.log(`Сума чисел: ${result}`);
*/

//#8
/*
let number = +prompt('Введіть число');
let factorial = 1;
for(let i = 1; i <= number; i++){
    factorial *=i;
}
console.log(`Факторіал числа ${number} = ${factorial}`)
*/

/*
let heightOfTriangle = prompt("Введіть висоту трикутника");
let symbol = '*';
let symbolOfTtiangle = "";

for(let h = 0; h < heightOfTriangle; h++){
    symbolOfTtiangle += symbol;
    console.log(symbolOfTtiangle);
};
*/