function setToObject(firstName, lastName, age) {
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return person;
}

console.log(setToObject("Peter", "Pan", "20"));
