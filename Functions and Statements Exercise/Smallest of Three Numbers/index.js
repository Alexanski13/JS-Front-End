function printSmallestNumber(x, y, z) {
  let nums = [x, y, z];
  nums.sort(function (a, b) {
    return a - b;
  });
  return nums[0];
}

console.log(printSmallestNumber(25, 21, 4));
