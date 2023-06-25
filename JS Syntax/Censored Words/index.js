function censor(text, word) {
  const regex = new RegExp(word, "g");

  const result = text.replace(regex, "*".repeat(word.length));

  console.log(result);
}
