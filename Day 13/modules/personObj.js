export const person = {
    name: "John Doe",
    age: 30,
    country: "India",
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};