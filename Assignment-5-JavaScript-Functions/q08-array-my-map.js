// Q8: Implement a custom Array.prototype.myMap()

// Add a non-enumerable method so it does not appear in normal for...in loops.
Object.defineProperty(Array.prototype, "myMap", {
  value: function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("myMap called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError("Callback must be a function");
    }

    const source = Object(this);
    const length = source.length >>> 0;
    const result = new Array(length);

    for (let index = 0; index < length; index += 1) {
      // Match map() behavior by skipping empty slots in sparse arrays.
      if (index in source) {
        result[index] = callback.call(thisArg, source[index], index, source);
      }
    }

    return result;
  },
  writable: true,
  configurable: true,
  enumerable: false
});

const numbers = [1, 2, 3];
const doubled = numbers.myMap((number) => number * 2);

console.log(doubled); // [2, 4, 6]

// Additional check: callback receives value, index, and original array.
const descriptions = numbers.myMap((number, index) => `${index}: ${number}`);
console.log(descriptions); // ["0: 1", "1: 2", "2: 3"]
