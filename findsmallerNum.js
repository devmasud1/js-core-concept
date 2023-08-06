function findLargestNum(arr) {
    let smaller = arr[0];
  
    for (const currentItem of arr) {
      if (currentItem < smaller) {
        smaller = currentItem;
      }
    }
    return smaller;
  }
  
  const number = [215, 25, 26, 77, 47, 28, 413];
  console.log(findLargestNum(number));
  