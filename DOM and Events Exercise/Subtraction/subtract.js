function subtract() {
  const num1 = document.getElementById("firstNumber").value;
  const num2 = document.getElementById("secondNumber").value;

  const subtract = Number(num1) - Number(num2);

  const result = document.getElementById("result");
  result.textContent = subtract;
}
