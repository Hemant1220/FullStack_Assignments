# Assignment 4 — JavaScript Classes, Forms & RegExp

Solutions for the supplied Assignment 4. Each of the nine questions is in its own JavaScript file. The solutions use core JavaScript (ES6+) and do not use frameworks.

## Questions

1. **E-Commerce Product Manager** — Product class, discount method, formatted details, product array, and filter for prices above 1000.
2. **Student Form Validator** — Browser form with RegExp validation for name, email, 10-digit phone, and password; invalid fields get red borders and valid fields green borders.
3. **Library Management System** — Book class, issueBook(), returnBook(), available-book filter, and ISBN-based issue function.
4. **Custom Form Builder** — FormBuilder class builds fields dynamically from an array and returns submitted values as an object.
5. **Movie Ticket Booking** — Name, email, and seat validation; successful booking is stored in an object and displayed as a ticket.
6. **Employee Management System** — Employee class, annual salary, bonus method, five employees, and reduce() for total annual payout.
7. **Login Form Validation** — RegExp checks for username length and password length, number, uppercase, lowercase, and special character.
8. **Dynamic Object Updater** — Form edits the supplied user object and renders the updated object in the DOM.
9. **Shopping Cart Total** — Cart class, item quantities, getTotal(), coupon RegExp, percentage discount, and final total.

## How to run

### Console / Node.js questions

Questions 1, 3, 6, and 9 use core JavaScript classes and can be run with Node.js:

\`\`\`bash
node q1-ecommerce-product-manager.js
node q3-library-management-system.js
node q6-employee-management-system.js
node q9-shopping-cart-total-coupon.js
\`\`\`

### Browser questions

Questions 2, 4, 5, 7, and 8 create forms and use the DOM. Run them in a browser:

1. Open a blank HTML page, or create an index.html file.
2. Open Developer Tools (usually F12) and select Console.
3. Copy one browser-based .js file into the console and press Enter, or reference it from an HTML script element.
4. Run one question at a time. Reload the page before testing another script.

## Implementation notes

- In Q1, the discount method updates the product's current price. The price filter runs after the sample discounts are applied.
- In Q3, issueBookByISBN(isbn) is the function to call with a user's ISBN. The sample calls it once to demonstrate issuing.
- In Q6, salary is treated as monthly salary; applyBonus() updates monthly salary before annual salary and company payout are calculated.
- In Q9, the percentage digits in SAVE20 or DISC10 determine the discount. The code rejects malformed coupons and percentages outside 1–100.
- DOM-based questions cannot run unchanged in a plain Node.js environment because Node.js does not provide document or browser form elements.
