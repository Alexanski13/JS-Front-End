function printNthElement(arr, step) {
//   let newArr = [];

//   for (let index = 0; index < arr.length; index += step) {
//     newArr.push(arr[index]);
//   }

//   console.log(newArr.join("\r\n"));

    console.log(arr.filter((element, index) => index % step == 0));
}

printNthElement(['dsa',
'asd',
'test',
'tset'],
2)