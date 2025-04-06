// Get all the buttons and display input
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

// Initialize current expression
let currentExpression = "";

// Helper function to calculate GCD (Greatest Common Divisor)
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

// Helper function to simplify fractions
function simplifyFraction(numerator, denominator) {
  let commonDivisor = gcd(numerator, denominator);
  numerator /= commonDivisor;
  denominator /= commonDivisor;
  return { numerator, denominator };
}

// Function to convert a decimal to a fraction
function decimalToFraction(decimal) {
  const denominator = 1000000; // arbitrary large denominator for precision
  let numerator = Math.round(decimal * denominator);
  const simplified = simplifyFraction(numerator, denominator);
  return `${simplified.numerator}/${simplified.denominator}`;
}

// Function to handle trigonometric functions and convert to fractions
function evaluateExpression(expression) {
  // Handle sin, cos, tan in degrees (convert to radians)
  expression = expression.replace(/sin\(([^)]+)\)/g, (match, p1) => {
    let angleInDegrees = parseFloat(p1);
    let result = Math.sin(angleInDegrees * Math.PI / 180);
    return decimalToFraction(result);
  });

  expression = expression.replace(/cos\(([^)]+)\)/g, (match, p1) => {
    let angleInDegrees = parseFloat(p1);
    let result = Math.cos(angleInDegrees * Math.PI / 180);
    return decimalToFraction(result);
  });

  expression = expression.replace(/tan\(([^)]+)\)/g, (match, p1) => {
    let angleInDegrees = parseFloat(p1);
    let result = Math.tan(angleInDegrees * Math.PI / 180);
    return decimalToFraction(result);
  });

  expression = expression.replace(/asin\(([^)]+)\)/g, (match, p1) => {
    let value = parseFloat(p1);
    let result = Math.asin(value) * 180 / Math.PI;
    return decimalToFraction(result);
  });

  expression = expression.replace(/acos\(([^)]+)\)/g, (match, p1) => {
    let value = parseFloat(p1);
    let result = Math.acos(value) * 180 / Math.PI;
    return decimalToFraction(result);
  });

  expression = expression.replace(/atan\(([^)]+)\)/g, (match, p1) => {
    let value = parseFloat(p1);
    let result = Math.atan(value) * 180 / Math.PI;
    return decimalToFraction(result);
  });

  return expression;
}

// Handle button click
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data-value');

    if (buttonValue === 'AC') {
      // Clear the display
      currentExpression = "";
      display.value = "";
    } else if (buttonValue === 'DEL') {
      // Delete last character
      currentExpression = currentExpression.slice(0, -1);
      display.value = currentExpression;
    } else if (buttonValue === '=') {
      // Calculate the result
      try {
        currentExpression = evaluateExpression(currentExpression);

        // Now evaluate the expression (only for basic arithmetic)
        currentExpression = eval(currentExpression).toString();
        display.value = currentExpression;
      } catch (e) {
        display.value = 'Error';
        currentExpression = '';
      }
    } else {
      // Append the button value to the expression
      currentExpression += buttonValue;
      display.value = currentExpression;
    }
  });
});
