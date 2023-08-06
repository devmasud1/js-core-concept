function removeDuplicate(num) {
  unikeNumber = [];

  for (const item of num) {
    if (unikeNumber.includes(item) === false) {
      unikeNumber.push(item);
    }
  }
  return unikeNumber;
}

const number = [1, 2, 3, 4, 1, 3, 2, 4,];
console.log(removeDuplicate(number));
