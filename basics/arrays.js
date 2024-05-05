let array1 = [1,2.3, true];
const array2 = [5,"Vishal"];
array1.push(7);
array1.push(9);
// console.log(array1);
array1.pop();
// console.log(array1);
// array1.push(array1);
// console.log(array1);  // circular reference arraor in array 
// array1.push(array2);
// console.log(array1);
const array3 = [...array2, ...array1];
array3.push(array1)
console.log(array3);
const array4 = array3.flat(Infinity);
console.log(array4);