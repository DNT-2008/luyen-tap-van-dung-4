document.addEventListener("DOMContentLoaded", function () {
    let currentInput = "";
    const display = document.getElementById("display");
    const inputDisplay = document.getElementById("input_display");
    const equalButton = document.querySelector(".equal");
  
    function updateDisplay(value) {
      display.innerText = value;
      inputDisplay.value = value;
    }
  
    function input(value) {
      if (currentInput === "0" && value !== ".") {
        currentInput = "";
      }
  
      // Ngăn chặn nhập hai toán tử liên tiếp
      if (/[+\-*/.]/.test(value) && /[+\-*/.]$/.test(currentInput)) {
        return;
      }
  
      currentInput += value;
      updateDisplay(currentInput);
    }
  
    function clearDisplay() {
      currentInput = "";
      updateDisplay("0");
    }
  
    function deleteDigit() {
      currentInput = currentInput.slice(0, -1) || "0";
      updateDisplay(currentInput);
    }
  
    function calculate() {
      try {
        let result = eval(currentInput.replace("×", "*").replace("÷", "/"));
        currentInput = result.toString();
        updateDisplay(currentInput);
      } catch (error) {
        updateDisplay("Error");
        currentInput = "";
      }
    }
  
    document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("click", function () {
        const value = this.innerText;
        if (value === "=") {
          calculate();
        } else if (value === "C") {
          clearDisplay();
        } else if (value === "DEL") {
          deleteDigit();
        } else {
          input(value);
        }
      });
    });
  
    equalButton.addEventListener("click", function (event) {
      event.preventDefault();
      calculate();
    });
  });
  