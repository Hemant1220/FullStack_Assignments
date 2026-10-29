// Q3: Bug Tracker - Callback to Promise Migration

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const apiFailed = Math.random() < 0.3; // Simulate a random API failure.

      if (apiFailed) {
        reject(new Error("Bug-tracker API request failed."));
      } else {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      }
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.log("Bugs retrieved successfully:");
    console.table(bugs.map((bug, index) => ({ number: index + 1, bug })));
  })
  .catch((error) => {
    console.error("Unable to fetch bugs:", error.message);
  });
