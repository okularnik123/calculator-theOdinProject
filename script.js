const clearButton = document.querySelector("#clearbtn");
const deleteButton = document.querySelector("#deletebtn");
const operatorButtons = document.querySelectorAll(".operatorButton");
const equalsButton = document.querySelector("#equalsbtn");

const screen = document.querySelector("#screen");

const numberButtons = document.querySelectorAll(".numberbtn");

let firstNumber = "";
let operator = "";
let secoundNumber = "";

let isEndedFirstNumber = false;

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", (e) => {
    if (screen.innerText.length <= 8) {
      if (!isEndedFirstNumber) {
        firstNumber += e.target.innerText;
        addNumberToScreen(firstNumber);
      } else {
        secoundNumber += e.target.innerText;
        addNumberToScreen(secoundNumber);
      }
    }
    console.log(firstNumber);
    console.log(secoundNumber);
    console.log(operator);
    console.log(isEndedFirstNumber);
  });
}
for (const operatorButton of operatorButtons) {
  operatorButton.addEventListener("click", (e) => {
    operator = e.target.innerText;
    if (!isEndedFirstNumber) {
      isEndedFirstNumber = true;
    } else {
      calculateNumbers();
    }
    console.log(firstNumber);
    console.log(secoundNumber);
    console.log(operator);
    console.log(isEndedFirstNumber);
  });
}

clearButton.addEventListener("click", () => {
  firstNumber = "";
  secoundNumber = "";
  operator = "";
  screen.innerText = "0";
  isEndedFirstNumber = false;
});
deleteButton.addEventListener("click", () => {
  if (!isEndedFirstNumber) {
    if (firstNumber.length > 1) {
      firstNumber = firstNumber.replace(/.$/, "");
      addNumberToScreen(firstNumber);
    } else {
      firstNumber = "";
      addNumberToScreen("0");
    }
  } else {
    if (secoundNumber.length > 1) {
      secoundNumber = secoundNumber.replace(/.$/, "");
      addNumberToScreen(secoundNumber);
    } else {
      secoundNumber = "";
      addNumberToScreen("0");
    }
  }
  console.log(firstNumber);
  console.log(secoundNumber);
});

equalsButton.addEventListener("click", () => {
  calculateNumbers();
  isEndedFirstNumber = false;
});

function calculateNumbers() {
  switch (operator) {
    case "+":
      addNumbers();
      break;
    case "-":
      subtractNumbers();
      break;
    case "*":
      multiplyNumbers();
      break;
    case "/":
      divideNumbers();
      break;
  }
}

function handleOperatorClick() {}

function addNumbers() {
  let sum = Number(firstNumber) + Number(secoundNumber);

  addNumberToScreen(sum);

  firstNumber = sum;
  secoundNumber = "";
  isEndedFirstNumber = true;
  console.log(firstNumber);
  console.log(secoundNumber);
  console.log(operator);
  console.log(isEndedFirstNumber);
}
function subtractNumbers() {
  let difference = Number(firstNumber) - Number(secoundNumber);

  addNumberToScreen(difference);

  firstNumber = difference;
  secoundNumber = "";
  isEndedFirstNumber = true;
  console.log(firstNumber);
  console.log(secoundNumber);
  console.log(operator);
  console.log(isEndedFirstNumber);
}

function multiplyNumbers() {
  let product = Number(firstNumber) * Number(secoundNumber);

  addNumberToScreen(product);
  firstNumber = product;
  isEndedFirstNumber = true;
  secoundNumber = "";

  console.log(firstNumber);
  console.log(secoundNumber);
  console.log(operator);
  console.log(isEndedFirstNumber);
}

function divideNumbers() {
  let quotient = Number(firstNumber) / Number(secoundNumber);
  quotient = quotient.toFixed(8);
  quotient = quotient.toString();
  quotient = Number(quotient);
  addNumberToScreen(quotient);
  firstNumber = quotient;
  isEndedFirstNumber = true;
  secoundNumber = "";
}

function addNumberToScreen(number) {
  screen.innerText = number;
}
function updateScreenAndVariables(result) {
  result = +result.toFixed(8);

  screen.innerText = result;
  firstNumber = result;
  secoundNumber = "";
}
