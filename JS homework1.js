/*Level 1
#1
*/
let age = 32;
let name = "Дмитро";
console.log(age);
console.log(name);
name = "Дмитро Білозерцев";
console.log(name);

/*Level 2
#2
*/
alert('Мене звати ' + name + ' мені ' + age + ' роки');

//#3
let newName = prompt('Введіть своє ім\'я');
let newAge = prompt('Введіть свій вік');
console.log(`Мене звати ${newName} мені ${newAge} роки`);

//#4
let number1 = prompt('Введіть перше число');
let number2 = prompt('Введіть друге число');
let sum = +number1 + +number2;
let sub = +number1 - +number2;
let mul = +number1 * +number2;
let div = +number1 / +number2;
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);