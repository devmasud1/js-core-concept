// const number = 5;
// let result = 1;

// for (let i = number; i >= 1; i--) {
//   result = result * i;
// }

// console.log(result);

// using function
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let result = 1;

  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

const fact = factorial(0);
const fact1 = factorial(10);
console.log(fact);
console.log(fact1);
