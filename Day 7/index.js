//! Activity 1 => Object Creation and Access

console.log("\n Object Creation and Access \n");


//? Task 1

let book = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951
};

console.log("Book => ", book, "\n");


//? Task 2

console.log("Title => ", book.title);
console.log("Author => ", book.author);





//! Activity 2 => Object Methods

console.log("\n Object Methods \n");


//? Task 3

book.description = function () {
    return `Title: ${this.title}, Author: ${this.author}`;
    ;
};
console.log(book.description());


//? Task 4

book.modifyYear = function (newYear) {
    this.year = newYear;
    return `Book's year updated successfully to ${this.year}`;
};
console.log(book.modifyYear(1999));





//! Activity 3 => Nested Objects

console.log("\n Nested Objects \n");


//? Task 5

let library = {
    name: "My Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    ]
};
console.log("Library => ", library, "\n");


//? Task 6

console.log("Name => ", library.name, "\n");

library.books.forEach((book, index) => {
    console.log(`Book ${index + 1} => `, book.title);
});





//! Activity 4 => The this Keyword

console.log("\n The this Keyword \n");


//? Task 7

book.getInfo = function () {
    return `Title: ${this.title}, Year: ${this.year}`;
};

console.log(book.getInfo());





//! Activity 5 => Object Iteration

console.log("\n Object Iteration \n");


//? Task 8

for (const key in book) {
    console.log(key, ":", book[key]);
};

console.log("\n");


//? Task 9

console.log("Keys: ", Object.keys(book), "\n");

console.log("Values: ", Object.values(book), "\n");








//! ------------------------------- Feature Request ---------------------------------


console.log("\n\n      Feature Request \n");



//? 1. Book Object Script


let bookTwo = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    getInfo() {
        return `Title: ${this.title}, Year: ${this.year}`;
    },
    updateYear(newYear) {
        this.year = newYear;
        return `Book's year updated successfully to ${this.year}`;
    }
};


console.log("Properties => ", Object.keys(bookTwo), "\n");

console.log(bookTwo.getInfo(), "\n");

console.log(bookTwo.updateYear(2000), "\n");




//? 2. Library Object Script


let libraryTwo = {
    name: "My Library Two",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    ],
};

console.log("Name => ", libraryTwo.name, "\n");

console.log("Books => ", libraryTwo.books, "\n");





//? 3. Object Iteration Script


let obj = {
    name: "John Doe",
    age: 30,
    country: "India"
};

for (const key in obj) {
    console.log(`${key} => ${obj[key]}`);
};


console.log("\n", "Object keys => ", Object.keys(obj), "\n");

console.log("Object values => ", Object.values(obj), "\n");