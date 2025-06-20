/*
MAP
creates a new array with the results of some operation, the value it's callback returns are used to form new array.

arr.map(callbackFnx(value, index, array))

ex:
    let newArr = arr.map((val) => {
        return val*2;
    })

FILTER
creates a new array of elements that give true for a condition/ filter 

ex: all even elements.

let newArr = arr.filter (val) => {
    return val % 2 === 0;
}

REDUCE
- performs some operations & reduces the array to a single value. it returns that single value.

ex:
const array1 = [1,2,3,4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce{
    (accumulator, currenValue) => accumulator + currentValue, initalValue,
};
console.log(sumWithInital);
// expected output: 10
*/

// MAP
let nums = [67, 52, 39];
let newA_rr = nums.map((val) => {
    return val * 2;
})

console.log(newA_rr);

 //  FILTER
let arr = [1,2,3,4,5,6,7];

let newArr = arr.filter((val) => {
    return val % 2 === 0;
})
console.log(newArr);


const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial); // Expected output: 10
