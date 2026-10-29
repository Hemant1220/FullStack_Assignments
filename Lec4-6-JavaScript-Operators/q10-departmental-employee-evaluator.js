// Q10. Departmental Employee Evaluator
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("Departmental Employee Evaluator");
console.log("--------------------------------");

// Each nested array stores a department name and its performance score.
for (const department of departments) {
    const departmentName = department[0];
    const score = department[1];
    let rating;

    if (score >= 90) {
        rating = "Excellent";
    } else if (score >= 75) {
        rating = "Good";
    } else if (score >= 60) {
        rating = "Average";
    } else {
        rating = "Needs Improvement";
    }

    console.log(`${departmentName}: ${score} points — ${rating}`);
}
