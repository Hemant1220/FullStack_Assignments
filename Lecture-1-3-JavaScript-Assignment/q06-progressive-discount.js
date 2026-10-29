// Q6: Progressive Discount System
const purchaseTotal = 7200;
let discountPercentage = 0;
if (purchaseTotal >= 10000) discountPercentage = 25;
else if (purchaseTotal >= 5000) discountPercentage = 15;
else if (purchaseTotal >= 2000) discountPercentage = 5;
const discountAmount = Math.round(purchaseTotal * discountPercentage / 100);
const finalPrice = Math.round(purchaseTotal - discountAmount);
console.log(`Original total: ₹${purchaseTotal}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Final price after discount: ₹${finalPrice}`);