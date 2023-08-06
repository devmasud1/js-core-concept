function sumOfArray(arr){
    sum = 0;

    for(const item of arr){
        sum += item

    }
    return sum;
}

const array = [1,2,3,4,5]
console.log(sumOfArray(array))