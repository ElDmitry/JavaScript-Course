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
   return num1 === num2 ? "Числа рівні" : (num1 > num2) ? num1 : num2;    
};
let result = max(1,1);
console.log(result)
 */

//#4
/*
let pow = function (x = 3, n = 2){
    let result = 1;
    for(let i = 0; i < n; i++){
        result = result * x;
    }
    return result;
};
console.log(pow(3,3));
*/
    

//#5
/*
function sumOrConcatination(value1 = 15, value2 = 15){
    if(typeof(value1) === 'string' || typeof(value2) === 'string'){
        let result = String(value1) + String(value2);
        console.log(`Результат конкатенації:`, result)
    }
    else if(typeof(value1) === 'number' && typeof(value2) === 'number'){
       let result2 = value1 + value2;
        console.log(`Результат суми:`, result2)
    } else{
        console.log(`Некоректні аргументи`)
    };
}
sumOrConcatination();
*/

//#6
/*
function fib(num){
    let a = 1;
    let b = 1;
    let result;
   
    for(let i = 3; i <= num; i++){
        
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
*/
/*
function fib(n) {
    if(n === 0) 
    return 0;
    if(n === 1)
    return 1;

    let fibNum1 = 0;
    let fibNum2 = 1;
    let fibResult;
  
    for (let i = 2; i <= n; i++) {
      fibResult = fibNum1 + fibNum2;
      fibNum1 = fibNum2;
      fibNum2 = fibResult;
    }
  
    return fibResult;
  }
  console.log(fib(0));
  console.log(fib(1));
  console.log(fib(2));
  console.log(fib(7));
  console.log(fib(9));
  */