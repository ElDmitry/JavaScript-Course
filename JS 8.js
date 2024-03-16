'use strict'

//#1
/*
let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
let result = array.slice(0);
console.log(result);

let array = [2, 7, 6, 3, 9, 1, 4, 5, 8, 10];
let newArray = array.map((item) => {
    return item * 5;
});
console.log(newArray);

function sort(arr){
    return arr.sort((a, b) => a - b);
}
console.log(sort(newArray))

function sortReverse(arr){
    return arr.sort((a, b) => b - a);
}
console.log(sortReverse(newArray))

let result = array.reduce((acc, item) => {
    return acc += item;
}, 0)
console.log(result)
*/


//#2
/*
let array = ['Mersedes', 'Audi', 'BMW', 'VolksWagen'];
function sort(arr){
    return arr.sort((a, b) => a.length - b.length)
};
console.log(sort(array));
*/

//#3
/*
let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"];
function unique(arr){
let result = [];
for (let value of arr){
    if(!result.includes(value)){
        result.push(value)
    }
}
return result;
}
console.log(unique(strings));
*/

//#4
/*
let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
let arr2 = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
let arr3 = [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10];

function mostPupolarNumber(arr){
    let numbers = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
let mostPupolarNum = arr[0];
let maxNumber = numbers[arr[0]];
for (let i in numbers){
    if (numbers[i] > maxNumber || (numbers[i] === maxNumber)){
      maxNumber = numbers[i];  
    }
}
return mostPupolarNum;
}

console.log(mostPupolarNumber(arr3))
*/