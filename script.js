let firstNumber = 0;
let secondNumber = 0;
let operator = '';

let outputValue = document.querySelector('#output-value');
let historyValue = document.querySelector('#history-value');
let inbutButtons = document.querySelectorAll('.input');

inbutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let buttonValue = button.textContent;

    if (buttonValue === 'C'){
        outputValue.textContent = '';
        historyValue.textContent = '';
        return
    }else if(buttonValue === '<-'){
        outputValue.textContent = outputValue.textContent.slice(0, -1);
        return
    }else if(buttonValue === '='){
        secondNumber = Number(outputValue.textContent);
        outputValue.textContent = operate(firstNumber, secondNumber, operator);
        historyValue.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
        return
    }else if(buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '÷'){
        firstNumber = Number(outputValue.textContent);
        operator = buttonValue;
        outputValue.textContent = '';
        historyValue.textContent = `${firstNumber} ${operator}`;
        return
    }

    outputValue.textContent += buttonValue;
  });
});

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

