let operand1;
let operator;
let operand2;
let display = document.getElementById("result");

let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!isNaN(button.textContent)) {
      operand1 = (operand1 || "") + button.textContent;
      display.value = operand1;
    } else if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "*" ||
      button.textContent === "/"
    ) {
      operator = button.textContent;
      operand2 = operand1;
      operand1 = "";
      display.value = button.textContent;
    } else if (button.textContent === "=") {
      let result = operate(
        operator,
        parseFloat(operand2),
        parseFloat(operand1)
      );
      console.log(result);
      display.value = result;
      operand1 = result;
      operand2 = null;
      operator = null;
    } else if (button.textContent === "C") {
      clearBtn();
    }
  });
});

function add(operand1, operand2) {
  return operand1 + operand2;
}

function subtract(operand1, operand2) {
  return operand1 - operand2;
}

function multiply(operand1, operand2) {
  return operand1 * operand2;
}

function divide(operand1, operand2) {
  if (operand2 === 0) {
    return "ERR";
  }
  return operand1 / operand2;
}

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
    default:
      return 0;
  }
}

function clearBtn() {
  operand1 = null;
  operand2 = null;
  operator = null;
  display.value = "";
}
