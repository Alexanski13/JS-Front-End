function cookingNumber(number, ...actions) {
  let sum = Number(number);

  for (let index = 0; index < actions.length; index++) {
    const command = actions[index];

    switch (command) {
      case "chop":
        sum /= 2;
        break;
      case "dice":
        sum = Math.sqrt(sum);
        break;
      case "spice":
        sum += 1;
        break;
      case "bake":
        sum *= 3;
        break;
      case "fillet":
        sum = sum - sum * 0.2;
        break;
    }

    console.log(sum);
  }
}

cookingNumber("9", "dice", "spice", "chop", "bake", "fillet");
