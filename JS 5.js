"use strict"

//#1
/*
function sum(num1, num2){
return num1 + num2;
};
let result = sum(1,2);
console.log(result);
*/

//#2
/*
function multBy5(num){
let result = num * 5
console.log(`5 * ${num} = ${result}`);
};
multBy5(5)
*/
//#3
/*
function max(num1, num2){
    if(num1 > num2){
        return num1;
    } 
    else if(num1 < num2){
        return num2;
    } else{
        return "Числа рівні"}
};
let comparison = max(1,1);
console.log(comparison);
*/

//#4
/*
function pow(x = 3, n = 2){
    let i = 0;
    let result = 1;
    for(i = 0; i < n; i++){
        result = result * x;
    }
     return result;
};
let numberInDegree = pow(4,2);
console.log(numberInDegree);
*/

//#5
/*
function sumOrConcatination(value1, value2){
    if(typeof(value1) === 'string' || typeof(value2) === 'string'){
        let result = String(value1) + String(value2);
        console.log(`Результат конкатенації:`, result)
    }
    else if(typeof(value1) === 'number' && typeof(value2) === 'number'){
       let result2 = value1 + value2;
        console.log(`Результат суми:`, result2)
    }
    else if(typeof(value1) === 'undefined' && typeof(value2) === 'undefined'){
        console.log(`Результат суми: 30`);
    }
    else{
        console.log(`Некоректні аргументи`)
    };
}
sumOrConcatination(true, 1);
*/

//#6
/*
let a = 1;
let b = 1;
let result = 1;
function fib(num){
    for(let i = 3; i <= num; i++){
        a = b;
        b = result;
        result = a + b;
    }
    console.log(result);
    }
fib(6);
*/