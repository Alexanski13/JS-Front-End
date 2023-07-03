const productList = {
  coffee: 1.5,
  water: 1.0,
  coke: 1.4,
  snacks: 2.0,
};

function calculateTotalPrice(product, quantity) {
  const total = productList[product] * quantity;
  console.log(total.toFixed(2));
}

calculateTotalPrice("coffee", 3);
