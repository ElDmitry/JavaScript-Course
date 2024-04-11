'use strict'

//#1
/*
function print(start, end){
    if (start > end){
        return;
    }
    console.log(start);
    print(start + 1, end)
}

print(10, 15);

//#2
function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    } 
    else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(0));
*/

//#3
/*
function createMultBy(num) {
    return function(x) {
        return x * num;
    };
}

const multBy2 = createMultBy(2);

console.log(multBy5(4));
console.log(multBy5(6));

console.log(multBy2(4));
console.log(multBy2(6));
*/


//#4
/*
const sales = {
	name: 'Jorge Clunie',
	profit: 10000,
	clients: [
		{
			name: 'Harrison ford',
			profit: 5000,
			clients: [
				{
					name: 'Mila Kunis',
					profit: 1000,
					clients: [
						{
							name: 'Julia Roberts',
							profit: 2000,
							clients: [{ name: 'Richard Gir', profit: 3000, clients: [] }],
						},
					],
				},
			],
		},
		{
			name: 'Barak Obama',
			profit: 7000,
			clients: [{ name: 'Hilari Klinton', profit: 5000, clients: [] }],
		},
		{
			name: 'Frodo',
			profit: 3000,
			clients: [
				{ name: 'Bilbo', profit: 2000, clients: [] },
				{
					name: 'Legolas',
					profit: 3000,
					clients: [{ name: 'Galadriel', profit: 1000, clients: [] }],
				},
			],
		},
	],
}


	function calculateTotalProfit(obj) {
		let totalProfit = 0

		if (obj.hasOwnProperty('profit')) {
			totalProfit += obj.profit
		}

		if (obj.hasOwnProperty('clients') && Array.isArray(obj.clients)) {
			obj.clients.forEach(client => {
				totalProfit += calculateTotalProfit(client)
			})
		}

		return totalProfit
	}

console.log(calculateTotalProfit(sales))
*/


//№5
/*
function memoization(fn) {
    const cache = {};

    return function(...args) {
        const key = structuredClone(args)

        if (!cache[key]) {
            cache[key] = fn.apply(this, args);
        }

        return cache[key];
    };
}

function expensiveOperation(n) {
    return n * 2;
}

const memoizedExpensiveOperation = memoization(expensiveOperation);

console.log(memoizedExpensiveOperation(5));
console.log(memoizedExpensiveOperation(5));
console.log(memoizedExpensiveOperation(10));
*/