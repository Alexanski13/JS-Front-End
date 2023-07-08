function solve(person) {
  Object.entries(person).forEach(function (pair) {
    const key = pair[0];
    const value = pair[1];
    console.log(`${key} -> ${value}`);
  });
}

solve({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
