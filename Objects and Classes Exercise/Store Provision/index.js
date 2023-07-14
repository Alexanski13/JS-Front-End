function inventory(currentStock, deliveredStock) {
  const products = [...currentStock, ...deliveredStock];

  const stock = products.reduce((acc, curr, i) => {
    if (i % 2 !== 0) {
      return acc;
    }

    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = 0;
    }

    acc[curr] += Number(products[i + 1]);

    return acc;
  }, {});

  Object.keys(stock).forEach((key) => {
    console.log(`${key} -> ${stock[key]}`);
  });
}
