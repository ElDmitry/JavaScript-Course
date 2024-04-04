'use strict'

//#1
/*
class Animal {
    constructor(word){
        this.word = word;
    }

    say(){
        return this.word
    }
};

const dog = new Animal('Гав!');
console.log(dog.say());

const cat = new Animal('Мяу!');
console.log(cat.say());

const pig = new Animal('Хрю!');
console.log(pig.say());
*/

//#2
/*
class Car{
    constructor(name,speed){
        this.model = name;
        this.speed = speed;
    }
    ride(){
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`);
    };
    stop(){
        this.speed = 0;
        console.log(`${this.model} зупинилась. Швидкість ${this.speed} км/год`);
    };
    gase(){
        this.speed += 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`)
    };
    brake(){
        this.speed -= 10;
        console.log(`${this.model} їде зі швидкістю ${this.speed} км/год`)
    };

};


const bmw = new Car('BMW', 50);
bmw.ride();
bmw.gase();
bmw.gase();
bmw.brake();
bmw.stop();
*/

//#3

class TodoList{
    constructor(){
        this.todos = [];
    }
    show(){
        this.todos.forEach(element => {
            console.log(`${element}\n`)
        });
    }
    addTask(task){
        this.todos.push(task);
        this.show();
    }
    removeTask(task){
        this.todos.splice(task);
        this.show();
    }
}

const todoList = new TodoList();
todoList.addTask("Погуляти з собакою")
todoList.addTask("Зробити ДЗ по JavaScript")
todoList.addTask("Подивитись серіал");
todoList.removeTask("Погуляти з собакою")
todoList.show()