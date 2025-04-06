let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let clearBtn = document.querySelector('.operator[data-value="C"]');
let equalBtn = document.getElementById('equal');

let currentInput = '0';
let previousInput = '';
let operator = '';
let isResult = false; // Flag to handle multiple operations

// Update display with current input
function updateDisplay() {
  display.textContent = currentInput;
}

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    let value = e.target.dataset.value;

    // Number or Decimal input
    if (!isNaN(value) || value === '.') {
      if (isResult) {
        currentInput = value === '.' ? '0.' : value;
        isResult = false;
      } else {
        if (currentInput === '0' && value !== '.') {
          currentInput = value;
        } else {
          currentInput += value;
        }
      }
    }

    // Clear
    else if (value === 'C') {
      currentInput = '0';
      previousInput = '';
      operator = '';
    }

    // Operators
    else if (['+', '-', '*', '/', '%', 'floor'].includes(value)) {
      if (operator) {
        calculate();
      }
      previousInput = currentInput;
      currentInput = '0';
      operator = value;
    }

    // Functions
    else if (value === 'sin') {
      currentInput = Math.sin(toRadians(parseFloat(currentInput))).toString();
    }
    else if (value === 'cos') {
      currentInput = Math.cos(toRadians(parseFloat(currentInput))).toString();
    }
    else if (value === 'tan') {
      currentInput = Math.tan(toRadians(parseFloat(currentInput))).toString();
    }
    else if (value === 'sqrt') {
      currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    }
    else if (value === 'pow') {
      currentInput = Math.pow(parseFloat(currentInput), 2).toString();
    }

    updateDisplay();
    addShineEffect(e.target);
  });
});

// Handle equals button
equalBtn.addEventListener('click', function () {
  if (operator) {
    calculate();
  }
  updateDisplay();
  isResult = true;
});

// Perform calculation based on operator
function calculate() {
  let result;
  let prev = parseFloat(previousInput);
  let curr = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
  }
}