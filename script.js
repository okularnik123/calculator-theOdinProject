const clearButton = document.querySelector("#clearbtn");
const deleteButton = document.querySelector("#deletebtn");
const devideButton = document.querySelector("#devidebtn");
const multiplyButton = document.querySelector("#multiplybtn");
const addButton = document.querySelector("#addbtn");
const substractButton = document.querySelector("#subtractbtn");
const equalsButton = document.querySelector("#equalsbtn");

const screen = document.querySelector("#screen");

const numberButtons = document.querySelectorAll(".numberbtn");

let firstNumber = "";
let operator;
let secoundNumber = "";

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", (e) => {
    if (typeof firstNumber === "string") {
      firstNumber += e.target.innerText;
      addNumberToScreen();
    }
  });
}

function addNumberToScreen() {
  screen.innerText = firstNumber;
}
