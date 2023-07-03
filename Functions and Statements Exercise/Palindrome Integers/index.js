function checkIfPalindromeNums(numbers) {
  const results = [];

  for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    const numberToString = String(number);

    const reversedString = numberToString.split("").reverse().join("");

    if (reversedString === numberToString) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}

checkIfPalindromeNums([123, 323, 421, 121]);
