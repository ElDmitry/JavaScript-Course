'use strict'

//#1
/*
let employee1 = {
    fullName : 'John Wick',
    position : 'QA Engineer',
    salary : 800
};

let employee2 = {
    fullName : 'Jack Sparow',
    position : 'Full-Stack Developer',
    salary : 2500
};

function showInfo(currency = ''){
    console.log(`${this.fullName} на позиції ${this.position} заробляє ${this.salary} ${currency}`);
};

showInfo.apply(employee1, ['$']);
showInfo.apply(employee2, ['UAH']);
*/
//#2

let showInfoOfEmployee1 = showInfo.bind(employee1);
showInfoOfEmployee1('CAD');
let showInfoOfEmployee2 = showInfo.bind(employee2);
showInfoOfEmployee2('Euro');

//#3
let calculator = {
    num1: 0,
    num2: 0,
    read: function(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    },
    sum: function() {
        return this.num1 + this.num2;
    },
    mul: function() {
        return this.num1 * this.num2;
    }
};

calculator.read(3, 3);
console.log(calculator.sum());
console.log(calculator.mul());


//#4
let shoppingCart = {
    items: [],
    addItem: function(title, price) {
        this.items.push({ title, price });
    },
    removeItem: function(title) {
        let indexToRemove = this.items.findIndex(item => item.title === title);
        if (indexToRemove !== -1) {
            this.items.splice(indexToRemove, 1);
        }
    },
    calculateTotalPrice: function() {
        let totalPrice = 0;
        for (let item of this.items) {
            totalPrice += item.price;
        }
        return totalPrice;
    }
};

shoppingCart.addItem("iPhone", 1500);
shoppingCart.addItem("Книга", 30);
shoppingCart.addItem("Чашка", 5);
shoppingCart.removeItem("Чашка");
console.log(shoppingCart.calculateTotalPrice());
