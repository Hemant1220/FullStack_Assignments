// Q7: The Lazy Loader - Promise.allSettled() Practice

function loadModule(moduleName, duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly reject a module to demonstrate allSettled().
      if (Math.random() < 0.3) {
        reject(new Error(`${moduleName} failed to load`));
      } else {
        resolve(`${moduleName} Loaded`);
      }
    }, duration);
  });
}

function loadProfile() {
  return loadModule("Profile", 2000);
}

function loadPosts() {
  return loadModule("Posts", 1500);
}

function loadMessages() {
  return loadModule("Messages", 1000);
}

async function loadDashboardModules() {
  const startTime = Date.now();

  // allSettled waits until every Promise has either fulfilled or rejected.
  const results = await Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
  ]);

  const elapsedMilliseconds = Date.now() - startTime;
  results.forEach((result, index) => {
    const moduleNames = ["Profile", "Posts", "Messages"];

    if (result.status === "fulfilled") {
      console.log(`${moduleNames[index]} succeeded: ${result.value}`);
    } else {
      console.error(`${moduleNames[index]} failed: ${result.reason.message}`);
    }
  });

  console.log(`Total time taken: ${elapsedMilliseconds} ms`);
}

loadDashboardModules().catch((error) => {
  // Defensive catch for unexpected errors outside individual module failures.
  console.error("Dashboard loading encountered an unexpected error:", error);
});
