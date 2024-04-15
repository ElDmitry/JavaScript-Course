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
/*
function sayHi(){
    console.log('Hi!');
};

function delay(fn, sec){
    return function() {
        setTimeout(fn, sec * 1000);
    };
}

const delaySayHi = delay(sayHi, 5);

sayHi();
delaySayHi();
*/


//#6
/*
class Timer {
    constructor() {
        this.count = 0;
        this.timerId = null;
    }

    start() {
        this.timerId = setInterval(() => {
                   this.count++;
                console.log(this.count);
        }, 1000);
    }

    stop() {
        clearInterval(this.timerId);
        this.count = 0;
    }

    pause() {
        clearInterval(this.timerId);
        setTimeout(() => {
        }, 2000)
    }

    show() {
        if (this.count === 0){
            console.log(`0 - таймер сброшений`)
        } else {
            console.log(`${this.count}`);
        }
    }
}

const newTimer = new Timer();

newTimer.start();

setTimeout(() => {
    newTimer.pause();
}, 5000);

setTimeout(() => {
    newTimer.start();
}, 7000);

setTimeout(() => {
    newTimer.stop();
    newTimer.show();
}, 9000);
*/


//#7
/*
function cook(customers) {
    for (const customer in customers) {
        const order = customers[customer];
        let maxTime = 0;
        order.forEach(item => {
            if (item.time > maxTime) {
                maxTime = item.time;
            }
        });
        setTimeout(() => {
            const dishes = order.map(item => item.name).join(",");
            console.log(`Шановний відвідувач, ${customer}, ваше замовлення готове: ${dishes}. Смачного!`);
        }, maxTime);
    }
}

const customers = {
    "Katy Perry": [
        { name: "Borsh", time: 5000 },
        { name: "vareniki", time: 1000 },
        { name: "uzvar", time: 500 },
    ],
    "Cristiano Ronaldo": [
        { name: "Soup", time: 7000 },
        { name: "porridge", time: 1000 },
        { name: "water", time: 100 },
    ],
    "Jason Statham": [
        { name: "fried potatoes", time: 6000 },
        { name: "steak", time: 10000 },
        { name: "juice", time: 100 },
    ],
};

cook(customers);
*/