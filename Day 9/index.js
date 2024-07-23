//! Activity 1 => Selecting and Manipulating Elements

console.log("\n Selecting and Manipulating Elements \n");


//? Task 1


const element1 = document.getElementById("task-1");

setTimeout(() => {
    element1.innerHTML = "The content of this paragraph has been changed";
}, 2000);


//? Task 2

setTimeout(() => {
    document.getElementsByClassName("task-2")[0].style.backgroundColor = "red";
}, 2000);





//! Activity 2 => Creating and Appending Elements

console.log("\n Creating and Appending Elements \n");


//? Task 3

let divElement = document.createElement("div");
divElement.innerHTML = "This is newly created div";
document.querySelector(".task-3").appendChild(divElement);


//? Task 4

let liELement = document.createElement("li");
liELement.innerHTML = "This is newly created li";
document.querySelector(".task-4").appendChild(liELement);





//! Activity 3 => Removing Elements

console.log("\n Removing Elements \n");


//? Task 5

setTimeout(() => {
    document.querySelector(".task-5").remove();
}, 2000);


//? Task 6

setTimeout(() => {
    document.querySelector(".task-6").lastElementChild.remove();
}, 2000);





//! Activity 4 => Modifying Attributes and Classes

console.log("\n Modifying Attributes and Classes \n");


//? Task 7

let imgElement = document.querySelector(".task-7");

setTimeout(() => {
    imgElement.setAttribute("src", "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg")
}, 2000);


//? Task 8

let task8 = document.querySelector(".task-8").firstElementChild;
task8.setAttribute("class", "hidden");
setTimeout(() => {
    task8.removeAttribute("class");
}, 2000);





//! Activity 5 => Event Handling

console.log("\n Event Handling \n");


//? Task 9

let buttonElement = document.querySelector(".task-9").lastElementChild;
let click = 0;

buttonElement.addEventListener("click", () => {
    click++;
    let para = document.querySelector(".task-9").firstElementChild;
    para.innerHTML = `You have clicked ${click} time!`;
});


//? Task 10


document.querySelector(".task-10").addEventListener('mouseover', () => {
    let colors = ["red", "green", "blue"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector(".task-10").style.borderColor = randomColor;
});