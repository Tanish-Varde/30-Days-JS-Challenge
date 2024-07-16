//! Activity 1 => For Loop

console.log(`\n For Loop \n`);


//? Task 1

for (i = 1; i <= 10; i++) {
    console.log(i);
};

//? Task 2

let table = 5;

for (i = 1; i <= 10; i++) {
    console.log(`${table} * ${i} = ${table * i}`);
};




//! Activity 2 => While Loop

console.log("\n While Loop \n");


//? Task 3

let num = 1;
let sum = 0;

while (num <= 10) {
    sum += num;
    num++;
}

console.log(`The sum of 1 to 10 is ${sum} \n`);


//? Task 4

let num2 = 10;

while (num2 >= 1) {
    console.log(num2);
    num2--;
};




//! Activity 3 => Do...While Loop

console.log("\n Do...While Loop \n");


//? Task 5

let num3 = 1;

do {
    console.log(num3);
    num3++;
} while (num3 <= 5);


//? Task 6

let factorial = 5;
let k = 1
let result = 1

do {
    result *= k;
    k++;
} while (k <= factorial);

console.log(`The factorial of ${factorial} is ${result}`);




//! Activity 4 => Nested Loops

console.log("\n Nested Loops \n");


//? Task 7

let pattern = 5;
let star = "";

for (i = 1; i <= pattern; i++) {
    star = ""
    for (j = 1; j <= i; j++) {
        star += "* ";
    }
    console.log(star);
};




//! Activity 5 => Loop Control Statements

console.log("\n Loop Control Statements \n");


//? Task 8

for (i = 1; i <= 10; i++) {
    if (i == 5) continue;

    console.log(i)
};

console.log("\n")

//? Task 9

for (i = 1; i <= 10; i++) {
    if (i == 7) break;

    console.log(i);
};




//! --------------------------------- Feature Request -------------------------------



console.log("\n\n Feature Request \n");


//? 1. Number Printing Script

console.log("\n Number Printing Script \n");

for (i = 1; i <= 10; i++) {
    console.log(i);
};

console.log("\n ");

let num4 = 1;

while (num4 <= 10) {
    console.log(num4);
    num4++;
};



//? 2. Multiplication Table Script

console.log("\n Multiplication Table Script \n");

for (let i = 1; i <= 10; i++) {
    let table = 5;

    console.log(`${table} * ${i} = ${table * i}`)
};




//? 3. Pattern Printing Script (Square Pattern)

console.log("\n Pattern Printing Script (Square) \n");

let pattern2 = 5;
let star2 = "";

for (i = 1; i<= pattern2; i++) {
    star2 = "";
    for (j = 0; j < pattern2; j++) {
        star2 = star2 + "* ";
    }
    console.log(star2);
};




//? 4. Sum Calculation Script

console.log("\n Sum Calculation Script \n");

let num5 = 1;
let sum2 = 0;

while (num5 <= 10) {
    sum2 += num5;
    num5++;
};

console.log(`The sum of numbers from 1 to 10 is ${sum2}`);




//? 5. Factorial Calculations Script

console.log("\n Factorial Calculations Script \n");

let factorial2 = 10;
let x = 1;
let result2 = 1;

do {
    result2 *= x;
    x++;
} while (x <= factorial2);

console.log(`The factorial of ${factorial2} is ${result2}`);