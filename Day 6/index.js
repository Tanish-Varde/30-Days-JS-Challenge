//! Activity 1 => Array Creation and Access

console.log("\n Array Creation and Access \n");


//? Task 1

const arrNumbers = [1, 2, 3, 4, 5];
console.log(arrNumbers);


console.log("\n");


//? Task 2

console.log(`First Element: ${arrNumbers[0]}`);
console.log(`Last Element: ${arrNumbers[arrNumbers.length - 1]}`);





//! Activity 2 => Array Methods (Basic)

console.log("\n Array Methods (Basic) \n");


let basicArray = [1, 2, 3, 4, 5];
console.log("basicArray => ", basicArray, "\n");


//? Task 3

basicArray.push(6);
console.log("Push => ", basicArray, "\n");


//? Task 4

basicArray.pop();
console.log("Pop => ", basicArray, "\n");


//? Task 5

basicArray.shift();
console.log("Shift => ", basicArray, "\n");


//? Task 6

basicArray.unshift(1);
console.log("Unshift => ", basicArray, "\n");





//! Activity 3 => Array Methods (Intermediate)

console.log("\n Array Methods (Intermediate) \n");


//* Declare an array to perform Intermediate tasks
let intermediateArray = [1, 2, 3, 4, 5];
console.log("intermediateArray => ", intermediateArray, "\n");


//? Task 7

let mapArray = intermediateArray.map((element) => element * 2);
console.log("Map => ", mapArray, "\n");


//? Task 8

let filterArray = intermediateArray.filter((element) => element % 2 == 0);
console.log("Filter => ", filterArray, "\n");


//? Task 9

let reduceArray = intermediateArray.reduce((accumulator, element) => (accumulator + element), 0);
console.log("Reduce => ", reduceArray, "\n");





//! Activity 4 => Array Iteration

console.log("\n Array Iteration \n");


//* Declare an array to perform Iteration tasks
let iterationArray = [1, 2, 3, 4, 5];
console.log("IterationArray => ", iterationArray, "\n");


//? Task 10

console.log("Using For Loop");
for (let i = 0; i < iterationArray.length; i++) {
    console.log(iterationArray[i]);
};


//? Task 11

console.log("\n Using forEach Loop");
iterationArray.forEach((element) => console.log(element));





//! Activity 5 => Multy-dimensional Arrays

console.log("\n Multy-dimensional Arrays \n");


//? Task 12

const twoDArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("TwoDArray => ", twoDArray, "\n");


//? Task 13

console.log("  Accessing Elements");
console.log(twoDArray[0][2]);   // 3
console.log(twoDArray[1][0]);   // 4
console.log(twoDArray[2][2]);   // 9







//! ------------------------------- Feature Request ---------------------------------


console.log("\n\n      Feature Request \n");




//? 1. Array Manipilation Script

console.log("\n Array Manipilation Script \n");


let featureRequestArray = [1, 2, 3, 4, 5];
console.log("featureRequestArray => ", featureRequestArray, "\n");


featureRequestArray.push(6);
console.log("Push => ", featureRequestArray, "\n");

featureRequestArray.pop();
console.log("Pop => ", featureRequestArray, "\n");

featureRequestArray.shift();
console.log("Shift => ", featureRequestArray, "\n");

featureRequestArray.unshift(1);
console.log("Unshift => ", featureRequestArray, "\n");




//? 2. Array Transformations Script

console.log("\n Array Transformations Script \n");

let map = featureRequestArray.map((element) => element * 2);
console.log("Map => ", map, "\n");

let filter = featureRequestArray.filter((element) => element % 2 != 0);
console.log("Filter => ", filter, "\n");

let reduce = featureRequestArray.reduce((accumulator, element) => accumulator + element, 0);
console.log("Reduce => ", reduce, "\n");




//? 3. Array Iteration Script

console.log("\n Array Iteration Script \n");

console.log("Using For Loop \n");
for (let i = 0; i < featureRequestArray.length; i++) {
    console.log(featureRequestArray[i]);
};


console.log("\n Using forEach Loop \n");
featureRequestArray.forEach((element) => console.log(element));




//? 4.Two-dimensional Array Script

console.log("\n Two-dimensional Array Script \n")

let twoDArrayTwo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("TwoDArrayTwo => ", twoDArrayTwo, "\n");

for (let i = 0; i < twoDArrayTwo.length; i++) {
    for (let j = 0; j < twoDArrayTwo[i].length; j++) {
        console.log(twoDArrayTwo[i][j]);
    }
};