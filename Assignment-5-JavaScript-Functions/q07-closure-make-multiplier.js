// Q7: Closure - Make Multiplier

function makeMultiplier(multiplier) {
  // The returned function remembers the multiplier from this outer scope.
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// A closure is created when an inner function retains access to variables
// from its outer function's lexical scope, even after the outer call returns.
// Here, each returned function remembers its own multiplier value.
