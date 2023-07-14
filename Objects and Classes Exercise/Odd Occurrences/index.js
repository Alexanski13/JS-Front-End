function oddOccurences(sentence) {
  const words = sentence.toLowerCase().split(" ");

  const wordFrequencies = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
  }

  const oddWords = Object.keys(wordFrequencies)
    .filter((word) => wordFrequencies[word] % 2 !== 0)
    .sort((a, b) => {
      if (isNaN(a) && isNaN(b)) {
        return a.localeCompare(b); // Sort alphabetically
      } else if (!isNaN(a) && !isNaN(b)) {
        return a - b; // Sort numbers in ascending order
      } else if (isNaN(a)) {
        return -1; // Words go before numbers
      } else {
        return 1; // Numbers go after words
      }
    });

  return oddWords.join(" ");
}

console.log(oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#"));
console.log(oddOccurences("food soft"));
