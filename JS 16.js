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
/*
function delayedMsg(msg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg);
        }, 2000);
    }).then(() => {
        console.log(msg)
    })
}

delayedMsg('Hello everyone!');
*/

//#3
/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Упс, помилка!!");
    }, 2000);
})
.catch((error) => {
    console.error(error);
});
*/

//#4
/*
function showResults(promise1, promise2, promise3) {
    Promise.allSettled([promise1,promise2,promise3])
        .then(results => {
            results.forEach(result => {
                console.log(result)
            })
        })
    }
const promis1 = new Promise((resolve) => {
    resolve('Hello'); 
}).then((result) => {
    return result
});

const promis2 = new Promise((resolve) => {
    resolve('Hello 2'); 
}).then((result) => {
    return result
});

const promis3 = new Promise((resolve) => {
    resolve('Hello 3'); 
}).then((result) => {
    return result
});

showResults(promis1,promis3,promis2);
*/

//#5
/*
function showFirst(promise1, promise2, promise3){
    const results = Promise.race([promise1, promise2, promise3]);
    results
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
         console.error(error);
    });
}

const promise1 = new Promise((resolve) => {
    setTimeout(() => 
    resolve('Hello'), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() =>
    resolve('Hello 2'), 500);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => 
    resolve('Hello 3'), 1500);
});

showFirst(promise1, promise2, promise3);
*/

//#6
/*
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

delay(3000).then(() => alert('виконалось через 3 секунди'));
*/

//#7
/*
function basedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = arg1 + arg2;
        if (result % 2 !== 0) {
          resolve(result);
        } else {
          reject(new Error('Result is not odd!'));
        }
      }, 1000);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
}

basedFunction(3, 4);
*/

//#8
/*
function fibonacciRecursive(number) {
    if (number <= 1) {
      return number;
    } else {
      return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
    };
  };
  
console.log(fibonacciRecursive(6));
*/

//#9

console.log("start");

new Promise((resolve, reject) => {
  const calculateFibonacci = (number) => {
    const fibonacci = (number) => {
      if (number <= 1) {
        return number;
      }
      return fibonacci(number - 1) + fibonacci(number - 2);
    };

    setTimeout(() => {
      const result = fibonacci(number);
      if (typeof result === 'number') {
        resolve(result);
      } else {
        reject('Error calculating');
      }
    });
  };

  calculateFibonacci(43);
})
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });

console.log("end");



