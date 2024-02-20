/* Level 1
#1*/
let number1 = +prompt('Введіть число №1');
let number2 = +prompt('Введіть число №2');
let rem = number1 % number2;
let pow = number1 ** number2;
console.log(`Залишок від ділення ${number1}, на ${number2} дорівнює ${rem}`);
console.log(`Результат зведення ${number1}, у ступінь ${number2} дорівнює ${pow}`);

//#2
let num = 10;
num +=5;
console.log(num);
num -=2;
console.log(num);
num *=2;
console.log(num);
++num;
++num;
++num;
console.log(num);

//#3
console.log(3%3, 3%2, 6%4);

/* Level 2
#4*/
let age = +prompt('Вкажіть ваш вік');
console.log(age >= 18);

//#5
let x = +prompt('Введіть число X');
let y = +prompt('Введіть число Y');
x = x + y;
y = x - y;
x = x - y;
console.log("X=",x);
console.log("Y=",y);