const carWash = {
  soap: (cleanPercentage) => cleanPercentage + 10,
  water: (cleanPercentage) => cleanPercentage + cleanPercentage * 0.2,
  "vacuum cleaner": (cleanPercentage) =>
    cleanPercentage + cleanPercentage * 0.25,
  mud: (cleanPercentage) => cleanPercentage - cleanPercentage * 0.1,
};

function cleanPercentageCar(commands) {
  let cleanPercentage = commands.reduce(function (total, current) {
    return carWash[current](total);
  }, 0);

  //   for (let index = 0; index < commands.length; index++) {
  //     const command = commands[index];
  //     cleanPercentage = carWash[command](cleanPercentage);

  //     // switch (command) {
  //     //   case "soap":
  //     //     cleanPercentage += 10;
  //     //     break;
  //     //   case "water":
  //     //     cleanPercentage += cleanPercentage * 0.2;
  //     //     break;
  //     //   case "vacuum cleaner":
  //     //     cleanPercentage += cleanPercentage * 0.25;
  //     //   case "mud":
  //     //     cleanPercentage -= cleanPercentage * 0.1;
  //     //     break;
  //     // }
  //   }

  return `The car is ${cleanPercentage.toFixed(2)} clean`;
}

console.log(cleanPercentageCar(["soap", "soap", "mud"]));
