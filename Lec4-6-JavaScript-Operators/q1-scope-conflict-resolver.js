// Q1. Scope Conflict Resolver
// bonus is global; salary and the isPermanent parameter are local to the function.
let bonus = 5000;

function calculateSalary(isPermanent) {
    const salary = 40000;
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Base salary: ₹${salary}`);
    console.log(`Bonus: ₹${isPermanent ? bonus : 0}`);
    console.log(`Total salary: ₹${totalSalary}`);
    console.log("------------------------------");
    return totalSalary;
}

// Demonstrate both outcomes by changing the local function argument.
console.log(`Global bonus before calculation: ₹${bonus}`);
calculateSalary(true);
calculateSalary(false);

// Changing the local argument does not modify the global bonus.
console.log(`Global bonus after calculation: ₹${bonus}`);
