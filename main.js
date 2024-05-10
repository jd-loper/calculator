let operand1;
let operator;
let operand2;

let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", () => {
    button.style.backgroundColor = "gray";
  });

  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "white";
  });

  button.addEventListener("click", () => {
    if (!isNaN(button.textContent)) {
      operand1 = (operand1 || "") + button.textContent;
    } else if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "x" ||
      button.textContent === "/"
    ) {
      operator = button.textContent;
      operand2 = operand1;
      operand1 = "";
    } else if (button.textContent === "=") {
      let result = operate(
        operator,
        parseFloat(operand2),
        parseFloat(operand1)
      );
      console.log(result);
      operand1 = result;
      operand2 = null;
      operator = null;
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
  return operand1 / operand2;
}

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "x":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
  }
}
