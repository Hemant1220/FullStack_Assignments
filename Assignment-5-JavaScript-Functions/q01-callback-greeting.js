// Q1: Callback Greeting
// greetUser prints a greeting, then invokes the callback supplied by the caller.

function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

// Demonstrate the callback flow.
greetUser("Hemant", showEndMessage);
