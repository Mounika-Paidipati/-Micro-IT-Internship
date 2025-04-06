document.getElementById("calculate-btn").addEventListener("click", function() {
    const birthdateInput = document.getElementById("birthdate").value;
  
    if (!birthdateInput) {
      alert("Please select a birthdate.");
      return;
    }
  
    const birthdate = new Date(birthdateInput);
    const today = new Date();
  
    // Calculate the difference in time
    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
  
    // If the month or day is negative, adjust years and months
    if (months < 0) {
      years--;
      months += 12;
    }
  
    if (days < 0) {
      months--;
      // Get the days in the previous month
      const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += prevMonth.getDate();
    }
  
    // Output the result
    document.getElementById("years").textContent = `Years: ${years}`;
    document.getElementById("months").textContent = `Months: ${months}`;
    document.getElementById("days").textContent = `Days: ${days}`;
  });
  