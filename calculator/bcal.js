// Function to convert binary to decimal
function convertBinaryToDecimal(binaryStr) {
    return parseInt(binaryStr, 2);
  }
  
  // Event listener for the Convert button
  document.getElementById("convert-btn").addEventListener("click", function () {
    const binaryInput = document.getElementById("binary-input").value;
  
    // Check if input is valid binary number
    if (/^[01]+$/.test(binaryInput)) {
      const decimalValue = convertBinaryToDecimal(binaryInput);
      document.getElementById("decimal-output").textContent = decimalValue;
      document.getElementById("result").style.opacity = 1;
      document.getElementById("result").style.transform = 'translateY(0)';
    } else {
      alert("Please enter a valid binary number!");
    }
  });
  