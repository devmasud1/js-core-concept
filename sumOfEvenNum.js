function sumOfEvenNum(arr) {
    let sum = 0;

    for (const num of arr) {
        if(num%2 == 0){
            sum += num;
        }
    }
    return sum;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfEvenNum(array));