"use strict";

// Q10. Nested Hoisting and Closures
console.log("ORIGINAL NESTED FUNCTION");
function outerOriginal() {
    console.log("Outer count before assignment:", count);
    var count = 5;

    function innerOriginal() {
        // This inner var is hoisted in innerOriginal and shadows outer count.
        console.log("Inner count before assignment:", count);
        var count = 10;
        console.log("Inner count after assignment:", count);
    }

    innerOriginal();
    console.log("Outer count after inner call:", count);
}
outerOriginal();

// Expected: outer undefined; inner undefined; inner 10; outer 5.

console.log("\nARROW FUNCTION WITH THE SAME LOCAL var");
function outerWithArrowSameScope() {
    console.log("Outer count before assignment:", count);
    var count = 5;

    const innerArrow = () => {
        // An arrow function also has its own execution context for its var declarations.
        console.log("Arrow inner count before assignment:", count);
        var count = 10;
        console.log("Arrow inner count after assignment:", count);
    };

    innerArrow();
    console.log("Outer count after arrow call:", count);
}
outerWithArrowSameScope();

console.log("\nARROW FUNCTION CLOSURE");
function outerWithClosure() {
    var count = 5;
    // No local count is declared, so the arrow closes over outer count.
    const innerArrow = () => console.log("Arrow reads outer count:", count);
    innerArrow();
}
outerWithClosure();

debugger; // Watch outer and inner count values and inspect the call stack.

// Separate function execution contexts create separate local var bindings.
// The arrow function with local var still shadows the outer variable.
// Removing that local declaration lets the arrow closure read the outer count.
// Call stack: script -> outerOriginal -> innerOriginal -> outerOriginal -> script.
