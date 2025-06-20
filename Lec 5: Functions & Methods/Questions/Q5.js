// Q5. take a number n as input from user. create an array of numbers from 1 to n.
// use the reduce method to calculate sum of all numbers in the array.
// use the reduce method to calculate product of all numbers in the array.

let num = prompt("enter a number: ");
let arr = [];
for (let i = 0; i < num; i++) {
  arr[i] = i + 1;
}
console.log(arr);

// sum using reduce
const sum = arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(sum);

// product using reduce
const product = arr.reduce((prev, curr) => {
  return prev * curr;
});
console.log(product);
