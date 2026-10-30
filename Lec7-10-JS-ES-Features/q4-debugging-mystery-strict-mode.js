"use strict";

// Q4. Debugging Mystery
// The original assignment greeting = "Welcome" fails because greeting is undeclared.
function showMessageWithBug() {
    debugger; // Watch the local scope and call stack here.
    greeting = "Welcome"; // ReferenceError in strict mode.
    console.log(greeting);
}

console.log("RUNNING THE ORIGINAL VERSION");
try {
    showMessageWithBug();
} catch (error) {
    console.log(error.name + ": " + error.message);
    console.log("Reason: strict mode does not create a global variable from an undeclared assignment.");
}

// Correct version: greeting is declared in the function's local scope.
function showMessageFixed() {
    const greeting = "Welcome";
    debugger; // Watch greeting here; it is local to showMessageFixed().
    console.log("Corrected message: " + greeting);
}

console.log("\nRUNNING THE CORRECTED VERSION");
showMessageFixed();

// Debugging steps:
// 1. Set a breakpoint inside showMessageFixed() or use debugger above.
// 2. Add greeting to the Watch panel.
// 3. The Call Stack shows showMessageFixed() above the script's calling context.
// 4. Step Over the log statement, then Step Out to return to the caller.
