// Q9: Person -> Student inheritance using ES6 classes

class Person {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(`Name: ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, branch) {
    // super() calls the parent constructor before using 'this'.
    super(name);
    this.branch = branch;
  }

  showBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

const student = new Student("Hemant", "Computer Science");

student.showName();   // Inherited from Person.
student.showBranch(); // Defined in Student.

console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true

// The class version behaves like the constructor/prototype version:
// Student inherits Person's methods, while adding its own branch and method.
