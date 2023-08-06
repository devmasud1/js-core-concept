//find positive number using loop
function positiveValue(num) {
  const positiveNumber = [];

  for (const number of num) {
    if (number > 0) {
      positiveNumber.push(number);
    }
  }
  return positiveNumber;
}

const numbers = [1, -2, 3, -4, 5, -6, 7, -8];
const positiveValue1 = positiveValue(numbers);
console.log('using-loop' ,positiveValue1);

// using filter
const numbers1 = [1, -2, 3, -4, 5, -6, 7, -8];

const positiveValue2 = numbers1.filter((num1) => num1 > 0);
console.log('using-filter' ,positiveValue2);
