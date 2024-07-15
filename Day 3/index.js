//! Activity 1 => If-Else Statements


console.log("\n If-Else Statements \n");

//? Task 1

let num1 = 10

if (num1 > 0) {
    console.log(`Number ${num1} is Positive`)
} else if (num1 < 0) {
    console.log(`Number ${num1} is Negative`)
} else if (num1 == 0) {
    console.log(`Number is ${num1}`)
} else {
    console.log(`Please enter valid number`)
}

//? Task 2

let age = 18;

if (age >= 18) {
    console.log(`Candidate is eligible to vote!`);
} else {
    console.log(`Candidate is not eligible to vote!`);
}




//! Activity 2 => Nested If-Else Statements

console.log("\n Nested If-Else Statements \n");

//? Task 3

let number1 = 10;
let number2 = 14;
let number3 = 36;

if (number1 > number2) {
    if (number1 > number3) {
        console.log(`The largest number is ${number1}`);
    } else {
        console.log(`The largest number is ${number3}`);
    }
} else {
    if (number2 > number3) {
        console.log(`The largest number is ${number2}`);
    } else {
        console.log(`The largest number is ${number3}`);
    }
};




//! Activity 3 => Switch Case

console.log("\n Switch Case \n");

//? Task 4

let day = 1;

switch (day) {
    case 1:
        console.log(`Sunday`)
        break;

    case 2:
        console.log(`Monday`)
        break;

    case 3:
        console.log(`tuesday`)
        break;

    case 4:
        console.log(`Wednesday`)
        break;

    case 5:
        console.log(`thursday`)
        break;

    case 6:
        console.log(`Friday`)
        break;

    case 7:
        console.log(`Saturday`)
        break;

    default:
        console.log(`Enter a number between 1 to 7`)
        break;
};


//? Task 5

let score = 5;

switch (true) {
    case score >= 0 && score <= 20:
        console.log("F Grade")
        break;

    case score >= 21 && score <= 40:
        console.log("D Grade")
        break;

    case score >= 41 && score <= 60:
        console.log("C Grade")
        break;

    case score >= 61 && score <= 80:
        console.log("B Grade")
        break;

    case score >= 81 && score <= 100:
        console.log("A Grade")
        break;

    default:
        console.log(`You got ${score}/100, you are a Genius!`)
        break;
}




//! Activity 4 => Conditional (Ternary) Operator

console.log("\n Conditional (Ternary) Operator \n");


//? Task 6

let evenOdd = 34;

evenOdd % 2 == 0 ? console.log(`Number ${evenOdd} is Even!`) : console.log(`Number ${evenOdd} is Odd!`);




//! Activity 5 => Combining Conditions

console.log("\n Combining Conditions \n");


//? Task 7

let leapYear = 2028;

if ((leapYear % 4 == 0 && leapYear % 100 != 0) || leapYear % 400 == 0) {
    console.log(`Year ${leapYear} is a leap year!`);
} else {
    console.log(`Year ${leapYear} is not a leap year!`);
};





//! ------------------------------------- Feature Request -------------------------------------

console.log("\n\n Feature Request \n");


//! 1. Number Check Script

console.log("\n Number Check Script \n");

let num2 = 1

if (num2 > 0) {
    console.log(`Number ${num2} is Positive`)
} else if (num2 < 0) {
    console.log(`Number ${num2} is Negative`)
} else if (num2 == 0) {
    console.log(`Number is ${num2}`)
} else {
    console.log(`Please enter valid number`)
}



//! 2. Voting Eligibility Script

console.log("\n Voting Eligibility Script \n");

let votingAge = 12;

if (votingAge >= 18) {
    console.log(`Candidate is eligible to vote!`);
} else {
    console.log(`Candidate is not eligible to vote!`);
}



//! 3. Day of the Week Script

console.log("\n Day of the Week Script \n");


let weekDay = 2;

switch (weekDay) {
    case 1:
        console.log(`Sunday`)
        break;

    case 2:
        console.log(`Monday`)
        break;

    case 3:
        console.log(`tuesday`)
        break;

    case 4:
        console.log(`Wednesday`)
        break;

    case 5:
        console.log(`thursday`)
        break;

    case 6:
        console.log(`Friday`)
        break;

    case 7:
        console.log(`Saturday`)
        break;

    default:
        console.log(`Enter a number between 1 to 7`)
        break;
};



//! 4. Grade Assignment Script

console.log("\n Grade Assignment Script \n");


let grade = 87;

switch (true) {
    case grade >= 0 && grade <= 20:
        console.log("F Grade")
        break;

    case grade >= 21 && grade <= 40:
        console.log("D Grade")
        break;

    case grade >= 41 && grade <= 60:
        console.log("C Grade")
        break;

    case grade >= 61 && grade <= 80:
        console.log("B Grade")
        break;

    case grade >= 81 && grade <= 100:
        console.log("A Grade")
        break;

    default:
        console.log(`You got ${grade}/100, you are a Genius!`)
        break;
}




//! 5. Leap Year Check Script:

console.log("\n Leap year check Script \n");


let year = 2029;

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`Year ${year} is a leap year!`);
} else {
    console.log(`Year ${year} is not a leap year!`);
};
