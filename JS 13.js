'use strict'

//#1
/*
function setLength(obj){
    obj.length = Object.keys(obj).length;

    return obj;
}

const person =  {
    name : 'Jack',
    lastName : 'Sparrow',
    country : 'USA'
}

console.log(setLength(person))
*/

//#2
/*
let actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"
    };

function getEntries(obj){
    const newObj = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj.push([key, obj[key]]);
        }
    }
    return newObj;

} 
console.log(getEntries(actor));
*/

//#3
/*
let actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"
    };

Object.defineProperty(actor, "gender",{
    writable: false,
});

//actor.gender = 'Female';
actor.name = 'Tom Holland'
console.log(actor)


Object.defineProperty(actor, "name",{
    enumerable: false,
});

for (const key in actor) {
    console.log(key)
}
console.log(actor);
*/

//#4
/*
function Animal(voice){
    this.voice = voice;
    this.say = function(){
        return this.voice
    }
}

const dog = new Animal('ГАВ!!!');
console.log(dog.say())

Object.defineProperty(dog, 'say',{
    enumerable: false,
});

for (const key in dog) {
    console.log(key)
}
*/

//#5
/*
let car1 = {
    model: "Mersedes",
    price: 50000,
    [Symbol.toPrimitive](hint) {
        if (hint === "string"){
            return this.model;
        }
        if (hint === "number"){
            return this.price;
        }
        if (hint === "default"){
            return this.price
        }
    }
    };
    
    let car2 = {
    model: "Audi",
    price: 40000,
    [Symbol.toPrimitive](hint) {
        if (hint === "string"){
            return this.model;
        }
        if (hint === "number"){
            return this.price;
        }
        if (hint === "default"){
            return this.price
        }
    },
    };

    console.log(car1 + car2) // 90 000
    alert(car1) // Mersedes
    alert(car2) // Audi

*/

//#6
/*
let actor = {
    name: "Tom Hardy",
    age: 44,
    gender: "Male",
    nationality: "British",
    lastFilm: "Venom: Let There Be Carnage"
};

function cloneObject(obj,...keys){
    const stringifyObj = JSON.stringify(obj);
    const copyObj = JSON.parse(stringifyObj);
    keys.forEach(key => {
        if (copyObj.hasOwnProperty(key))
        delete copyObj[key];
    });
    return copyObj;
};

const clonedActor = cloneObject(actor, "nationality", "age", "phone")
console.log(clonedActor)
console.log(actor)
*/
    