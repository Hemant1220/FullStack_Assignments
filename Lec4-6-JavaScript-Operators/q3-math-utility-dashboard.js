// Q3. Math Utility Dashboard
const x = 16.75;

const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10; // Inclusive: 10–50

// Use a template literal to display the values in one readable report.
const report = `
Math Utility Dashboard
---------------------
Input number: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot.toFixed(2)}
Power (x³): ${cube.toFixed(2)}
Random number (10–50): ${randomNumber}
`;

console.log(report);
