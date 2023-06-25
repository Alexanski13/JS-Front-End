function solve(arr) {
  let result;
  for (let index = 0; index < arr.length; index++) {
    arr[index] = Number(arr[index]);
  }
  let evenSum = 0;
  let oddSum = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      evenSum += arr[index];
    } else {
      oddSum += arr[index];
    }

    result = evenSum - oddSum;
  }

  console.log(result);
}
