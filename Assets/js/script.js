//Declared Variables
var buttons = document.querySelectorAll(".buttons");
var startBtn = document.querySelector(".start-quiz"); //THE START QUIZ BUTTON
var header = document.querySelector(".header"); //The h1 for question
var intro = document.querySelector(".intro"); //Introduction
var main = document.querySelector(".main");

// var A = document.querySelector("#A");
// var B = document.querySelector("#B");
// var C = document.querySelector("#C");
// var D = document.querySelector("#D");
var evaluate = document.querySelector(".evaluate"); //Correct or Wrong answer
allQuestions = [
  (num1 = "1)What is NaN property in JavaScript?"),
  (num2 =
    "2)All the variables and functions can be accessed from anywhere if they are found in which scope?"),
  (num3 =
    "3)What do you call a function that will be executed after another function gets executed?"),
  (num4 = "4)Which one of the following is not a JavaScript Data type?"),
  (num5 = "5)Which symbol is used for comments in Javascript?"),
];

// B.addEventListener("click", function () {
//   B.setAttribute("backgroundColor", "blue");
// });

// document.body.appendChild(questions);
// start.addEventListener("click", function () {
//   header.classList.add("hidden");
//   document.querySelector(".header-question1").classList.remove("hidden");
// });

// start.addEventListener("click"); //when start button is clicked, q-1 is displayed with multiple choice

var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

a1.textContent = "A.It means value is undefined.";
a2.textContent = "B. It means the value is not a number";
a3.textContent = "C. It is a method in the window object";
a4.textContent = "D. It is used to stringify arrays.";

// a1.classList.add("buttons");
// function run(event) {
//   event.preventDefault();
//   for (i = 0; i < allQuestions.length; i++) {
//     intro.textContent = allQuestions[i];
//   }
// }

startBtn.addEventListener("click", function run() {
  intro.textContent = "what is your name";
  startBtn.style.visibility = "hidden";
  main.appendChild(a1);
  main.appendChild(a2);
  main.appendChild(a3);
  main.appendChild(a4);
  a1.classList.add("buttons");
  next();
});
function next() {
  if (buttons.clicked == true) {
    alert("button was clicked");
  }
}
// });

// if (){
// a1,a2,a3,a4.classList.add("hidden")
// }

//   A.It means value is undefined.
// B. It means the value is not a number
// C. It is a method in the window object
// D. It is used to stringify arrays
