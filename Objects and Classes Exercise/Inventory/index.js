function heroList(input) {
  const heroes = input.reduce((acc, curr) => {
    const [name, level, itemsString] = curr.split(" / ");
    const heroLevel = parseInt(level);
    const items = itemsString ? itemsString.split(", ") : [];

    const hero = {
      name: name,
      level: heroLevel,
      items: items,
    };

    acc.push(hero);
    return acc;
  }, []);

  heroes.sort((a, b) => a.level - b.level);

  const output = heroes.map((hero) => {
    const { name, level, items } = hero;
    const itemsString = items.length > 0 ? items.join(", ") : "None";
    return `Hero: ${name}\nlevel => ${level}\nitems => ${itemsString}`;
  });

  return output.join("\n");
}

console.log(
  heroList([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
