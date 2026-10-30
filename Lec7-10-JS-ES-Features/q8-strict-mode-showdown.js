"use strict";

// Q8. Strict Mode Showdown
// Keep duplicate-parameter strict code out of this top-level file: it is a parse-time error.

console.log("WITHOUT STRICT MODE (SLOPPY FUNCTION)");
try {
    // Function constructor body is sloppy unless it includes "use strict".
    const sloppyDemo = Function(
        "a",
        "a",
        'total = 10; console.log("Second parameter value:", a); ' +
        'const deletionResult = delete total; ' +
        'return { deletionResult: deletionResult, totalAfterDelete: typeof total };'
    );
    const sloppyResult = sloppyDemo(5, 10);
    console.log("Sloppy-mode result:", JSON.stringify(sloppyResult));
    console.log("Sloppy mode allows duplicate parameters and accidental global assignment.");
} catch (error) {
    console.log(error.name + ": " + error.message);
}

console.log("\nWITH STRICT MODE");
try {
    Function('"use strict"; return function demo(a, a) { return a; };');
} catch (error) {
    console.log("Duplicate parameters: " + error.name + " — " + error.message);
}

try {
    const strictAssignment = Function('"use strict"; accidentalTotal = 10;');
    strictAssignment();
} catch (error) {
    console.log("Undeclared assignment: " + error.name + " — " + error.message);
}

try {
    Function('"use strict"; let total = 10; delete total;');
} catch (error) {
    console.log("Delete identifier: " + error.name + " — " + error.message);
}

// Correct ES6 version: unique parameters, declared variables, and no delete of a variable.
function demoCorrect(firstValue, secondValue) {
    const total = firstValue + secondValue;
    console.log("\nCORRECT ES6 VERSION");
    console.log("First value:", firstValue);
    console.log("Second value:", secondValue);
    console.log("Total:", total);
    return total;
}
demoCorrect(5, 10);

// Strict mode at the top of this file also applies to the corrected example.
