// Q4: Constructor Function and Prototype Method

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

// Define the method once on Car.prototype so all Car objects share it.
Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const carOne = new Car("Toyota", "Fortuner");
const carTwo = new Car("Tata", "Nexon");

carOne.getDetails();
carTwo.getDetails();

// Both objects use the same function stored on Car.prototype.
console.log(
  "Shared prototype method:",
  carOne.getDetails === carTwo.getDetails
); // true
