//! Activity 1 => Variable Declaration

//? Task 1
var first = 10;
console.log(first);

//? Task 2
let second = "Second Task";
console.log(second);



//! Activity 2 => Constant Declaration

//? Task 3
const third = true;
console.log(third);



//! Activity 3 => Data Types

//? Task 4

// Number
let numberType = 10;
console.log(typeof numberType);

// String
let stringType = "String";
console.log(typeof stringType);

// Boolean
let booleanType = true;
console.log(typeof booleanType);

// Object
let objectType = {
    name: "Object"
};
console.log(typeof objectType);

// Array
let arrayType = [1, 2, 3];
console.log(typeof arrayType);



//! Activity 4 => Reassigning Variables

//? Task 5

let reAssign = "First Value";
console.log(`Initial Value: ${reAssign}`);
reAssign = "New Value";
console.log(`Reassigned Value: ${reAssign}`);



//! Activity 5 => Understanding Const

//? Task 6

const constVar = "Constant Variable";
// constVar = "New Value";  // TypeError: Assignment to constant variable.
console.log(constVar);




//! ----------------------------- Feature Request ----------------------------- //


//? 1. Variable Types Console Log

let number = 10;
let string = "String";
let bool = true;
let object = { name: "Object" };
let array = ['Chai', 'And', 'Code'];
let nullValue = null;
let undefinedValue = undefined;
let date = new Date();

console.log(`number: Type => ${typeof number}, Value => ${number}`);
console.log(`string: Type => ${typeof string}, Value => ${string}`);
console.log(`bool: Type => ${typeof bool}, Value => ${bool}`);
console.log(`object: Type => ${typeof object}, Value => ${object}`);
console.log(`array: Type => ${typeof array}, Value => ${array}`);
console.log(`nullValue: Type => ${typeof nullValue}, Value => ${nullValue}`);
console.log(`undefinedValue: Type => ${typeof undefinedValue}, Value => ${undefinedValue}`);
console.log(`date: Type => ${typeof date}, Value => ${date}`);



//? 2. Reassignment Demo

//* let variable
let a = "First Value";
console.log(`Initial Value: ${a}`);
a = "Second Value";
console.log(`Reassigned Value: ${a}`);


//* const variable
const b = "First Value";
console.log(`Initial Value: ${b}`);
// b = "Second Value";  // TypeError: Assignment to constant variable.
console.log(`Reassigned Value: ${b}`);