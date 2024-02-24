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
if(password === pass){
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
if(numberOfMonth === 1 || numberOfMonth === 2 || numberOfMonth === 12) {
    console.log("Зима");
}
else if(numberOfMonth === 3 || numberOfMonth === 4 || numberOfMonth === 5) {
    console.log("Весна");
}
else if(numberOfMonth === 6 || numberOfMonth === 7 || numberOfMonth === 8) {
    console.log("Літо");
}
else if(numberOfMonth === 9 || numberOfMonth === 10 || numberOfMonth === 11) {
        console.log("Осінь");
}
else if(numberOfMonth > 12 || numberOfMonth <= 0){
    console.log("Некоректний номер місяця")
}
else{
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