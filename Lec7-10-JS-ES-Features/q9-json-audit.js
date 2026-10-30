"use strict";

// Q9. JSON Audit
const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

console.log("JSON AUDIT");
for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    const rawLine = rawData[index];

    try {
        debugger; // Inspect rawLine and lineNumber before parsing.
        const parsedObject = JSON.parse(rawLine);
        const missingKeys = [];

        if (!Object.prototype.hasOwnProperty.call(parsedObject, "user")) missingKeys.push("user");
        if (!Object.prototype.hasOwnProperty.call(parsedObject, "age")) missingKeys.push("age");
        if (missingKeys.length > 0) {
            throw new Error("Missing required key(s): " + missingKeys.join(", "));
        }

        const numericAge = Number(parsedObject.age);
        if (!Number.isFinite(numericAge) || numericAge < 0) {
            throw new Error("Age must be a valid non-negative number.");
        }

        const cleanRecord = { user: String(parsedObject.user), age: numericAge };
        cleanData.push(cleanRecord);
        console.log("[VALID] Line " + lineNumber + ": " + JSON.stringify(cleanRecord));
    } catch (error) {
        const errorRecord = {
            line: lineNumber,
            raw: rawLine,
            message: error instanceof SyntaxError ? "Invalid JSON syntax: " + error.message : error.message
        };
        auditErrors.push(errorRecord);
        console.log("[ERROR] Line " + lineNumber + ": " + errorRecord.message);
    }
}

// Bonus: age is normalized to Number before the minor filter.
const under18Users = cleanData.filter((record) => record.age < 18);

console.log("\nAUDIT SUMMARY");
console.log("Valid records: " + cleanData.length);
console.log("Invalid records: " + auditErrors.length);
console.log("Clean data: " + JSON.stringify(cleanData));
console.log("Users under 18: " + JSON.stringify(under18Users));
console.log("Error details: " + JSON.stringify(auditErrors));

// After JSON.parse throws, control jumps directly to catch; later try statements are skipped.
