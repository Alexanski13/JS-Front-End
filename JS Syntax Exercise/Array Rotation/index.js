function rotation(arr, rotations) {

    for (let index = 0; index < rotations; index++) {
        const firstElement = arr.shift();
        arr.push(firstElement);
    }

    console.log(arr.join(" "));
}