// Q8: Employee Salary Projection
const currentSalary = 50000;
const annualIncrementRate = 8;
let salary = currentSalary;
const projection = [];
for (let year = 1; year <= 5; year++) {
    salary *= 1 + annualIncrementRate / 100;
    salary = Math.round(salary);
    projection.push({ Year: year, Salary: salary });
}
console.table(projection);