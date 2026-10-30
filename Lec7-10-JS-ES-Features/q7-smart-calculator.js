"use strict";

// Q7. Smart Calculator
const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class DivisionByZeroError extends Error {
    constructor(message) { super(message); this.name = "DivisionByZeroError"; }
}
class NegativeRootError extends Error {
    constructor(message) { super(message); this.name = "NegativeRootError"; }
}
class InvalidOperationError extends Error {
    constructor(message) { super(message); this.name = "InvalidOperationError"; }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add": return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) throw new DivisionByZeroError("Cannot divide by zero.");
            return firstNumber / secondNumber;
        case "power": return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) throw new NegativeRootError("Cannot calculate the real square root of a negative number.");
            return Math.sqrt(firstNumber);
        case "subtract": return firstNumber - secondNumber;
        default: throw new InvalidOperationError('Operation "' + operation + '" is not recognized.');
    }
}

const results = [];
console.log("SMART CALCULATOR");
operations.forEach((operation) => {
    try {
        const result = calculate(operation, num1, num2);
        results.push({ operation: operation, status: "success", result: result });
        console.log(operation + ": " + num1 + ", " + num2 + " => " + result);
    } catch (error) {
        results.push({ operation: operation, status: "error", error: error.name });
        console.log(operation + " | " + error.name + ": " + error.message);
    }
});

// Additional tests demonstrate the custom negative-root and unknown-operation errors.
[
    { operation: "root", first: -9, second: 0 },
    { operation: "multiply", first: 4, second: 5 }
].forEach((test) => {
    try {
        console.log("Extra test result:", calculate(test.operation, test.first, test.second));
    } catch (error) {
        console.log("Extra test | " + error.name + ": " + error.message);
    }
});

console.log("\nFORMATTED SUMMARY");
results.forEach((item) => {
    console.log(item.operation.toUpperCase() + (item.status === "success"
        ? " = " + item.result
        : " FAILED (" + item.error + ")"));
});
