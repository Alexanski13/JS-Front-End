function multiplyPositiveOrNegative(num1, num2, num3) {
  let negativeCount = 0;

  if (num1 < 0) {
    negativeCount++;
  }

  if (num2 < 0) {
    negativeCount++;
  }

  if (num3 < 0) {
    negativeCount++;
  }

  if (negativeCount % 2 !== 0) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

multiplyPositiveOrNegative(2, -3, -2);
