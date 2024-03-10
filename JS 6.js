"use strict"
//LEVEL 1

//#1
/*
function capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize('ПриВіТ'));
console.log(capitalize('яК СПРавИ?'));
*/

//#2
/*
function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('Привіт'));
console.log(reverseString('Як справи?'));
*/

//#3
/*
function convertToBinary(num){
return num.toString(2);
}
console.log(convertToBinary(5));
console.log(convertToBinary(15));
*/

//#4
/*
function generateRandomFloat(n){
    let num = Math.random() * 100;
    return num.toFixed(n);
}
console.log(generateRandomFloat(3));
*/

//LEVEL 2
// #1
/*
function isPalindrom(str){
    let newStr = str.toLowerCase().replaceAll(' ','');
    let palindrom = newStr.split('').reverse().join('');
    return newStr === palindrom;
}

console.log(isPalindrom('радар'));
console.log(isPalindrom('І розморозь зором зорі'));
console.log(isPalindrom('Привіт'));
*/

//#2
/*
function sumOfNumbers(number){
    let arr = number.toString().split('');
    let result =0;
    for (let index of arr) {
        result += Number(index);
    }
    return result;

};
console.log(sumOfNumbers(12));
console.log(sumOfNumbers(122));
console.log(sumOfNumbers(12256));
*/


//LEVEL 3
//#1
/*
function generateNumberInLimit(start, end){
    return Math.floor(Math.random() * (end - start) + start);
}
console.log(generateNumberInLimit(1, 10));
console.log(generateNumberInLimit(24, 50));
*/

//#2
/*
function toCamelCase(str){
    let result = '';
    let nextUpperLetter = false;

    for (let i = 0; i < str.length; i++){
        const currentChar = str[i];

        if (currentChar === '_'){
            nextUpperLetter = true;
        } else{
            result += nextUpperLetter ? currentChar.toUpperCase() : currentChar.toLowerCase();
            nextUpperLetter = false;
        }
    }
    return result;
};

console.log(toCamelCase("current_user"));
console.log(toCamelCase("user_first_name"));
console.log(toCamelCase("car"));
*/