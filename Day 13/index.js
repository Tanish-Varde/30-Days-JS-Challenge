//! Import the Modules

import lodash from "lodash";
import axios from "axios";
import { sumOfTwo } from "./modules/sumOfTwo.js";
import { person } from "./modules/personObj.js";
import { functionOne, functionTwo, functionThree } from "./modules/namedExport.js";
import defaultFunction from "./modules/defaultExport.js";
import { userData } from "./modules/moduleObj.js";





//! Activity 1 => Creating and Exporting Modules

console.log("\n Creating and Exporting Modules \n");


//? Task 1

let result = sumOfTwo(20, 20)
console.log("The sum is => ", result, "\n");


//? Task 2

console.log("Name: ", person.name);
console.log("Age: ", person.age);
person.greet();





//! Activity 3 => Named and Default Exports

console.log("\n Named and Default Exports \n");


//? Task 3

functionOne();
functionTwo();
functionThree();


//? Task 4

defaultFunction();





//! Activity 3 => Importing Entire Modules

console.log("\n Importing Entire Modules \n");


//? Task 5

userData.getUser();
console.log("User Email => ", userData.userEmail);





//! Activity 4 => Using Third-Party Modules

console.log("\n Using Third-Party Modules \n");


//? Task 6

const str = '  hello world  ';

// Trim whitespace from both sides of a string
const trimmedStr = lodash.trim(str);
console.log(trimmedStr); // 'hello world'

// Capitalize the first letter of a string
const capitalizedStr = lodash.capitalize(trimmedStr);
console.log(capitalizedStr, "\n"); // 'Hello world'


//? Task 7

; (async() => {
    try {
        let response = await axios.get("https://catfact.ninja/fact");
        console.log("Cat Fact => ", response.data.fact);
    } catch (error) {
        console.log(error.message)
    }
})();