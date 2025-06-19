// Q1. for the given array with marks of students -> [85, 97, 44, 37, 76, 60], find
// the average marks of the entire class.

let students = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(let student of students){
    sum += student;  
}
let average = sum / students.length;
console.log(`average is: ${average} `);