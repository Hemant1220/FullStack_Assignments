// Q6. Event-Based Counter Simulation
let count = 0;

// Each nested logCount() function can read count from its outer scope.
function increment() {
    count += 1;
    function logCount() {
        console.log(`After increment click, count = ${count}`);
    }
    logCount();
}

function decrement() {
    count -= 1;
    function logCount() {
        console.log(`After decrement click, count = ${count}`);
    }
    logCount();
}

// Simulate clicks by calling the functions manually.
console.log(`Initial count = ${count}`);
increment();
increment();
decrement();
increment();
decrement();
