// Q4: Academic Performance Evaluator
const marks = [88, 79, 91, 84, 90]; // Five subjects, each out of 100.
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = totalMarks / (marks.length * 100) * 100;
const failedSubject = marks.some(mark => mark < 35);
let result;
if (failedSubject) result = "Detained";
else if (percentage >= 85) result = "Promoted with Distinction";
else if (percentage >= 50 && percentage < 85) result = "Promoted";
else result = "Detained";
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);