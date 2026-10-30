"use strict";

// Q6. Pyramid Pattern Generator
// Height: Node.js argument, browser prompt, or default 5.
function getRequestedRows() {
    let requestedRows = 5;
    if (typeof process !== "undefined" && process.argv && process.argv[2] !== undefined) {
        requestedRows = Number(process.argv[2]);
    } else if (typeof prompt === "function") {
        const userInput = prompt("Enter pyramid height (default 5):");
        if (userInput !== null && userInput.trim() !== "") requestedRows = Number(userInput);
    }
    if (!Number.isInteger(requestedRows) || requestedRows < 1 || requestedRows > 50) {
        console.log("Invalid row limit. Using default value 5.");
        return 5;
    }
    return requestedRows;
}

const rowLimit = getRequestedRows();

console.log("PYRAMID PATTERN (let)");
for (let row = 1; row <= rowLimit; row++) {
    let patternLine = "";
    for (let column = 1; column <= row; column++) patternLine += "* ";
    console.log(patternLine.trimEnd());
}

console.log("\nPYRAMID PATTERN (var)");
for (var varRow = 1; varRow <= rowLimit; varRow++) {
    var varPatternLine = "";
    for (var varColumn = 1; varColumn <= varRow; varColumn++) varPatternLine += "* ";
    console.log(varPatternLine.trimEnd());
}

console.log("\nSCOPE / RE-USE OBSERVATION");
console.log("After the var loop, varRow is available and equals:", varRow);
console.log("varColumn is also available after its loop and equals:", varColumn);

// The immediately printed pyramid is identical for let and var.
// The difference is visible when callbacks capture the loop variable.
const varCallbacks = [];
for (var varIndex = 1; varIndex <= 3; varIndex++) varCallbacks.push(() => varIndex);

const letCallbacks = [];
for (let letIndex = 1; letIndex <= 3; letIndex++) letCallbacks.push(() => letIndex);

console.log("Closures created with var:", varCallbacks.map((callback) => callback()));
console.log("Closures created with let:", letCallbacks.map((callback) => callback()));

debugger; // Inspect rowLimit, varRow, varColumn, varIndex, and callback arrays.

// var reuses a function-scoped binding; let creates a per-iteration binding.
// Strict mode also makes undeclared loop variables throw ReferenceError.
