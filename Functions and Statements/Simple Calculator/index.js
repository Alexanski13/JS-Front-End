const calculator = {
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
};

const calculate = (num1, num2, operator) => calculator[operator](num1, num2);

// function calculate(num1, num2, operator) {
//   if (operator === "multiply") {
//     return num1 * num2;
//   }
//   if (operator === "divide") {
//     return num1 / num2;
//   }
//   if (operator === "add") {
//     return num1 + num2;
//   }
//   if (operator === "subtract") {
//     return num1 - num2;
//   }
// }

const result = calculate(5, 5, "multiply");

console.log(result);
