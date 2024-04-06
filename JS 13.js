'use strict'

//#1

function setLength(obj){
    obj.length = Object.keys(obj).length;

    return obj;
}

const person =  {
    name : 'Oleg',
    lastName : 'Yes'
}

console.log(setLength(person))

