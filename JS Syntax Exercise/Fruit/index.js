function moneyNeeded(type, weight, pricePerKG) {
  const weightInKg = weight / 1000;
  let money = weightInKg * pricePerKG;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${type}.`
  );
}
