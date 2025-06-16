// Variable
// variables are containers for data & we can use or update that data later on whenever we want.

// we don't have to predefine data types in js it's dynamically typed when code runs.

// RULES:
// variable names are case sensitive "a" & "A" is different
// only letters, digits, underscore(_) and $ is allowed (not even space)
//  only a letter, underscore(_) or $ should be 1st character
// reversed words cannot be variable names.
// not a rule but genrally we use came case for naming for ex totalPriceOfProduct

// Defining Vraibles

// var: variable can redeclared & updated, a global scope varible. --> not recommend to use.
var name = suraj;
var name = aditya;
var name = dheeraj;

// let: variable cannot be redeclared but can be updated, a block scope variable.

let totalPrice = 1000;
let string = "Hello Suraj";

// const: variable cannot to re-declared & updated, a block scope varible.

const x  = 100;
x = 50; // not possible b/c you can't update const

age = 24;
console.log(age);
age += 1;
console.log(age);
name = "Suraj Kumar"
console.log(name);
x = null;
console.log(x);
y = undefined;
console.log(y);
isfollow = false;
console.log(isfollow);