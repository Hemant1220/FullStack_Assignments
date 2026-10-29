// Q1: The Startup Morning - Async Coffee Maker
// Each stage returns a Promise, takes 1–2 seconds, and can fail randomly.

function delay(min = 1000, max = 2000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Water could not be boiled."));
      console.log("Step 1: Water boiled.");
      resolve();
    }, delay());
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Coffee brewing failed."));
      console.log("Step 2: Coffee brewed.");
      resolve();
    }, delay());
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.15) return reject(new Error("Could not pour the coffee."));
      console.log("Step 3: Coffee poured into a cup.");
      resolve();
    }, delay());
  });
}

boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));
