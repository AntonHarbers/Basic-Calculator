let firstNumber = 0;
let secondNumber = 0;
let operator = '';

let outputValue = document.querySelector('#output-value');
let historyValue = document.querySelector('#history-value');
let inbutButtons = document.querySelectorAll('.input');

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

inbutButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let buttonValue = button.textContent;

    if(outputValue.textContent === 'Too long'){
      outputValue.textContent = '';
      historyValue.textContent = 'Welcome';
      firstNumber = 0;
      secondNumber = 0;
      operator = '';
      return;
    }

    switch (buttonValue) {
      case 'C':
        outputValue.textContent = '';
        historyValue.textContent = 'Welcome';
        firstNumber = 0;
        secondNumber = 0;
        operator = '';
        return;
      case '<-':
        if(noInput()) return;
        outputValue.textContent = outputValue.textContent.slice(0, -1);
        return;
      case '=':
        if(noInput()) return;
        secondNumber = Number(outputValue.textContent);
        outputValue.textContent = operate(firstNumber, secondNumber, operator);
        historyValue.textContent = `${firstNumber.toFixed(2)} ${operator} ${secondNumber.toFixed(2)} =`;
        checkIfNumbTooLong();
        return;
      case '+':
      case '-':
      case 'x':
      case '÷':
        if(noInput()) return;
        if(firstNumber !== 0){
          secondNumber = Number(outputValue.textContent);
          outputValue.textContent = operate(firstNumber, secondNumber, operator);
          historyValue.textContent = `${firstNumber.toFixed(2)} ${operator} ${secondNumber.toFixed(2)} =`;
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
  });
});

function checkIfNumbTooLong() {
  if (outputValue.textContent.length > 15) {
    outputValue.textContent = 'Too long';
  }
}

const noInput = () => {
  if(outputValue.textContent === '' && historyValue.textContent === 'Welcome'){
    return true;
  }else{
    return false;
  }
}



