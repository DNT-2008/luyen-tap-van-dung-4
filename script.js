function input(value) {
    const display = document.getElementById("display");
    let currentValue = display.innerText;
  
    if (currentValue === "0" && value !== ".") {
      currentValue = "";
    }
  
    if (/[+\-×÷.]/.test(value) && /[+\-×÷.]$/.test(currentValue)) {
      return;
    }
  
    if (value === "×") value = "*";
    if (value === "÷") value = "/";
  
    display.innerText = currentValue + value;
    document.getElementById("input_display").value = display.innerText;
  }
  
  function clearDisplay() {
    document.getElementById("display").innerText = "0";
    document.getElementById("input_display").value = "";
  }
  
  function deleteDigit() {
    const display = document.getElementById("display");
    let currentValue = display.innerText;
  
    currentValue = currentValue.slice(0, -1) || "0";
    display.innerText = currentValue;
    document.getElementById("input_display").value = currentValue;
  }
  
  function calculate() {
    const display = document.getElementById("display");
    let expression = display.innerText;
  
    try {
      expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
      let result = eval(expression);
  
      if (!isFinite(result)) {
        throw new Error("Invalid");
      }
  
      display.innerText = result;
      document.getElementById("input_display").value = result;
    } catch (error) {
      display.innerText = "Error";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".equal").addEventListener("click", function (event) {
      event.preventDefault();
      calculate();
    });
  });
  