//! Activity 1 => Template Literals

console.log("\n Template Literals \n");


//? Task 1

let person = "Tanish";
let age = 19;

console.log(`My name is ${person} and I am ${age} years old! \n`);


//? Task 2

let multiLineString = `This is a String
that spans across
multiple lines`;

console.log(multiLineString);





//! Activity 2 => Destructuring

console.log("\n Destructuring \n");


//? Task 3

const arr = [1, 2, 3, 4, 5];

let [first, second] = arr;

console.log(`First Element: ${first}, Second Element: ${second}`);


//? Task 4

const obj = {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    year: 2000
};

const { title, author } = obj;

console.log(`Title: ${title}, Author: ${author}`);





//! Activity 3 => Spread and Rest Operations

console.log("\n Spread and Rest Operations \n");


//? Task 5

let spreadArray = [...arr, 6, 7, 8, 9, 10];

console.log("Spread Array: ", spreadArray, "\n");


//? Task 6

const sum = (...nums) => {
    return nums.reduce((acc, num) => acc + num, 0);
};

console.log("Sum => ", sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1000));





//! Activity 4 => Default Parameters

console.log("\n Default Parameters \n");


//? Task 7

const productOfTwo = (value1, value2 = 1) => {
    return value1 * value2;
};

console.log("Product with Parameter => ", productOfTwo(5, 5));
console.log("Product without Parameter => ", productOfTwo(5));





//! Activity 5 => Enhanced Object Literals

console.log("\n Enhanced Object Literals \n");


//? Task 8

let personName = "John";
let personAge = 24;
const greet = () => {
    console.log(`Hello ${enhancedObject.personName}`);
}

let enhancedObject = {
    personName,
    personAge,
    greet
};


console.log("Enhanced Object => ", enhancedObject, "\n");


//? Task 9

let propName = "personName";
let propName2 = "personAge";

let conputedObject = {
    [propName]: "Tanish",
    [propName2]: 19,
};

console.log("Conputed Object => ", conputedObject, "\n");









//! --------------------------------- Feature Request ---------------------------------

console.log("\n       Feature Request \n")




//? 1. Template Literals Script


let userName = "Tanish Varde";

console.log(`Hello ${userName}.
This is a Multi-line String.`);


console.log("\n");




//? 2. Destructuring Script


let array = [1, 2, 3, 4, 5, 6, 7, 8];
let object = {
    name: "Tanish",
    city: "Patan"
};


let [one, two] = array;
let { name, city } = object;


console.log(`One: ${one}, Two: ${two}, Name: ${name}, City: ${city}`);


console.log("\n");




//? 3. Spread and Rest operations Script

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [6, 7, 8, 9, 10];

let lastArray = [...firstArray, ...secondArray];


console.log("Spread Array => ", ...lastArray, "\n");

console.log("Rest Operation => ", sum(...lastArray), "\n");


console.log("\n");




//? 4. Default Parameters


console.log("Product without default parameter => ", productOfTwo(10, 10), "\n");

console.log("Product with default parameter => ", productOfTwo(10), "\n");




//? 5. Enhanced Object Literals Script

let personTwo = {
    [propName]: "Tanish",
    [propName2]: 19,
    greet() {
        console.log(`Hello ${this[propName]}`);
    }
};

personTwo.greet();