function divideFactorialOfTwoNums(num1, num2) {
  function calculateFactorial(number) {
    let factorial = 1;

    for (let index = 1; index <= number; index++) {
      factorial *= index;
    }

    return factorial;
  }

  const num1Fact = calculateFactorial(num1);
  const num2Fact = calculateFactorial(num2);

  return (calculateFactorial(num1) / calculateFactorial(num2)).toFixed(2);
}

console.log(divideFactorialOfTwoNums(5, 2));
