function solve(input) {
  const lines = input;
  const n = Number(lines[0]);
  const riders = [];

  for (let i = 1; i <= n; i++) {
    const [rider, fuelCapacity, position] = lines[i].split("|");
    riders.push({
      rider: rider,
      fuelCapacity: Number(fuelCapacity),
      position: Number(position),
    });
  }

  const output = [];

  for (let i = n + 1; i < lines.length - 1; i++) {
    const parts = lines[i].split(" - ");
    const command = parts[0];

    if (command === "StopForFuel") {
      const [, rider, minimumFuel, changedPosition] = parts;
      const riderIndex = riders.findIndex((r) => r.rider === rider);
      if (riders[riderIndex].fuelCapacity < Number(minimumFuel)) {
        riders[riderIndex].position = Number(changedPosition);
        output.push(
          `${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`
        );
      } else {
        output.push(`${rider} does not need to stop for fuel!`);
      }
    } else if (command === "Overtaking") {
      const [, riderA, riderB] = parts;
      const indexA = riders.findIndex((r) => r.rider === riderA);
      const indexB = riders.findIndex((r) => r.rider === riderB);
      if (riders[indexA].position < riders[indexB].position) {
        [riders[indexA].position, riders[indexB].position] = [
          riders[indexB].position,
          riders[indexA].position,
        ];
        output.push(`${riderA} overtook ${riderB}!`);
      }
    } else if (command === "EngineFail") {
      const [, rider, lapsLeft] = parts;
      const riderIndex = riders.findIndex((r) => r.rider === rider);
      output.push(
        `${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`
      );
      riders.splice(riderIndex, 1);
    }
  }

  for (const rider of riders) {
    output.push(`${rider.rider}\n  Final position: ${rider.position}`);
  }

  console.log(output.join("\n"));
}

solve([
  "3",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|2",
  "Jorge Lorenzo|80|3",
  "StopForFuel - Valentino Rossi - 50 - 1",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);

solve([
  "4",
  "Valentino Rossi|100|1",
  "Marc Marquez|90|3",
  "Jorge Lorenzo|80|4",
  "Johann Zarco|80|2",
  "StopForFuel - Johann Zarco - 90 - 5",
  "Overtaking - Marc Marquez - Jorge Lorenzo",
  "EngineFail - Marc Marquez - 10",
  "Finish",
]);
