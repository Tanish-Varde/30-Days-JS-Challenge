//! Activity 1 => Function Declaration

console.log("\n Function Declaration \n");


//? Task 1

const evenOdd = (number) => {
    if (number % 2 === 0) {
        return `${number} is Even Number`;
    } else {
        return `${number} is Odd Number`;
    }
};

console.log(evenOdd(1) + "\n");


//? Task 2

const calculateSquare = (number) => {
    return `Square of ${number} is ${Math.pow(number, 2)}`;
};

console.log(calculateSquare(5));





//! Activity 2 => Function Expression

console.log("\n Function Expression \n");


//? Task 3

const maxOfTwo = function (number1, number2) {
    return `Max of ${number1} and ${number2} is ${Math.max(number1, number2)}`;
};

console.log(maxOfTwo(50, 34) + "\n");


//? Task 4

const concatenateString = function (str1, str2) {
    return str1 + str2;
};

console.log(concatenateString("Hello", "World"));





//! Activity 3 => Arrow Functions

console.log("\n Arrow Functions \n");


//? Task 5

const sumOfTwo = (number1, number2) => {
    return number1 + number2;
};

console.log(sumOfTwo(5, 3));


//? Task 6

const strChar = (str1) => {
    if (str1.includes('e')) return true;
    return false;
}

console.log(strChar("Hello World"));





//! Activity 4 => Function Parameters and Default Values

console.log("\n Function Parameters and Default Values \n");


//? Task 7

const productOfTwo = (value1, value2 = 10) => {
    return value1 * value2;
};

console.log(productOfTwo(5, 5));


//? Task 8

const personInfo = (person, age = 20) => {
    return `Name: ${person}, Age: ${age}`;
};

console.log(personInfo("John Doe", 20));





//! Activity 5 => Higher Order Functions

console.log("\n Higher Order Functions \n");


//? Task 9

const higherOrderFunction = (num, func) => {
    for (let i = 1; i <= num; i++) {
        func(i);
    };
};


const helloWorld = (index) => {
    console.log(`Hello World ${index}`);
};

higherOrderFunction(10, helloWorld);


console.log("\n");


//? Task 10

const higherOrderFunctionTwo = (value, func1, func2) => {

    let result = func1(value);
    console.log(`Result: ${result}`);

    console.log(func2(result));
};

const funcOne = (value) => {
    return value + value;
};

const funcTwo = (value) => {
    return value * value;
};


higherOrderFunctionTwo(10, funcOne, funcTwo);






//! ------------------------------ Feature Request ----------------------------------


console.log("\n\n Feature Request \n");




//! 1. Even or Odd Function Script

const checkEvenOdd = (value) => {
    console.log(`Number ${value} is ${value % 2 == 0 ? 'Even' : 'Odd'}`);
};

checkEvenOdd(11);




//! 2. Square Calculation Function Script


const square = (value) => {
    return Math.pow(value, 2);
};

console.log(`Square of 20 is ${square(20)}`);




//! 3. Concatenation Function Script

const concatenateStr = function (value1, value2) {
    return value1 + value2;
};


console.log(concatenateStr('Tanish', 'Varde'));




//! 4. Sum Calculation Arrow Function Script

const sum = (value1, value2) => {
    return value1 + value2;
};

console.log(`Sum of 10 and 20 is ${sum(10, 20)}`);




//! 5. Higher-Order Functions Script

const higherOrderFunctionThree = (value, func) => {
    for (let i = 1; i <= value; i++) {
        func(i);
    }
};

const printNumber = (index) => {
    console.log(index);
};

higherOrderFunctionThree(10, printNumber);