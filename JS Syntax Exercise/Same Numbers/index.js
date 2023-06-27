function findSameNums(num) {
  const digitsString = num.toString();
  let sum = Number(digitsString[0]);
  let isSame = true;

  for (let index = 1; index < digitsString.length; index++) {
    sum += Number(digitsString[index]);
    if (digitsString[index] !== digitsString[index - 1]) {
      isSame = false;
    }
  }
  console.log(isSame);
  console.log(sum);
}

findSameNums(1222);
