// Data types in JavaScript
// there are total two types of data, i. premitive data & ii. non-premitive data.
// premitive data types: {number, string, boolean, undefined, null, brigInt, symbol}

// number
let number = 5;
console.log(number,": ",typeof(number));

// string
let string = "Suraj Kumar";
console.log(string,": ",typeof(string));

// boolean
let isFollow = false;
console.log(isFollow,": ",typeof(isFollow));

// undefined
let a;
console.log(a,": ",typeof(a));

// null 
let nul = null;
console.log(nul,": ",typeof(nul));

// Bignit
let x = BigInt('1234');
console.log(x,": ",typeof(x));

// Symbol
const sym = Symbol("Hello Suraj");
console.log(sym,": ",typeof(sym));

// non-premitive data types: {objects}
const student = {
    fullName: "Suraj Kumar",
    age: 21,
    dob: "18-06-2004",
    language: "Hindi, English"
};

console.log(student,": ", typeof(student));

// individual access of element & updation.
console.log(student.fullName); // or student["fullName"]
console.log(student.age);
console.log(student["dob"]);
console.log(student["language"]);
// updation
// note: we can't update any varible which was defined by const but we can update objects which are define by const.

student.fullName = "ImSurajx";
student.age = 20;
student.dob = "18.06.2004";
student["language"] = "Hindi";

console.log(student,": ", typeof(student));

// individual access of element & updation.
console.log(student.fullName); // or student["fullName"]
console.log(student.age);
console.log(student["dob"]);
console.log(student["language"]);
