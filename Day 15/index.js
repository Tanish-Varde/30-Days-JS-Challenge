//! Activity 1 => Understanding Closures

console.log("\n Understanding Closures \n");


//? Task 1

function outerFunction() {
    let outerVariable = "I am outside!";

    return function () {
        console.log(outerVariable);
    }
}

let innerFunction = outerFunction()
innerFunction()


//? Task 2

function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
        },
        decrement: function () {
            count--;
        },
        getCount: function () {
            return count;
        }
    }
}

let counter = createCounter()

counter.increment()
console.log(counter.getCount())
counter.decrement()
console.log(counter.getCount())





//! Activity 2 => Practical Closures

console.log("\n Practical Closures \n");


//? Task 3

function createUniqueIds() {
    let lastId = 0;

    return function () {
        lastId++;
        return `uniqueId-${lastId}`;
    }
}

let idGenerator = createUniqueIds()

console.log(idGenerator())
console.log(idGenerator())
console.log(idGenerator())
console.log(idGenerator())
console.log(idGenerator())


//? Task 4

function greetUser(user) {
    let userName = user

    return function () {
        console.log(`Hello, ${userName}!`)
    }
}

let greet = greetUser("Tanish")
greet()





//! Activity 3 => Closures in Loops

console.log("\n Closures in Loops \n");


//? Task 5

const functionArray = [];

for (let i = 1; i <= 5; i++) {
    functionArray.push(((n) => {
        return function () {
            console.log(n);
        }
    })(i));
};

functionArray.forEach(func => func());





//! Activity 4 => Module Pattern

console.log("\n Module Pattern \n");


//? Task 6

const ItemManager = (() => {
    let items = [];

    return {
        addItem: (item) => {
            items.push(item);
            console.log(`${item} added to the list.`);
        },
        removeItem: (item) => {
            if (items.includes(item)) {
                items = items.filter((i) => i !== item);
                console.log(`${item} removed from the list.`);
            } else {
                console.log(`${item} not found in the list.`);
            }
        },
        getItemList: () => {
            console.log("List => ", items)
        }
    }
})();

ItemManager.addItem("Apple")
ItemManager.addItem("Banana")
ItemManager.getItemList()
ItemManager.removeItem("Banana")
ItemManager.getItemList()





//! Activity 5 => Memoization

console.log("\n Memoization \n");


//? Task 7

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function slowFunction(x) {
    for (let i = 0; i < 1e6; i++) { }
    return x * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5));
console.log(memoizedFunction(5));


//? Task 8

function memoizeFactorial() {
    const cache = {};

    function factorial(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        const result = n * factorial(n - 1);
        cache[n] = result;
        return result;
    }

    return factorial;
}

const memoizedFactorial = memoizeFactorial();

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(5));
