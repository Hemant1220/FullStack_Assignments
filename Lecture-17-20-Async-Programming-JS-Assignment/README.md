# Assignment 6 — Async Programming with JavaScript (Lectures 17–20)

This folder contains separate JavaScript solutions for all 10 questions in the assignment.

## Files

1. `q01-async-coffee-maker.js` — Promise chaining, delays, and random failures.
2. `q02-event-loop-microtasks-macrotasks.js` — synchronous logs, microtasks, and macrotasks.
3. `q03-bug-tracker-promise.js` — callback-to-Promise migration and `console.table()`.
4. `q04-server-response-race.js` — `Promise.all()`, `Promise.race()`, and error handling.
5. `q05-callback-hell-vs-async-await.js` — nested callbacks compared with async/await.
6. `q06-fake-store-product-fetcher.js` — fetch product data from Fake Store API, with optional browser cards.
7. `q07-promise-all-settled-dashboard.js` — `Promise.allSettled()`, random rejection, and elapsed time.
8. `q08-order-retry-mechanism.js` — retry an order submission up to three times.
9. `q09-debugging-event-loop.js` — predicted and actual event-loop order.
10. `q10-async-delivery-pipeline.js` — sequential async delivery pipeline and error handling.

## How to run

- Install Node.js if it is not already installed.
- Open a terminal in this folder and run a file, for example:
  ```bash
  node q01-async-coffee-maker.js
  ```
- Run each file separately. Random failures are intentional, so output can vary between runs.
- For Q6, use a browser console or a recent Node.js version with built-in `fetch`. In a browser, the script also creates product cards inside `#product-container` (or creates that container if missing).

Only core JavaScript (ES6+) is used; no frameworks or libraries are required.
