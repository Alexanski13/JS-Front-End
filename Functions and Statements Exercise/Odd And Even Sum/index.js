function oddAndEvenSum(number) {
  let evenSum = 0;
  let oddSum = 0;

  const numToString = String(number);
  for (let index = 0; index < numToString.length; index++) {
    const digit = parseInt(numToString[index]);

    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
