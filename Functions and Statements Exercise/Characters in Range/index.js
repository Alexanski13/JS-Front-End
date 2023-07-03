function printCharactersInRange(char1, char2) {
  const startCode = char1.charCodeAt(0);
  const endCode = char2.charCodeAt(0);

  let output = "";

  if (startCode <= endCode) {
    for (let i = startCode + 1; i < endCode; i++) {
      output += String.fromCharCode(i) + " ";
    }
  } else {
    for (let i = startCode - 1; i > endCode; i--) {
      output += String.fromCharCode(i) + " ";
    }

    output = output.split(' ').reverse().join(' ');
  }

  console.log(output);
}

printCharactersInRange("C", "#");
