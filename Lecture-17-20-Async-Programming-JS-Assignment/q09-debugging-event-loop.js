// Q9: Debugging the Event Loop
// Predicted output order:
// 1. Script start
// 2. Script end
// 3. Promise callback
// 4. Timeout callback

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Explanation:
// The two console.log calls in the main script are synchronous, so they run
// first. Promise.then queues a microtask. setTimeout queues a macrotask.
// After the current call stack empties, JavaScript processes queued microtasks
// before the next macrotask, so the Promise callback appears before the timeout.
