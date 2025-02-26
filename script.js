function input(value) {
    const display = document.getElementById("display");
    let currentValue = display.innerText;
  
    // Ngăn nhập số 0 ở đầu trừ khi có dấu chấm
    if (currentValue === "0" && value !== ".") {
      currentValue = "";
    }
  
    // Ngăn nhập hai toán tử liên tiếp
    if (/[+\-×÷.]/.test(value) && /[+\-×÷.]$/.test(currentValue)) {
      return;
    }
  
    // Thay thế × và ÷ bằng * và /
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
  
    // Xóa một ký tự, nếu hết thì về 0
    currentValue = currentValue.slice(0, -1) || "0";
    display.innerText = currentValue;
    document.getElementById("input_display").value = currentValue;
  }
  
  function calculate() {
    const display = document.getElementById("display");
    let expression = display.innerText;
  
    try {
      // Chuyển đổi các ký tự phép toán thành ký hiệu JavaScript hiểu
      expression = expression.replace(/×/g, "*").replace(/÷/g, "/");
      let result = eval(expression);
  
      // Kiểm tra nếu kết quả là số hợp lệ
      if (!isFinite(result)) {
        throw new Error("Invalid");
      }
  
      display.innerText = result;
      document.getElementById("input_display").value = result;
    } catch (error) {
      display.innerText = "Error";
    }
  }
  
  // Xử lý sự kiện khi nhấn nút "="
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".equal").addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn form bị reload
      calculate();
    });
  });
  