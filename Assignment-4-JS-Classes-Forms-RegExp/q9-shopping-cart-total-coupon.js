// Q9. Shopping Cart Total (Classes + RegExp for Coupon)
// Coupon examples: SAVE20 applies 20%; DISC10 applies 10%.
// Run with Node.js or paste into a browser console.

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name || price < 0 || quantity <= 0 || !Number.isInteger(quantity)) {
            throw new Error("Provide a name, non-negative price, and positive whole-number quantity.");
        }

        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(couponCode) {
        // Accept SAVE followed by a percentage or DISC followed by a percentage.
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/i;
        const match = String(couponCode).trim().match(couponPattern);

        if (!match) {
            return { valid: false, message: "Invalid coupon. Use a code such as SAVE20 or DISC10." };
        }

        const discountPercent = Number(match[2]);
        if (discountPercent <= 0 || discountPercent > 100) {
            return { valid: false, message: "Coupon discount must be between 1% and 100%." };
        }

        const subtotal = this.getTotal();
        const discountAmount = subtotal * discountPercent / 100;
        return {
            valid: true,
            code: String(couponCode).trim().toUpperCase(),
            discountPercent: discountPercent,
            subtotal: subtotal,
            discountAmount: discountAmount,
            finalTotal: subtotal - discountAmount
        };
    }

    displayCart() {
        console.log("SHOPPING CART");
        console.log("-------------");
        this.items.forEach((item) => {
            console.log(item.name + " | Rs. " + item.price.toFixed(2) +
                " × " + item.quantity + " = Rs. " +
                (item.price * item.quantity).toFixed(2));
        });
        console.log("Cart total: Rs. " + this.getTotal().toFixed(2));
    }
}

const cart = new Cart();
cart.addItem("T-Shirt", 799, 2);
cart.addItem("Jeans", 1599, 1);
cart.addItem("Shoes", 2499, 1);

cart.displayCart();

// Try changing the coupon to SAVE20, DISC10, or an invalid value.
const couponResult = cart.applyCoupon("SAVE20");

console.log("\nCOUPON RESULT");
console.log("-------------");
if (couponResult.valid) {
    console.log("Coupon: " + couponResult.code);
    console.log("Discount: " + couponResult.discountPercent + "%");
    console.log("Subtotal: Rs. " + couponResult.subtotal.toFixed(2));
    console.log("Discount amount: Rs. " + couponResult.discountAmount.toFixed(2));
    console.log("Final total: Rs. " + couponResult.finalTotal.toFixed(2));
} else {
    console.log(couponResult.message);
}
