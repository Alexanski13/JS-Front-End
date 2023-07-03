function solve(input) {
  const [target, ...chunks] = input;

  for (let chunk of chunks) {
    while (chunk > target) {
      if (chunk / 4 >= target) {
        let counter = 0;
        while (chunk / 4 >= target) {
          chunk /= 4;
          counter++;
        }

        chunk = Math.floor(chunk);
        console.log(`Cut x${counter}`);
        console.log("Transporting and washing");
        continue;
      }

      if (chunk - chunk * 0.2 >= target) {
        let counter = 0;
        while (chunk - chunk * 0.2 >= target) {
          chunk -= chunk * 0.2;
          counter++;
        }

        chunk = Math.floor(chunk);
        console.log(`Lap x${counter}`);
        console.log("Transporting and washing");
        continue;
      }

      if (chunk - 20 >= target) {
        let counter = 0;
        while (chunk - 20 >= target) {
          chunk -= 20;
          counter++;
        }

        chunk = Math.floor(chunk);
        console.log(`Grind x${counter}`);
        console.log("Transporting and washing");
        continue;
      }

      if (chunk - 2 >= target - 1) {
        let counter = 0;
        while (chunk - 2 >= target - 1) {
          chunk -= 2;
          counter++;
        }

        chunk = Math.floor(chunk);
        console.log(`Etch x${counter}`);
        console.log("Transporting and washing");
        continue;
      }
    }

    if (chunk + 1 === target) {
      chunk += 1;
      console.log("X-ray x1");
    }

    console.log(`Finished crystal ${target} microns`);
  }
}

solve([1000, 4000, 8500]);
