function sortNumbers(numbers) {
  numbers.sort((a, b) => a - b);

  let left = 0;
  let right = numbers.length - 1;
  const result = [];

  while (left <= right) {
    result.push(numbers[left]);
    left++;

    if (left <= right) {
      result.push(numbers[right]);
      right--;
    }
  }

  return result;
}
