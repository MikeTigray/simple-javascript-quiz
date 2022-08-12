//Declared Variables
// var buttons = document.querySelectorAll(".buttons");
var startBtn = document.querySelector(".start-quiz"); //THE START QUIZ BUTTON
var header = document.querySelector(".header"); //The h1 for question
var intro = document.querySelector(".intro"); //Introduction
var main = document.querySelector(".main");
var evaluate = document.querySelector(".evaluate");
index = 0;
scores = 0;
secondsLeft = 40;
//Array of objects for questions and answers

var Questions = [
  {
    question: "1)What is NaN property in JavaScript?",
    answers: {
      A: "It means value is undefined.",
      B: "It is used to stringify arrays",
      C: "It means the value is not a number",
      D: "It means the value is not a number ",
    },
    correct: "It means the value is not a number",
  },
  {
    question:
      "2)All the variables and functions can be accessed from anywhere if they are found in which scope?",
    answers: {
      A: "Local",
      B: "Block",
      C: "Functional",
      D: "Global",
    },
    correct: "Functional",
  },
  {
    question:
      "3)What do you call a function that will be executed after another function gets executed?",
    answers: {
      A: "Constant",
      B: "Variable",
      C: "Callback",
      D: "Global",
    },
    correct: "Callback",
  },
  {
    question: "4)Which one of the following is not a JavaScript Data type?",
    answers: {
      A: "Boolean",
      B: "String",
      C: "Modulus",
      D: "Undefined",
    },
    correct: "Modulus",
  },
  {
    question: "5)Which symbol is used for comments in Javascript?",
    answers: {
      A: "< !╌ ╌>",
      B: " /* */",
      C: "//",
      D: "$",
    },
    correct: "//",
  },
];

//Dynamically created ordered list and list items
var Q = document.createElement("p"); //Questions will be displayed here
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
  main.appendChild(Q);
  main.appendChild(orderedList);
  orderedList.appendChild(li1);
  orderedList.appendChild(li2);
  orderedList.appendChild(li3);
  orderedList.appendChild(li4);
  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
  li4.appendChild(a4);
  a1.classList.add("magic");
  console.log(a1);
}
//Add text to added elements
function text() {
  //Add text to buttons
  if (index <= 4) {
    Q.textContent = Questions[index].question;
    a1.textContent = Questions[index].answers.A;
    a2.textContent = Questions[index].answers.B;
    a3.textContent = Questions[index].answers.C;
    a4.textContent = Questions[index].answers.D;
  }
}

startBtn.addEventListener("click", function (event) {
  event.preventDefault();
  startBtn.style.visibility = "hidden";
  intro.style.visibility = "hidden";
  setTime();
  append();
  text();
});

main.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target);
  if (index <= 4) {
    if (e.target == a3 && secondsLeft > 0) {
      scores++;
      index++;
      text();
    } else if (
      (e.target == a1 || e.target == a2 || e.target == a4) &&
      secondsLeft > 0
    ) {
      text();
      secondsLeft -= 5;
      index++;
    }
  } else if (index > 4 || secondsLeft == 0) {
    alert("Game Over!");
    sendMessage();
  }
});

if (secondsLeft > 0) {
  function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
      secondsLeft--;
      header.textContent = secondsLeft + " seconds remaining!";

      if (secondsLeft <= 0 || index > 4) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
    }, 700);
  }
}
//message when timer is over
function sendMessage() {
  var username = prompt("enter your name");
  localStorage.setItem("score", scores);
  localStorage.setItem("name", username);
  header.textContent = `${username} , you scored ${scores} out of 5!`;
}
