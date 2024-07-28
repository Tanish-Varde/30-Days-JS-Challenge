//! Activity 1 => Basic Error Handling with Try-Catch

console.log("\n Basic Error Handling with Try-Catch \n");


//? Task 1

; (async () => {
    try {
        throw new Error("Intentionally thrown Error");
    } catch (error) {
        console.log("Error: ", error.message);
    }
})();


//? Task 2

; ((numerator, denominator) => {
    try {
        if (denominator === 0) {
            throw new Error("denominator cannot be Zero!");
        }
        console.log(numerator / denominator);
    } catch (error) {
        console.log("Error: ", error.message);
    }
})(22, 0);





//! Activity 2 => Finally Block

console.log("\n Finally Block \n");


//? Task 3

; (() => {
    try {
        console.log("I am Try block");
        throw new Error("Intentionally thrown Error 2");
    } catch (error) {
        console.log("I am Catch block");
        console.log("Error: ", error.message);
    } finally {
        console.log("I am Finally block");
    }
})();





//! Activity 3 => Custom Error Objects

console.log("\n Custom Error Objects \n");


//? Task 4


class CustomError extends Error {
    constructor(message, status) {
        super(message, status);
        this.name = "CustomError";
        this.status = status;
    }
};

; (() => {
    try {
        throw new CustomError("Intentionally thrown CustomError", 500);
    } catch (error) {
        console.log("Error: ", error.message, " ", error.status);
    }
})();


//? Task 5

const validateString = (str) => {
    try {
        if (str.trim() === "") {
            throw new CustomError("Input string cannot be empty", 400);
        };
        console.log(`Input string ${str} is valid!`);
    } catch (error) {
        console.log("Error: ", error.message, " ", error.status);
    }
};

validateString(" ");





//! Activity 4 => Error Handling in Promises

console.log("\n Error Handling in Promises \n");


const randomPromise = () => {
    return new Promise((resolve, reject) => {
        let randomInt = Math.floor(Math.random() * 2);

        if (randomInt === 0) {
            resolve("Promise resolved successfully!");
        } else {
            reject(new CustomError("Promise rejected", 17));
        }
    })
};


//? Task 6

randomPromise()
    .then((res) => console.log(res))
    .catch((err) => {
        console.log("Error: ", err.message, " ", err.status);
    });


//? Task 7

; (async () => {
    try {
        let result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.log("Error: ", error.message, " ", error.status);
    }
})();





//! Activity 5 => Graceful Error Handling in Fetch

console.log("\n Graceful Error Handling in Fetch \n");

const fakeUrl = "http://localhost/3000";


//? Task 8

fetch(fakeUrl)
    .then((res) => console.log(res))
    .catch((error) => {
        console.log("Api Error: ", error.message);
    });


//? Task 9


const handleApi = async () => {
    try {
        let response = await fetch(fakeUrl);
        console.log(response)
    } catch (error) {
        console.log("Api Error: ", error.message);
    }
};

handleApi();