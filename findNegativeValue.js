//find negative number using loop
function findNegative(numbers) {
  const negativeNumber = [];

  for (const num of numbers) {
    if (num < 0) {
      negativeNumber.push(num);
    }
  }

  return negativeNumber;
}

const numbers = [1, -2, 3, -4, 5, -6, 7, -8];
console.log(findNegative(numbers));

// using filter
const negativeValue = numbers.filter((num) => num < 0);
console.log(negativeValue);
