function toObject(jsonString) {
  let person = JSON.parse(jsonString);

  Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

toObject('{"name": "George", "age": 40, "town": "Sofia"}');
