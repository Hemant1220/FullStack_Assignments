// Q4. Array Performance Analyzer
// Generate 8 integer scores in the inclusive range 30–100.
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// map() creates a readable student-by-student report.
const studentReport = scores.map((score, index) => `Student ${index + 1}: ${score}`);

// filter() finds all students who passed (score >= 50).
const passedScores = scores.filter((score) => score >= 50);

// reduce() calculates the total used to find the average.
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

console.log("Array Performance Analyzer");
console.log("--------------------------");
console.log(studentReport.join("\n"));
console.log(`Scores: [${scores.join(", ")}]`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed (score >= 50): ${passedScores.length} of ${scores.length}`);
