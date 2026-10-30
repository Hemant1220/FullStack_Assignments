// Q5: Person -> Student using constructor functions and prototypes

function Person(name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  // Call the parent constructor to initialize the inherited name property.
  Person.call(this, name);
  this.branch = branch;
}

// Link Student.prototype to Person.prototype to establish inheritance.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Hemant", "Computer Science");

student.showName();   // Inherited from Person.prototype.
student.showBranch(); // Defined on Student.prototype.

// Demonstrate the prototype chain.
console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
