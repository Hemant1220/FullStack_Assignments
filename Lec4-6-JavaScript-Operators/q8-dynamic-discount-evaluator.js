// Q8. Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// reduce() calculates the original cart total.
const originalCartTotal = cart.reduce((sum, product) => sum + product.price, 0);
const discountedCart = [];

// Apply category-specific discounts using a loop and conditionals.
for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountAmount = product.price * discountRate;
    const finalPrice = product.price - discountAmount;

    discountedCart.push({
        item: product.item,
        originalPrice: product.price,
        discountRate,
        discountAmount,
        finalPrice
    });
}

// reduce() totals the prices after category discounts.
const totalAfterCategoryDiscounts = discountedCart.reduce(
    (sum, product) => sum + product.finalPrice,
    0
);

// Apply the extra 5% only when the original cart total exceeds ₹50,000.
const extraDiscount = originalCartTotal > 50000
    ? totalAfterCategoryDiscounts * 0.05
    : 0;
const finalCartTotal = totalAfterCategoryDiscounts - extraDiscount;

console.log("Dynamic Discount Evaluator");
console.log("--------------------------");
for (const product of discountedCart) {
    console.log(
        `${product.item}: ₹${product.originalPrice} | ` +
        `Category discount: ${(product.discountRate * 100).toFixed(0)}% ` +
        `(₹${product.discountAmount.toFixed(2)}) | ` +
        `Final price: ₹${product.finalPrice.toFixed(2)}`
    );
}
console.log(`Original cart total: ₹${originalCartTotal.toFixed(2)}`);
console.log(`Total after category discounts: ₹${totalAfterCategoryDiscounts.toFixed(2)}`);
console.log(`Extra 5% cart discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final amount payable: ₹${finalCartTotal.toFixed(2)}`);
