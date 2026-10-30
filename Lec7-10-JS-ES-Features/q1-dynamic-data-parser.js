"use strict";

// Q1. Dynamic Data Parser
const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

console.log("DYNAMIC DATA PARSER");
console.log("===================");

for (let index = 0; index < apiData.length; index++) {
    const originalValue = apiData[index];
    const numericValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);
    const isBlankString = typeof originalValue === "string" && originalValue.trim() === "";
    const isValidNumber = !isBlankString && Number.isFinite(numericValue);

    const reportLine =
        "Item " + (index + 1) +
        " | Original: " + stringValue +
        " | Number: " + (Number.isNaN(numericValue) ? "NaN" : numericValue) +
        " | Boolean: " + booleanValue +
        " | String: " + JSON.stringify(stringValue);

    if (isValidNumber) {
        validNumericData.push({ original: originalValue, number: numericValue, boolean: booleanValue, string: stringValue });
        console.log("[VALID] " + reportLine);
    } else {
        invalidNumericData.push({
            original: originalValue, attemptedNumber: numericValue, boolean: booleanValue,
            string: stringValue,
            reason: isBlankString ? "Blank text is not accepted as numeric input" : "Number conversion is not finite"
        });
        console.log("[INVALID] " + reportLine);
    }
}

console.log("\nVALID NUMERIC DATA");
validNumericData.forEach((item) => console.log("Original = " + String(item.original) + " | Number = " + item.number));
console.log("\nINVALID NUMERIC DATA");
invalidNumericData.forEach((item) => console.log("Original = " + String(item.original) + " | Reason = " + item.reason));
console.log("\nValid count: " + validNumericData.length);
console.log("Invalid count: " + invalidNumericData.length);

// Number(null) is 0 and is accepted; Number(undefined) is NaN.
// Boolean("false") is true because every non-empty string is truthy.
