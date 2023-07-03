function subtractSum(x, y, z) {
  function sum(x, y) {
    return x + y;
  }

  function subtract(x, y) {
    return x - y;
  }

  return subtract(sum(x, y), z);
}

console.log(subtractSum(1, 17, 30));
