"use strict";

// Q3. Transaction Validator
const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class TransactionValidationError extends Error {
    constructor(message, category) {
        super(message);
        this.name = "TransactionValidationError";
        this.category = category;
    }
}

const validTransactions = [];
const invalidTransactions = [];

console.log("TRANSACTION VALIDATION");
console.log("======================");

transactions.forEach((transaction, index) => {
    try {
        // Place a breakpoint here to inspect transaction and index.
        debugger;

        if (transaction === null || transaction === undefined) {
            throw new TransactionValidationError("Transaction entry is null or undefined.", "null-entry");
        }
        if (transaction.id === undefined || transaction.id === null ||
            transaction.amount === undefined || transaction.amount === null) {
            throw new TransactionValidationError("Transaction is missing an id or amount.", "missing-data");
        }
        if (typeof transaction.amount !== "number" || !Number.isFinite(transaction.amount)) {
            throw new TransactionValidationError("Transaction amount must be a finite number.", "invalid-amount");
        }
        if (transaction.amount < 0) {
            throw new TransactionValidationError("Transaction amount cannot be negative.", "negative-amount");
        }

        validTransactions.push(transaction);
        console.log("[VALID] Transaction ID " + transaction.id + " | Amount: Rs. " + transaction.amount);
    } catch (error) {
        const invalidRecord = {
            line: index + 1,
            transaction: transaction,
            category: error.category || "unexpected-error",
            message: error.message
        };
        invalidTransactions.push(invalidRecord);
        console.log("[INVALID] Entry " + (index + 1) + " | " + invalidRecord.category + " | " + error.message);
    }
});

console.log("\nFINAL REPORT");
console.log("Successful transactions: " + validTransactions.length);
console.log("Failed transactions: " + invalidTransactions.length);
console.log("Valid entries: " + JSON.stringify(validTransactions));
console.log("Invalid entries: " + JSON.stringify(invalidTransactions));

// Debug tip: inspect transaction, index, validTransactions and invalidTransactions
// in the Variables/Watch panels while execution pauses at debugger.
