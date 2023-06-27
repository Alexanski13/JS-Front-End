function multiply(num) {
  for (let index = 1; index <= 10; index++) {
    let multiply = num * index;
    console.log(`${num} X ${index} = ${multiply}`);
  }
}

multiply(5);