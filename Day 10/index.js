//! Activity 1 => Basic Event Handling

console.log("\n Basic Event Handling \n");


//? Task 1

let count = 0;
document.querySelector(".task-1").lastElementChild.addEventListener("click", () => {
    count++;
    document.querySelector(".task-1").firstElementChild.innerHTML = `You have clicked ${count} times`;
});


//? Task 2

let imgElement = document.querySelector(".task-2");
imgElement.addEventListener("dblclick", () => {
    imgElement.removeAttribute("class", "blurred");
});





//! Activity 2 => Mouse Events

console.log("\n Mouse Events \n");



//? Task 3

let colors = ["red", "green", "blue"];
document.querySelector(".task-3").addEventListener("mouseover", () => {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".task-3").style.backgroundColor = randomColor;
});


//? Task 4

document.querySelector(".task-3").addEventListener("mouseout", () => {
    document.querySelector(".task-3").style.backgroundColor = "white";
});





//! Activity 3 => Keyboard Events

console.log("\n Keyboard Events \n");


//? Task 5

let inputElement = document.querySelector(".task-5");

inputElement.addEventListener("keydown", (e) => {
    console.log(e.key)
});


//? Task 6

let passElement = document.querySelector(".task-6");
let paraElement = document.querySelector(".task-6-para");

passElement.addEventListener("keyup", (e) => {
    paraElement.innerHTML = e.currentTarget.value;
});





//! Activity 4 => Form Events

console.log("\n Form Events \n");


//? Task 7

let form = document.querySelector(".task-7");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    console.log("Name: ", formData.get("user"));
    console.log("Password: ", formData.get("password"));
});


//? Task 8

let selectElement = document.querySelector("#country");

selectElement.addEventListener("change", (e) => {
    console.log("Selected country: ", e.target.value)
});





//! Activity 5 => Event Delegation

console.log("\n Event Delegation \n");


//? Task 9

document.querySelector('.task-9').addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        console.log('List item ', event.target.textContent, ' was clicked!');
    }
});


//? Task 10

const parentElement = document.getElementById('parent-element');
const addChildButton = document.getElementById('add-child');
const childContainer = document.getElementById('child-container');


addChildButton.addEventListener("click", (e) => {
    const newChild = document.createElement("div");
    newChild.textContent = "New child element";
    childContainer.appendChild(newChild);
});

parentElement.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "DIV") {
        console.log('Child element clicked:', e.target.textContent);
    }
});