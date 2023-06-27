function sortArrayASC(names) {
  const sortedNames = names.slice();

  sortedNames.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  const capitalizedNames = sortedNames.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1)
  );
  for (let i = 0; i < sortedNames.length; i++) {
    console.log(`${i + 1}.${sortedNames[i]}`);
  }
}

sortArrayASC(["John", "Bob", "Christina", "Ema"]);
