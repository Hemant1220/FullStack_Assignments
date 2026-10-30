// Q3: Arrow Function vs Normal Function - Understanding 'this'

const user = {
  name: "Hemant",

  // Arrow functions do not create their own 'this'.
  // They capture 'this' from the surrounding lexical scope.
  showName: () => {
    console.log("Arrow function this.name:", this.name);
  }
};

user.showName();
// In a Node.js CommonJS file, top-level 'this' refers to module.exports,
// which has no name property, so this.name is undefined.
// In a browser script, top-level 'this' is usually window; it is also
// undefined unless window.name has been assigned.

// Fix: use a normal method function, which receives 'this' from the call site.
user.showName = function () {
  console.log("Normal function this.name:", this.name);
};

user.showName(); // 'this' refers to user, so it prints "Hemant".
