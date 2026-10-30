"use strict";

// Q5. Hoisting Lab: The Sequence Trap
console.log("ORIGINAL HOISTING EXAMPLE");
console.log("-------------------------");

// var declaration is hoisted, but its assignment is not: score is undefined here.
console.log("score before assignment:", score);

// Function declarations are hoisted with their function body.
announce();
var score = 50;
function announce() {
    console.log("Game started");
}

// let is in the Temporal Dead Zone until initialized.
// This call is safe because it occurs after status is initialized.
let status = "ready";
startGame();

function startGame() {
    console.log("Game status:", status);
}

console.log("\nCORRECTED VERSION");
const correctedScore = 50;
const correctedStatus = "ready";
function announceCorrected() {
    console.log("Game started");
}
function startGameCorrected() {
    console.log("Game status:", correctedStatus);
}
console.log("Score:", correctedScore);
announceCorrected();
startGameCorrected();

console.log("\nARROW FUNCTION VERSION");
// Arrow functions are expressions stored in variables, not hoisted like declarations.
// Initialize them before calling them.
const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log("Game status:", correctedStatus);
announceArrow();
startGameArrow();

debugger; // Inspect score, status, and function variables.

// var and function declarations are hoisted differently from let/const.
// let/const bindings cannot be accessed before initialization.
// const-bound arrow functions cannot be called before their initialization.
