function findLargestNum(arr) {
  let largest = arr[0];

  for (const currentItem of arr) {
    if (currentItem > largest) {
      largest = currentItem;
    }
  }
  return largest;
}

const number = [24, 215, 25, 26, 477, 47, 28, 13];
console.log(findLargestNum(number));


function findbiggestNum(arry) {
    let biggest = arry[0];

    // for (const currentIndex of arry.length) {
    //     if (arry[currentIndex].length > biggest.length) {
    //         biggest = currentIndex
    //     }
        
    // }
    for (let i = 0; i < arry.length; i++) {
        if (arry[i].length > biggest.length) {
            biggest = arry[i]
        }
        
    }
    return biggest;  
}


const arry =["a", "bb", "c"]
console.log(findbiggestNum(arry));