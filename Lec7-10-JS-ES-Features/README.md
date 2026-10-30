# Assignment 3 — JavaScript ES Features (Lectures 7–10)

Solutions for the supplied Lec 7–10 JS ES Feature Assignment. Each of the ten questions is in its own JavaScript file. The files use core JavaScript, strict mode wherever applicable, comments, try/catch, and console.log() output. No external libraries are used.

## Questions

1. **Dynamic Data Parser** — Convert mixed API values to Number, Boolean, and String; separate valid numeric conversions from invalid values and print a report.
2. **Employee Bonus Calculator** — Convert salary and years, calculate experience-based bonus, use strict mode, template strings, and try/catch.
3. **Transaction Validator** — Validate transaction entries, throw custom errors, categorize valid/invalid records, and include a debugger breakpoint.
4. **Debugging Mystery** — Reproduce the strict-mode undeclared-variable error, fix it with a local declaration, and explain watch/call-stack debugging.
5. **Hoisting Lab: The Sequence Trap** — Demonstrate var and function hoisting, let Temporal Dead Zone, corrected ordering, and arrow-function initialization differences.
6. **Pyramid Pattern Generator** — Generate a configurable pyramid, compare let and var loops, demonstrate variable scope/closure differences, and use strict mode.
7. **Smart Calculator** — Switch-based arithmetic, custom errors for divide-by-zero and negative roots, and invalid-operation handling.
8. **Strict Mode Showdown** — Compare sloppy and strict behavior for duplicate parameters, undeclared assignment, and deleting an identifier; include a corrected ES6 example.
9. **JSON Audit** — Parse records with try/catch, report missing keys and invalid JSON with line numbers, normalize age, and filter minors.
10. **Nested Hoisting and Closures** — Explain nested var hoisting, separate function scopes, arrow function behavior, closure capture, and call-stack flow.

## How to run

All ten questions use console output and can be run with Node.js:

- node q1-dynamic-data-parser.js
- node q2-employee-bonus-calculator.js
- node q3-transaction-validator.js
- node q4-debugging-mystery-strict-mode.js
- node q5-hoisting-lab-sequence-trap.js
- node q6-pyramid-pattern-generator.js
- node q7-smart-calculator.js
- node q8-strict-mode-showdown.js
- node q9-json-audit.js
- node q10-nested-hoisting-and-closures.js

For Q6, an optional pyramid height can be provided as a command-line argument, for example:
node q6-pyramid-pattern-generator.js 7

Without an argument, the height defaults to 5. In a browser, Q6 asks for the height using prompt() when available.

## Debugging instructions

The scripts include debugger statements in the questions that request debugging. To inspect them:

1. Open the project folder in VS Code.
2. Open a terminal and run a file with Node's inspector, for example node --inspect-brk q3-transaction-validator.js.
3. Open VS Code's Run and Debug panel and attach to the Node.js process, or use the built-in JavaScript debugger.
4. Add useful names to the Watch panel: transaction, index, validTransactions, invalidTransactions, score, status, rowLimit, count, or cleanData depending on the question.
5. Use Step Over, Step Into, and Step Out to follow the call stack.

A debugger statement pauses only when developer tools or a debugger is attached.

## Notes

- Q1 follows JavaScript conversion rules: Number(null) is 0, while Number(undefined) is NaN. A blank/whitespace-only string is explicitly rejected as numeric input even though Number of that string would produce 0. Non-empty strings such as "true" and "false" fail numeric conversion. Boolean("false") is true because it is a non-empty string.
- Q3 categorizes null entries, missing fields, negative amounts, and malformed amount values separately.
- Q5 shows that var declarations and function declarations are hoisted differently from let and const bindings.
- Q8 uses the Function constructor to demonstrate sloppy/strict code separately because a duplicate-parameter function in strict code causes a parse-time SyntaxError and would prevent a normal strict script from running.
- Q10 demonstrates both an arrow function with its own local var (which still shadows the outer binding) and an arrow closure that reads the outer binding when the local declaration is removed.
