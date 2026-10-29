// Q9. Odd–Even Number Analyzer
const numbers = [];
const results = [];

// Use a loop to store every integer from 1 through 30.
for (let number = 1; number <= 30; number++) {
    numbers.push(number);
}

// Classify each number using the condition order in the assignment.
for (const number of numbers) {
    let classification;

    if (number % 3 === 0 && number % 5 === 0) {
        classification = "FizzBuzz";
    } else if (number % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    results.push(`${number}: ${classification}`);
}

console.log("Odd–Even Number Analyzer");
console.log(results.join("\n"));
