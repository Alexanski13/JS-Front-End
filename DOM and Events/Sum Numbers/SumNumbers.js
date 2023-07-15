function calc() {
  const num1 = document.querySelector("#num1");
  const num2 = document.querySelector("#num2");

  const sum = Number(num1.value) + Number(num2.value);

  document.getElementById("sum").value = sum;
}
