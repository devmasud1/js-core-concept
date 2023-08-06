// The zero-based location in the array from which to start removing elements.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
//change the orginal array

const number = [12, 43, 83, 55, 65, 23, 53];

// const partial = number.splice(2, 4);
const partial2 = number.splice(2, 4, 33, 54, 65);

// console.log('after splice',partial);
console.log('splice & add value', partial2);
console.log('orginal arrry', number);


