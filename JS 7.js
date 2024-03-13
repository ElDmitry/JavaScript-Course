'use strict'

//#1
/*
let actor = {};
actor.name = 'Robert';
actor.surname = 'Downey';
actor.name = 'John';
delete actor.name;
console.log(actor);
*/

//#2
/*
let person = {
    firstName : 'Dmytro',
    lastName : 'Bilozertsev',
};

let phone = prompt("Введіть номер телефону");

let contacts = {
    email : 'test@gmail.com',
    phone,
};

person.contacts = contacts;
console.log(person);
*/

//#3
/*
let topSeries = ['Game of thrones', 'True detective', 'Breaking bad'];
topSeries.unshift('Friends');
topSeries.push('Sherlok');
console.log(topSeries)
*/


//#4
/*
let employee = {
    salary: 2000,
	taxes: 200,
	position: "front-end developer",
	level: "middle",
    showInfo(){
        console.log (`${this.level} ${this.position} заробляє ${this.salary}`)
    }
};
for(let key in employee) {
   if(typeof employee[key] === 'number'){
    employee[key] *= 2
    };
}
employee.showInfo();
console.log(employee);

let employee2 = {
	salary: 1000,
	taxes: 100,
	position: "QA Engineer",
	level: "Junior",
    showInfo(){
        console.log (`${this.level} ${this.position} заробляє ${this.salary}`)
    }
};
employee2.showInfo();
*/


//#5
/*
function sumInput() {
    let userData = [];
    
    while (true) {
        let message = prompt('Введіть дані', '');
        if (message === null || message === '' || isNaN(message)) {
            break;
        }
        userData.push(+message)
    }

    let sum = 0;
    for(let num of userData){
        sum += num;
    }
    return sum;
}

let result = sumInput();
console.log(result)
*/

//#6
/*
const person = {
    name: "John",
    age: 30,
    job: 'software engineer',
    address: {
     city: "New York",
     country: "USA"
    }
   };
   let {name, age} = person;
   console.log(name, age)
   let {job : currentJob} = person;
   console.log(currentJob)
   let {address: {city}} = person;
   console.log(city)
   let {address: {country : currentCountry}} = person;
   console.log(currentCountry)
*/

//#7

let books = {
    countries: [
     {
      country: "Англія",
      authors: [
       {
        author: "Артур Конан Дойль",
        books: [
         {
          title: "Пригоди Шерлока Холмса",
          year: 1887,
          genre: "Роман"
         },
         {
          title: "Загадка Боскомського долу",
          year: 1912,
          genre: "Детектив"
         },
         {
          title: "Загадка Червоного Цирку",
          year: 1927,
          genre: "Детектив"
         }
        ]
       }
      ]
     },
     {
      country: "Україна",
      authors: [
       {
        author: "Макс Кідрук",
        books: [
         {
          title: "Твердиня",
          year: 2013,
          genre: "Роман"
         },
         {
          title: "Нові темні віки",
          year: 2023,
          genre: "Роман"
         }
        ]
       },
       {
        author: "Тарас Шевченко",
        books: [
         {
          title: "Кобзар",
          year: 1840,
          genre: "Роман"
         }
        ]
       }
      ]
     } 
    ]
   }

let {countries: [{authors: [{books: [firstBook, ,thirdBook]}]},{authors: [{books: [,{title: secondKidrukBookName}]},{books: [{year: yearOfPublicationKobzar}]}]}]} = books;




console.log(firstBook);
console.log(thirdBook);
console.log(secondKidrukBookName);
console.log(yearOfPublicationKobzar);

