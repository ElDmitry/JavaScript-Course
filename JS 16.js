'use strict'

//#1
/*
new Promise((resolve) => {
    resolve('Hello world'); 
}).then((result) => {
    console.log(result)
});
*/

//#2

function delayedMsg(msg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg);
        }, 2000);
    }).then(() => {
        console.log(msg)
    })
}

delayedMsg('Hello everyone!')