export function ProductCostCalc(
  costInfo: {
    [key: string]: [{ upperLimit: number; price: number }];
  },
  product: { [key: string]: any },
): number {
  let additionalCost = 0.0;

  const costCalculator = (key, value) => {
    value.sort((a, b) => {
      return a.uperLimit - b.uperLimit;
    });
    additionalCost += costCalculateByType(product, key, value);
  };

  const costCalculateByType = (product, key, value) => {
    for (const item of value) {
      if (product[key] <= item.upperLimit) {
        return item.price;
      }
    }
    return value[value.length - 1].price;
  };
  for (const [key, value] of Object.entries(costInfo)) {
    costCalculator(key, value);
  }
  return additionalCost;
}
