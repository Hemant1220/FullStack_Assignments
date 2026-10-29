// Q8: Order Processing Flow - Async Retry Mechanism

function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // The order API succeeds or fails with roughly equal probability.
      if (Math.random() < 0.5) {
        resolve("Order submitted successfully.");
      } else {
        reject(new Error("Temporary order submission failure."));
      }
    }, 500);
  });
}

async function processOrder() {
  const maximumAttempts = 3;

  for (let attempt = 1; attempt <= maximumAttempts; attempt += 1) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      console.log(result);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);

      if (attempt === maximumAttempts) {
        throw new Error("Order could not be processed");
      }
    }
  }
}

processOrder().catch((error) => {
  console.error(error.message);
});
