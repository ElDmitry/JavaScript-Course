'use strict'

//#1
/*
let Guest = {
    name: "John",
    isRegistered: false
};

let User = {
    isRegistered: true,
    isAdmin: false,
    email: "email@mail.com",
    __proto__ : Guest
};

let Admin = {
    isAdmin: true,
    addProduct(product){
        console.log(`Я адмін, додаю новий продукт - ${product}`)
    }
};

for (const key in Admin) {
    console.log(key)
};
*/
//#2
/*
const Vehicle = {
    ride(){
        console.log(`Їду на ${this.name} зі швидкістю ${this.speed}`);
    }
};

const Car = {
    name : 'Porshe',
    speed : 240,
    __proto__ : Vehicle
};

const Bycicle = {
    name : 'BMX',
    speed : 35,
    __proto__ : Vehicle
}

Car.ride()
Bycicle.ride()
*/

//#3
/*
const Animal = {
    sleep(){
        console.log(`Я сплю`);
    }
};

const Dog = {
    showVoice(){
        console.log(`Гав!`)
    },
    __proto__ : Animal
};

const Pug = {
    name : 'Саломон',
    sayHi(){
        console.log(`Доброго вечора! Мене звати ${this.name}!`)
    },
    sleep(){
        console.log(`Я сплю і храплю`)
    },
    __proto__ : Dog
};


Pug.sleep();
Pug.showVoice();
Pug.sayHi();
Pug.sleep();
*/

//№4
/*
const user = {
    _name : '',
    _age : 0,
    get name(){
        return this._name;
    },
    set name(newName) {
        if (newName.length > 2){
            this._name = newName;
        } else {
            console.log(`Мінімальне значеня 2 символи!`);
        }
    },
    get age(){
        return this._age;
    },
    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        } else {
            console.log(`Вік повинен бути більше ніж 0`);
        }
    }
};

user.name = 'E';
user.age = -1;
user.name = 'Dmytro';
user.age = 32;
console.log(user.name);
console.log(user.age);
*/

//#5
/*
function Triangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
};

Triangle.prototype.getSquare = function(){
    let p = (this.a + this.b + this.c) / 2;
    return Math.sqrt(p * (p - this.a)*(p - this.b)*(p - this.c)).toFixed(2)
    };

const triangle1 = new Triangle(5,4,3);
const triangle2 = new Triangle(5,5,2);
const triangle3 = new Triangle(4,4,4);

console.log(triangle1.getSquare());
console.log(triangle2.getSquare());
console.log(triangle3.getSquare());
*/
