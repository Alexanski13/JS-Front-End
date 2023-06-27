function sumDigits(num) {
  let sum = 0;
  const digitsString = num.toString();
  for (let index = 0; index < digitsString.length; index++) {
    sum += Number(digitsString[index]);
  }

  console.log(sum);
}
