//array theke shudhu odd(bijor) number er jokfol ber koro....

function sumOfOddNum(arr) {
  let num = 0;

  for (const sum of arr) {
    if (sum%2===1) {
      num += sum  
    }
  }
  return num;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfOddNum(array));
