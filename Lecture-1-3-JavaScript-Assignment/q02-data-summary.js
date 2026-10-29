// Q2: Multi-Type Data Summary
const userName = "Hemant";
const age = 20;
const isStudent = true;
const subjects = ["HTML", "CSS", "JavaScript"];
const user = { name: "Hemant", city: "Mathura" };
const middleName = null;
let address;

console.table([
 { label: "Name", value: userName, type: typeof userName },
 { label: "Age", value: age, type: typeof age },
 { label: "Is Student", value: isStudent, type: typeof isStudent },
 { label: "Subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
 { label: "User Object", value: JSON.stringify(user), type: typeof user },
 { label: "Middle Name", value: middleName, type: middleName === null ? "null" : typeof middleName },
 { label: "Address", value: address, type: typeof address }
]);