// Q4: DevOps Delay - Async Timeout Race

function contactServer(serverName, responseDelay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // A random failure simulates an unreliable deployment server.
      if (Math.random() < 0.2) {
        reject(new Error(`${serverName} failed to respond.`));
      } else {
        resolve(`${serverName} responded in ${responseDelay / 1000} seconds`);
      }
    }, responseDelay);
  });
}

// Create separate promises for each demonstration so Promise.race and
// Promise.all do not accidentally share a promise that has already settled.
async function checkAllServers() {
  try {
    const results = await Promise.all([
      contactServer("Server A", 2000),
      contactServer("Server B", 3000)
    ]);
    console.log("Deployment completed for all servers");
    console.log(results);
  } catch (error) {
    console.error("Deployment failed:", error.message);
  }
}

async function findFastestServer() {
  try {
    const fastest = await Promise.race([
      contactServer("Server A", 2000),
      contactServer("Server B", 3000)
    ]);
    console.log("Fastest response:", fastest);
  } catch (error) {
    console.error("Race failed:", error.message);
  }
}

checkAllServers();
findFastestServer();
