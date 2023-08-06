// Named Functions:
function sum(a, b) {
  return a + b;
}

console.log(sum("sum ", 1, 3));

// Anonymous Functions:
const multiply = function (a, b) {
  return a * b;
};
const result = multiply(5, 3);
console.log("multiply ", result);

// Arrow Functions:
const divide = (a, b) => a / b;

// Higher-Order Functions:
// Higher-order functions are functions that take one or more functions as arguments or return a function. They are used in functional programming and enable powerful abstractions. For example, the map(), filter(), and reduce() methods on arrays are higher-order functions.

// squared
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * 2);
console.log("squared ", squaredNumbers);

// multisquared
const numbers1 = [1, 2, 3, 4, 5];
const squaredNumbers1 = numbers.map((num) => num ** 2);
console.log("multisquared ", squaredNumbers1);

// Generator Functions:
function* countToFive() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
const generator = countToFive();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// console.log(generator.next()); { value: undefined, done: true }
