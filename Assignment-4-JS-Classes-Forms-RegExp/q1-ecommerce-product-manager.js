// Q1. E-Commerce Product Manager (Classes + Objects)
// Run with Node.js or paste into a browser console.

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply a percentage discount to the product's current price.
    applyDiscount(percent = 10) {
        if (percent < 0 || percent > 100) {
            throw new RangeError("Discount must be between 0 and 100 percent.");
        }

        this.price = this.price - (this.price * percent / 100);
        return this.price;
    }

    // Return product details in a readable format.
    displayDetails() {
        return "ID: " + this.id +
            " | Name: " + this.name +
            " | Category: " + this.category +
            " | Price: Rs. " + this.price.toFixed(2);
    }
}

// Create multiple products and store them in an array.
const products = [
    new Product(101, "Wireless Headphones", 2499, "Electronics"),
    new Product(102, "Notebook", 250, "Stationery"),
    new Product(103, "Smart Watch", 3999, "Electronics"),
    new Product(104, "Backpack", 1499, "Accessories"),
    new Product(105, "Pen Set", 450, "Stationery")
];

// Apply a 10% discount to selected products.
products[0].applyDiscount(10);
products[2].applyDiscount(10);

console.log("ALL PRODUCTS");
console.log("------------");
products.forEach((product) => console.log(product.displayDetails()));

// Use filter() to display only products whose current price is above 1000.
const expensiveProducts = products.filter((product) => product.price > 1000);

console.log("\nPRODUCTS WITH PRICE ABOVE Rs. 1000");
console.log("---------------------------------");
expensiveProducts.forEach((product) => console.log(product.displayDetails()));
