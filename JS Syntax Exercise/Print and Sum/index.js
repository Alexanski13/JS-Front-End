function printSum(start, end) {
    let sum = 0;
    const numbers = [];

    for (let index = start; index <= end; index++) {
        numbers.push(index);
        sum += index;
    }

    console.log(numbers.join(" "))
    console.log(`Sum: ${sum}`);
}