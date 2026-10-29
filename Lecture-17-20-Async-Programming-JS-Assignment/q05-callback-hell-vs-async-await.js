// Q5: Frontend Rush - Avoiding Callback Hell

// A helper that completes a stage after one second.
function runStage(stageName, callback) {
  setTimeout(() => {
    console.log(stageName);
    callback();
  }, 1000);
}

// Version 1: Nested callbacks (callback hell).
function runWithNestedCallbacks() {
  console.log("Starting callback-based pipeline...");
  runStage("design", () => {
    runStage("build", () => {
      runStage("test", () => {
        runStage("deploy", () => {
          runStage("celebrate", () => {
            console.log("Callback pipeline complete.");
          });
        });
      });
    });
  });
}

// Promise-based stage used by the async/await version.
function runStageAsync(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stageName);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  console.log("Starting async/await pipeline...");
  await runStageAsync("design");
  await runStageAsync("build");
  await runStageAsync("test");
  await runStageAsync("deploy");
  await runStageAsync("celebrate");
  console.log("Async/await pipeline complete.");
}

// Run one version at a time to make the output easier to compare.
// Uncomment the version you want to test:
runWithNestedCallbacks();
// runWithAsyncAwait();

// async/await improves readability because the sequential steps look like
// ordinary top-to-bottom code, while Promises still handle asynchronous work.
