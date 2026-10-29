// Q2: Task Scheduler - Micro vs Macro Challenge
console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise callback (microtask)
// setTimeout callback (macrotask)
//
// Synchronous code finishes first. Once the current call stack is empty,
// JavaScript drains the microtask queue (including Promise.then callbacks)
// before moving to the macrotask queue, where the setTimeout callback waits.
