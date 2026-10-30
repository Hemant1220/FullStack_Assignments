// Q6. Employee Management System (Classes + Object Methods)
// Salary is treated as a monthly salary. The annual salary is monthly salary × 12.

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply a percentage bonus to the monthly salary.
    applyBonus(percent) {
        if (percent < 0) {
            throw new RangeError("Bonus percentage cannot be negative.");
        }

        this.salary += this.salary * percent / 100;
        return this.salary;
    }

    displayDetails() {
        return this.id + " | " + this.name + " | " + this.department +
            " | Monthly salary: Rs. " + this.salary.toFixed(2) +
            " | Annual salary: Rs. " + this.getAnnualSalary().toFixed(2);
    }
}

// Create five employee objects.
const employees = [
    new Employee(1, "Aarav", "IT", 45000),
    new Employee(2, "Priya", "HR", 38000),
    new Employee(3, "Rohan", "Finance", 42000),
    new Employee(4, "Sneha", "Marketing", 40000),
    new Employee(5, "Kabir", "Operations", 36000)
];

// Apply a 10% bonus to each employee before calculating annual payout.
employees.forEach((employee) => employee.applyBonus(10));

console.log("EMPLOYEE DETAILS AFTER 10% BONUS");
console.log("--------------------------------");
employees.forEach((employee) => console.log(employee.displayDetails()));

// reduce() calculates the company's total annual salary payout.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("\nTotal annual company payout: Rs. " + totalAnnualPayout.toFixed(2));
