//Declared Variables
// var buttons = document.querySelectorAll(".buttons");
var startBtn = document.querySelector(".start-quiz"); //THE START QUIZ BUTTON
var header = document.querySelector(".header"); //The h1 for question
var intro = document.querySelector(".intro"); //Introduction
var main = document.querySelector(".main");
index = 0;
secondsLeft = 30;
//Array of objects for questions and answers

var Questions = [
  {
    question: "1)What is NaN property in JavaScript?",
    answers: {
      A: "It means value is undefined.",
      B: "It means the value is not a number",
      C: "It is a method in the window object",
      D: " It is used to stringify arrays",
    },
    correct: "B",
  },
  {
    question:
      "2)All the variables and functions can be accessed from anywhere if they are found in which scope?",
    answers: {
      A: "Local",
      B: "Block",
      C: "Global",
      D: "Functional",
    },
    correct: "D",
  },
  {
    question:
      "3)What do you call a function that will be executed after another function gets executed?",
    answers: {
      A: "Constant",
      B: "Callback",
      C: "Variable",
      D: "Global",
    },
    correct: "B",
  },
  {
    question: "4)Which one of the following is not a JavaScript Data type?",
    answers: {
      A: "Boolean",
      B: "String",
      C: "Undefined",
      D: "Modulus",
    },
    correct: "D",
  },
  {
    question: "5)Which symbol is used for comments in Javascript?",
    answers: {
      A: "< !╌ ╌>",
      B: " /* */",
      C: "//",
      D: "$",
    },
    correct: "C",
  },
];

//Dynamically created ordered list and list items
var prompt = document.createElement("p"); //Questions will be displayed here
var orderedList = document.createElement("ol");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li5 = document.createElement("li");
//Dynamically created buttons for multiple choice
var a1 = document.createElement("button");
var a2 = document.createElement("button");
var a3 = document.createElement("button");
var a4 = document.createElement("button");

//Append the question and answers
function append(event) {
  main.appendChild(prompt);
  main.appendChild(orderedList);
  orderedList.appendChild(li1);
  orderedList.appendChild(li2);
  orderedList.appendChild(li3);
  orderedList.appendChild(li4);
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  li4.appendChild(a4);
}
//Add text to added elements
function text() {
  //Add text to buttons
  prompt.textContent = Questions[index].question;
  a1.textContent = Questions[index].answers.A;
  a2.textContent = Questions[index].answers.B;
  a3.textContent = Questions[index].answers.C;
  a4.textContent = Questions[index].answers.D;
}

startBtn.addEventListener("click", function () {
  setTime();
  startBtn.style.visibility = "hidden";
  // intro.style.visibility = "hidden";

  append();
  text();

  index++;
});

main.addEventListener("click", function (e) {
  text();
  index++;
});

//Time interval
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    intro.textContent = secondsLeft + " remaining!";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 700);
}

function sendMessage() {
  intro.textContent = "Game Over! ";
}
