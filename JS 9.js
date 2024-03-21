'use strict'
/*
// #1

let map = new Map([
[true, 'boolean'],
[123, 'number'],
['Hello', 'string'],
[Symbol, 'Symbol'],
[undefined, 'undefined'],
[null, 'null'],
[123n, 'bigInt'],
[{}, 'object']
]);
console.log(map)

map.forEach((value, key) => {
console.log(key, value)
});


//#2
let mapObject = Object.fromEntries(map.entries());
console.log(mapObject)


//#3
let obj = Object.entries(mapObject)
console.log(obj)


//#4

function mergeArrays(...arr){
    return Array.from(new Set([].concat(...arr)))
}
console.log(mergeArrays([1, 2], [2, 2, 3], [1, 1, 2, 4]));
console.log(mergeArrays([1, 2, 3 ,4, 5], [5, 6]));

//#5

function aclean(arr){
let map = new Map();

for (let word of arr) {
    let sort = word.toLowerCase().split('').sort().join('');
    map.set(sort, word);
    }

    return Array.from(map.values());
}

let array = ["материк", "мошкара", "апельсин", "спанієль", "мінотавр", "ромашка", "норматив", "метрика"];

console.log(aclean(array))


//#6

const books = {
    fantastic: {
     "Френк Герберт": [
      {
       title: "Дюна",
       year: 1965,
      },
      {
       title: "Дюна. Месія месіїв",
       year: 1969,
      },
      {
       title: "Діти Дюни",
       year: 1976,
      },
     ],
     "Станіслав Лем": [
      {
       title: "Соляріс",
       year: 1961,
      },
      {
       title: "Соляріс. Зіркові щоденники Ійона Тихого",
       year: 1971,
      },
     ],
    },
    novel: {
     Ремарк: [
      {
       title: "Три товарища",
       year: 1936,
      },
      {
       title: "Триумфальна арка",
       year: 1942,
      },
     ],
     "Джордж Оруелл": [
      {
       title: "1984",
       year: 1949,
      },
      {
       title: "Ферма Господаря Вилки",
       year: 1945,
      },
     ],
    },
    fantasy: {
     "Володар перснів": [
      {
       title: "Братство Кільця",
       year: 1954,
      },
      {
       title: "Дві вежі",
       year: 1954,
      },
      {
       title: "Повернення короля",
       year: 1955,
      },
     ],
     "Гаррі Поттер": [
      {
       title: "Гаррі Поттер і Філософський камінь",
       year: 1997,
      },
      {
       title: "Гаррі Поттер і тайна кімната",
       year: 1998,
      },
     ],
    },
   };

   books[Symbol.iterator] = function () {
    let namesOfBooks = [];
    let i = 0;

    for (const key in this) {
        for (const key2 in this[key]) {
            for (const bookNames of this[key][key2]) {
                namesOfBooks.push(bookNames.title);
            }
        }
    }

    return {
        next() {
            if (i < namesOfBooks.length) {
                return { value: namesOfBooks[i++], done: false };
            }
            return { done: true };
        },
    };
};

for (const bookNames of books) {
    console.log(bookNames);
}
*/
    