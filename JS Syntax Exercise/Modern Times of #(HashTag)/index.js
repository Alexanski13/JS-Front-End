function findSpecialWords(input) {
    let words = input.split(" ");
  
    let specialWords = [];
  
    for (let word of words) {
      // Check if the word starts with '#'
      if (word.startsWith("#")) {
        // Remove the '#' symbol from the word
        let specialWord = word.slice(1);
  
        // Check if the special word consists only of letters
        if (/^[a-zA-Z]+$/.test(specialWord)) {
          specialWords.push(specialWord);
        }
      }
    }
  
    for (let specialWord of specialWords) {
      console.log(specialWord);
    }
  }