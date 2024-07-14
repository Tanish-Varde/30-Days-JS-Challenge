//! Activity 1 => Arithmetic Operations

//* Declare two variables to perform arithmetic operations
let a = 10;
let b = 5;

console.log("\n Arithmetic Operations \n");

//? Task 1
console.log(`Addition of ${a} & ${b}: ${a + b}`);

//? Task 2
console.log(`Subtraction of ${a} & ${b}: ${a - b}`);

//? Task 3
console.log(`Multiplication of ${a} & ${b}: ${a * b}`);

//? Task 4
console.log(`Division of ${a} & ${b}: ${a / b}`);

//? Task 5
console.log(`Remainder of ${a} & ${b}: ${a % b}`);



//! Activity 2 => Assignment Operators

console.log("\n Assignment Operators \n");


//* Declare a variable and assign a value to it to perform assignment operations
let num = 10;


//? Task 6

num += 5;               // num = num + 5
console.log(`Addition Assignment: ${num}`);

//? Task 7

num -= 5;               // num = num - 5
console.log(`Subtraction Assignment: ${num}`);



//! Activity 3 => Comparison Operators

console.log("\n Comparison Operators \n");

//* Declare two variables to perform comparison operations
let num1 = 10;
let num2 = 20;


//? Task 8

console.log(`${num1} is Greater than ${num2}: ${num1 > num2}`);
console.log(`${num1} is Less than ${num2}: ${num1 < num2}`);

//? Task 9

console.log(`${num1} is Greater than or equal to ${num2}: ${num1 >= num2}`);
console.log(`${num1} is Less than or equal to ${num2}: ${num1 <= num2}`);

//? Task 10

console.log(`${num1} is Equal to ${num2}: ${num1 == num2}`);
console.log(`${num1} is Type and Equal to  ${num2}: ${num1 === num2}`);



//! Activity 4 => Logical Operators

console.log("\n Logical Operators \n");

//* Declare two variables to perform logical operations
let bool1 = true;
let bool2 = false;


//? Task 11

console.log(`AND(&&): ${bool1 && bool2}`);

//? Task 12

console.log(`OR(||): ${bool1 || bool2}`);

//? Task 13

console.log(`NOT(!): ${!bool1}`);



//! Activity 5 => Ternary Operator

console.log("\n Ternary Operator \n");

//* Declare a variable to perform ternary operation
let number = 13;

//? Task 14

number > 0 ? console.log(`${number} is Positive`) : console.log(`${number} is Negative`);





//! ------------------------------------- Feature Request -------------------------------------

console.log("\n\n Feature Request \n");

//? 1. Arithmetic Operations Script

console.log("\n Arithmetic Operations Script \n");

let number1 = 20;
let number2 = 10;

console.log(`Addition of ${number1} & ${number2} : ${number1 + number2}`);
console.log(`Subtraction of ${number1} & ${number2} : ${number1 - number2}`);
console.log(`Multiplication of ${number1} & ${number2} : ${number1 * number2}`);
console.log(`Division of ${number1} & ${number2} : ${number1 / number2}`);
console.log(`Remainder of ${number1} & ${number2} : ${number1 % number2}`);



//? 2. Comparison and Logical Operations Script

console.log("\n Comparison and Logical Operations Script \n");

let number3 = 4;
let number4 = 8;
let boolean1 = true;
let boolean2 = false;

console.log(`${number3} is Greater than ${number4} : ${number3 > number4}`);
console.log(`${number3} is Less than ${number4} : ${number3 < number4}`);
console.log(`${number3} is Greater than or Equal to ${number4} : ${number3 >= number4}`);
console.log(`${number3} is Less than or Equal to ${number4} : ${number3 <= number4}`);
console.log(`${number3} is Equal to ${number4} : ${number3 == number4}`);
console.log(`${number3} is Type and Equal to ${number4} : ${number3 === number4}`);
console.log(`${number3} is Not Equal to ${number4} : ${number3 != number4}`);

console.log(`AND(&&) of ${boolean1} and ${boolean2} : ${boolean1 && boolean2}`);
console.log(`OR(||) of ${boolean1} and ${boolean2} : ${boolean1 || boolean2}`);
console.log(`NOT(!) of ${boolean1} : ${!boolean1}`);



//? 3. Ternary Operator Script

console.log("\n Ternary Operator Script \n");

//* Declare a variable to perform ternary operation
let number5 = 10;

let result = number5 > 0 ? `${number5} is Positive` : `${number5} is Negative`;
console.log(result);