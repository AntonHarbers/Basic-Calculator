// Variable Declarations
let outputValue = document.querySelector('#output-value');
let historyValue = document.querySelector('#history-value');
let inbutButtons = document.querySelectorAll('.input');

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

// Event Listeners
inbutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (outputValue.textContent === 'Too long') {
      resetState();
      return;
    }

    let buttonValue = button.textContent;

    ButtonClickHandler(buttonValue);
  });
});

// Event Handlers

const ButtonClickHandler = (buttonValue) => {
  switch (buttonValue) {
    case 'C':
      resetState();
      return;
    case '<-':
      if (noInput()) return;
      outputValue.textContent = outputValue.textContent.slice(0, -1);
      return;
    case '=':
      if (noInput()) return;
      secondNumber = Number(outputValue.textContent);
      outputValue.textContent = operate(firstNumber, secondNumber, operator);
      historyValue.textContent = `${firstNumber.toFixed(
        2
      )} ${operator} ${secondNumber.toFixed(2)} =`;
      checkIfNumbTooLong();
      return;
    case '+':
    case '-':
    case 'x':
    case '÷':
      if (noInput()) return;
      if (firstNumber !== 0) {
        secondNumber = Number(outputValue.textContent);
        outputValue.textContent = operate(firstNumber, secondNumber, operator);
        historyValue.textContent = `${firstNumber.toFixed(
          2
        )} ${operator} ${secondNumber.toFixed(2)} =`;
        checkIfNumbTooLong();
      }

      firstNumber = Number(outputValue.textContent);
      operator = buttonValue;
      outputValue.textContent = '';
      historyValue.textContent = `${firstNumber.toFixed(2)} ${operator}`;
      return;
  }

  outputValue.textContent += buttonValue;
  checkIfNumbTooLong();
};

// Helper Functions

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '÷':
      return divide(a, b);
  }
};

function checkIfNumbTooLong() {
  outputValue.textContent.length > 15
    ? (outputValue.textContent = 'Too long')
    : null;
}

const noInput = () => {
  return outputValue.textContent === '' &&
    historyValue.textContent === 'Welcome'
    ? true
    : false;
};

const resetState = () => {
  outputValue.textContent = '';
  historyValue.textContent = 'Welcome';
  firstNumber = 0;
  secondNumber = 0;
  operator = '';
};
