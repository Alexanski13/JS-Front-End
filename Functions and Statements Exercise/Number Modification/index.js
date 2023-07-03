function modifyNumber(num) {
  let numToString = String(num);

  function calculateAverage(num) {
    return (
      numToString
        .split("")
        .map(Number)
        .reduce((acc, current) => acc + current, 0) / numToString.length
    );
  }
  let average = calculateAverage(numToString);

  while (average < 5) {
    numToString += "9";
    average = calculateAverage(numToString);
  }

  return numToString;
}

console.log(modifyNumber(101));
console.log(modifyNumber(5835));
