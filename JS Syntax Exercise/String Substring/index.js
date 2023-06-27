function findWord(search, text) {
  let textSplit = text.toLowerCase().split(" ");

  for (let index = 0; index < text.length; index++) {
    if (textSplit[index] === search) {
      console.log(search);
      return;
    }
  }

  console.log(`${search} not found!`);
}

findWord("python", "JavaScript is the best programming language");
