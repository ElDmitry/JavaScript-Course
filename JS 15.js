'use strict'

//#1
/*
function showDelay(msg){
    setTimeout(() => {
        console.log(msg);
    }, 2000);
};

showDelay('Hello');
*/
//#2
/*
function repeat(msg){
    setInterval(() => {
        console.log(msg)
    }, 2000);
};

repeat('hi');
*/

//#3
/*
function repeat(msg){
    console.log(msg);
    setTimeout(() => {
        repeat(msg)
    }, 2000);
};

repeat('Рекурсивний метод');
*/

//#4
/*
function boom(count){
    let i = 1;
    let id = setInterval(() => {
        if (i < count){
            console.log(i);
            i++;
        } else {
            console.log('BOOM!!!')
            clearInterval(id)
        }
    }, 1000);


};

boom(7)
*/


//#5

function sayHi(){
    console.log('Hi!');
}

