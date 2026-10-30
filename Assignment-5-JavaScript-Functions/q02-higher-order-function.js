// Q2: applyOperation - A function that accepts another function.

function applyOperation(numbers, operation) {
  // Array.map applies the callback to each element and returns a new array.
  return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, (number) => number * 2);
const squaredNumbers = applyOperation(numbers, (number) => number ** 2);

console.log("Original array:", numbers);
console.log("Doubled array:", doubledNumbers);
console.log("Squared array:", squaredNumbers);
