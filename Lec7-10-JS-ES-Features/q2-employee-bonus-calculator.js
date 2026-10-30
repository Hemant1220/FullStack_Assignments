"use strict";

// Q2. Employee Bonus Calculator
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("EMPLOYEE BONUS CALCULATOR");
console.log("=========================");

for (const employee of employees) {
    try {
        if (!employee || !Object.prototype.hasOwnProperty.call(employee, "salary") ||
            !Object.prototype.hasOwnProperty.call(employee, "years") ||
            !Object.prototype.hasOwnProperty.call(employee, "name")) {
            throw new TypeError("Employee record is missing name, salary, or years.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);
        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary and years must convert to finite numbers.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalSalary = salary + bonus;

        console.log(`Employee: ${employee.name} | Salary: Rs. ${salary.toFixed(2)} | Experience: ${years} years | Bonus: ${(bonusRate * 100).toFixed(0)}% (Rs. ${bonus.toFixed(2)}) | Total: Rs. ${totalSalary.toFixed(2)}`);
    } catch (error) {
        console.log("Employee record error: " + error.message);
    }
}

// Strict mode prevents accidental assignment to an undeclared variable.
// For example, accidentalTotal = 100; would throw ReferenceError.
