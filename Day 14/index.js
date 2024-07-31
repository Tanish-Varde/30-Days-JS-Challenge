//! Activity 1 => Class Definition

console.log("\n Class Definition \n");


//? Task 1

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old!`);
    }
};


const john = new Person("john", 21);
john.greet();


//? Task 2

Person.prototype.updateAge = function (age) {
    this.age = age;
    console.log(`Age updated to ${this.age}`);
};

john.updateAge(22);





//! Actvity 2 => Class Inheritance

console.log("\n Class Inheritance \n");


//? Task 3

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    getStudentId() { return this.studentId; }
};


let student1 = new Student("Tanish", 19, "080");
console.log(`Student ID of ${student1.name} => `, student1.getStudentId());


//? Task 4

Student.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. My student ID is ${this.studentId}`);
};

student1.greet();





//! Activity 3 => Static Methods and Properties

console.log("\n Static Methods and Properties \n");


//? Task 5

Person.genericGreet = function () {
    console.log("Hello, Good Morning!");
};

Person.genericGreet();


//? Task 6

class Employee {
    static count = 0;

    constructor(name, role) {
        Employee.count++;
        this.name = name;
        this.role = role;
    }

    getInfo() {
        console.log(`Name: ${this.name}, Role: ${this.role}`);
    }

    static getTotalEmployees() {
        return Employee.count;
    }

};


let employee = new Employee("Tanish", "Developer");
let employee2 = new Employee("John", "Developer");
let employee3 = new Employee("Adam", "Developer");
let employee4 = new Employee("Eve", "Developer");

console.log(`Total Employees: ${Employee.getTotalEmployees()}`);





//! Activity 4 => Getters and Setters

console.log("\n Getters and Setters \n");


//? Task 7

class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }

};

let p1 = new Person2("Tanish", "Varde");
console.log(p1.fullName);


//? Task 8

p1.fullName = "Shivam Varde";
console.log(p1.fullName);





//! Activity 5 => Private Fields

console.log("\n Private Fields \n");


//? Task 9

class Account {
    #balance = 0;

    constructor(name, initialBalance) {
        this.name = name;
        this.#balance = initialBalance;
    }

    get balance() {
        return this.#balance;
    }

    set deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited ${amount} into ${this.name}'s account. Current balance: ${this.#balance}`);
        } else {
            console.log("Invalid deposit amount!");
        }
    }

    set withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew ${amount} from ${this.name}'s account. Current balance: ${this.#balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance!");
        }
    }
};


//? Task 10

let myAccount = new Account("Tanish", 5000);

console.log(myAccount.balance);
myAccount.deposit = 1000;
myAccount.withdraw = 20000;
myAccount.deposit = 100;