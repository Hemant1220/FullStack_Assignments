// Q3: Monthly Expense Tracker
const expenses = [
 { category: "Food", amount: 5000 }, { category: "Travel", amount: 1800 },
 { category: "Rent", amount: 9000 }, { category: "Bills", amount: 1500 },
 { category: "Leisure", amount: 1200 }
];
let subtotal = 0;
for (const expense of expenses) subtotal += expense.amount;
const average = subtotal / expenses.length;
const tax = subtotal * 0.10;
let finalAmount = subtotal;
finalAmount += tax;
console.table(expenses);
console.log(`Total before tax: ₹${subtotal.toFixed(2)}`);
console.log(`Average expense: ₹${average.toFixed(2)}`);
console.log(`Tax (10%): ₹${tax.toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);