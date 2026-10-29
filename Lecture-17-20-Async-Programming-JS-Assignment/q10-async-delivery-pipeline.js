// Q10: The Final Delivery - Async Pipeline Debugger

function runDeliveryStep(stepName, successMessage) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1000; // 1–2 seconds.

    setTimeout(() => {
      // Each stage has a chance to fail; a rejection stops the sequential flow.
      if (Math.random() < 0.15) {
        reject(new Error(`${stepName} failed`));
      } else {
        console.log(successMessage);
        resolve();
      }
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // await pauses this async function until each Promise settles.
    // Because steps are sequential, the next stage starts only after success.
    await runDeliveryStep("takeOrder", "Step 1: Order taken");
    await runDeliveryStep("prepare", "Step 2: Food prepared");
    await runDeliveryStep("pack", "Step 3: Package ready");
    await runDeliveryStep("dispatch", "Step 4: Out for delivery");
    await runDeliveryStep("deliver", "Delivery completed!");
  } catch (error) {
    console.error("Pipeline failed!", error.message);
  }
}

// The event loop can run other work while each timer is waiting. The await
// continuation resumes through Promise microtask processing after settlement.
runPipeline();
