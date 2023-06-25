function reverse(n, inputArr) {
  const newArr = inputArr.slice(0, n);

  newArr.reverse();

  console.log(newArr.join(" "));
}
