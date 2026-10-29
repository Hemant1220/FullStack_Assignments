# JavaScript Operators and Core Concepts — Assignment 2

Solutions for the **Lec 4–6 JavaScript Operator Assignment**. Each question is implemented in its own `.js` file, with comments and readable console output. No external libraries or frameworks are used.

## Questions

1. **Scope Conflict Resolver** — global and local variables, function parameters, and salary calculation.
2. **String Manipulation Report** — trim, lowercase, split, map, join, replace, and string length.
3. **Math Utility Dashboard** — round, square root, power, random number generation, and template literals.
4. **Array Performance Analyzer** — random scores, map, filter, reduce, average, minimum, and maximum.
5. **Boolean Logic Access System** — `&&`, `||`, and `!` with multiple security test cases.
6. **Event-Based Counter Simulation** — increment/decrement functions and nested function scope.
7. **Customer Feedback Processor** — includes, split, word counts, and conditional feedback labels.
8. **Dynamic Discount Evaluator** — category discounts, loops, conditionals, and reduce.
9. **Odd–Even Number Analyzer** — loop, modulo, push, and FizzBuzz/even/odd classification.
10. **Departmental Employee Evaluator** — nested arrays, loops, comparisons, and nested if-else logic.

## How to run

Install [Node.js](https://nodejs.org/) or use a browser's developer console. From this folder, run one file at a time in a terminal:

```bash
node q1-scope-conflict-resolver.js
node q2-string-manipulation-report.js
node q3-math-utility-dashboard.js
node q4-array-performance-analyzer.js
node q5-boolean-logic-access-system.js
node q6-event-based-counter-simulation.js
node q7-customer-feedback-processor.js
node q8-dynamic-discount-evaluator.js
node q9-odd-even-number-analyzer.js
node q10-departmental-employee-evaluator.js
```

Questions that use random numbers generate different values each time.

## Notes

- Q1 demonstrates that the global `bonus` remains unchanged when the local `isPermanent` argument changes.
- Q8 uses the original cart total to decide whether the extra 5% discount applies. The supplied cart totals ₹48,100, so the extra discount does not apply to the provided data.
- Q9 follows the requested condition order: FizzBuzz for multiples of both 3 and 5; otherwise classify as Even when divisible by 2; otherwise Odd.
