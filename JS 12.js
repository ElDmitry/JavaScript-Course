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
/*
class TodoList {
    constructor() {
        this.todos = []
	}
    #show() {
        this.todos.forEach((element, index) => {
            console.log(`${index + 1}. ${element}\n`)
        })
	}
	addTask(task) {
		this.todos.push(task)
		this.#show()
	}
	removeTask(task) {
		const index = this.todos.indexOf(task)
		if (index !== -1) {
			this.todos.splice(index, 1)
			this.#show()
		}
	}
}

const todoList = new TodoList();
todoList.addTask("Погуляти з собакою")
todoList.addTask("Зробити ДЗ по JavaScript")
todoList.addTask("Подивитись серіал");
todoList.removeTask("Погуляти з собакою")
//todoList.#show()
*/

//#4
/*
class Vehicle {
	constructor(speed) {
		this.speed = speed
	}
	ride() {
		console.log(`Їде зі швидкістю ${this.speed}`)
	}
	stop() {
		this.speed = 0
		console.log(`Стоїть. Швидкість ${this.speed}`)
	}
}

class Bicycle extends Vehicle {
	constructor(type, speed) {
		super(speed)
		this.type = type
	}
	ride() {
		super.ride()
		console.log('Треба крутити педалі')
	}
}

class FireEngine extends Vehicle {
	constructor(type, speed) {
		super(speed)
		this.type = type
	}
	stew() {
		super.stop()
		console.log('Включай мігалку')
	}
}


const bicycle1 = new Bicycle('Гірський', 15)
const bicycle2 = new Bicycle('Електро', 25)

const fireEngine1 = new FireEngine('Пожарна машина', 90)
const fireEngine2 = new FireEngine('Пожежний автомобіль', 80)


console.log('Bicycle 1:')
bicycle1.ride()
console.log('Type:', bicycle1.type)
console.log('Speed:', bicycle1.speed)

console.log('\nBicycle 2:')
bicycle2.ride()
console.log('Type:', bicycle2.type)
console.log('Speed:', bicycle2.speed)

console.log('\nFire Engine 1:')
fireEngine1.ride()
fireEngine1.stop()
fireEngine1.stew()
console.log('Type:', fireEngine1.type)
console.log('Speed:', fireEngine1.speed)

console.log('\nFire Engine 2:')
fireEngine2.ride()
fireEngine2.stop()
fireEngine2.stew()
console.log('Type:', fireEngine2.type)
console.log('Speed:', fireEngine2.speed)
*/


//#5
/*
class Customer {
    constructor(name) {
        this.name = name;
        this.shoppingCart = [];
        this.sum = 0;
    }

    addProduct(product) {
        this.shoppingCart.push(product);
        this.sum += product instanceof DiscountProduct ? product.calculateDiscountPrice() : product.price;
    }

    removeProduct(product) {
        const index = this.shoppingCart.indexOf(product);
        if (index !== -1) {
            this.shoppingCart.splice(index, 1);
            this.sum -= product instanceof DiscountProduct ? product.calculateDiscountPrice() : product.price;
        }
    }

    buy() {
        const productList = this.shoppingCart.map(product => product.title).join(', ');
        console.log(`${this.name} купив товари: ${productList} на сумму ${this.sum} грн.`);
        this.shoppingCart = [];
        this.sum = 0;
    }
}

class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

class DiscountProduct extends Product {
    constructor(title, price, discountPercent) {
        super(title, price);
        this.discountPercent = discountPercent;
    }

    calculateDiscountPrice() {
        const discountAmount = (this.price * this.discountPercent) / 100;
        return this.price - discountAmount;
    }
}


const eggs = new Product("Яйця", 50);
const porridge = new Product("Гречка", 40);
const sausage = new DiscountProduct("Ковбаса", 120, 5); 
const dumplings = new DiscountProduct("Пельмені", 90, 10); 


const customer = new Customer('Jack Sparrow');

customer.addProduct(eggs);
customer.addProduct(porridge);
customer.addProduct(sausage);
customer.addProduct(dumplings);
customer.removeProduct(porridge);
customer.buy(); 

*/