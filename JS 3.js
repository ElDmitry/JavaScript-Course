"use strict";

//№1
/*let num = prompt("Введіть число")
if(num >= 10)
console.log(`Так тримати!!!`);
*/
//№2
/*
let password = "Test!123";
let checkPassword = prompt("Введіть пароль");
if(password === checkPassword){
console.log("Ласкаво просимо!")
}
else{
    console.log("Пароль невірний!");
};
*/
//№3
/*
let message = prompt('Введіть будь-яке повідомлення');
if(message) {
    console.log(message);
}
else if(message === null) {
    console.log("Відміна вводу");
}
else if(message === "") {
    console.log("Ви нічого не написали");
};
*/

//#4
/*
let num1 = +prompt("Введіть число №1");
let num2 = +prompt("Введіть число №2");
if(num1 === num2) {
    console.log("Числа рівні");
}
else if(num1 > num2) {
    console.log("Перше число більше");
} 
else{
    console.log("Друге число більше");
};
*/
//#5
/*
let num = +prompt("Введіть число");
if(num % 2 === 0) {
    console.log("Парне");
}
else{
    console.log("Непарне");
};
*/

//№6
/*
let numberOfMonth = +prompt("Введіть номер місяця");
let isWinter = numberOfMonth === 1 || numberOfMonth === 2 || numberOfMonth === 12;
let isSpring = numberOfMonth === 3 || numberOfMonth === 4 || numberOfMonth === 5;
let isSummer = numberOfMonth === 6 || numberOfMonth === 7 || numberOfMonth === 8;
let isAutumn = numberOfMonth === 9 || numberOfMonth === 10 || numberOfMonth === 11;

if(isWinter) {
    console.log("Зима");
}
else if(isSpring) {
    console.log("Весна");
}
else if(isSummer) {
    console.log("Літо");
}
else if(isAutumn) {
        console.log("Осінь");
}
else {
    console.log("Некоректний номер місяця");
};
*/

//№7
/*
let num = +prompt("Введыть число");
if(num >= 20 && num <=80) {
    console.log("Число в діапазоні");
}
else{
    console.log("Число не в діапазоні");
};
*/

//№8
/*
let num = +prompt("Введіть число");
if(!(num < 20 || num > 80 )) {
    console.log("Число в діапазоні");
}
else{
    console.log("Число не в діапазоні");
};
*/

//№9
/*
let password = "TheMaster";
let access = "Admin";
let whoThere = prompt(`Who\`s there?`);
if(whoThere === null) {
    console.log("Canceled");
}
else if(whoThere === access) {
    let whatPass = prompt("Password?");
    if(whatPass === password) {
        console.log("Welcome!");
    }
    else if(whatPass === null) {
        console.log("Canceled");
    }
    else{
        console.log("Wrong password");
    }

}
else{
    console.log("I don\`t know you");
};
*/