// ARITHEMETIC OPERATORS
let a = 5;
let b = 2;
console.log("a + b = ", a+b); // add
console.log("a - b = ", a-b); // subtract
console.log("a * b = ", a*b); // multiply
console.log("a / b = ", a/b); // devide
console.log("a % b = ", a%b); // modulo -> give remainder
console.log("a ** b = ", a**b); // exponentiation a^b

// unary operators '++'increment '--'decrement
// increment
console.log("a++ = ", a++); // first use the value the increase. -> 5 (post increment)
console.log("++a = ", ++a); // first increase then use the value -> 7 (pre increment)
// decrement
console.log("b-- = ", b--); // first use the value the increase. -> 2 (post decrement)
console.log("--b = ", --b); // first increase then use the value -> 0 (pre decrement)

// ASSIGNMENT OPERATORS
console.log(a=5); // assign value
console.log(a+=5); // existing value mea 5 add kar do
console.log(a-=3); // exisiting value mea se 3 ghata do
console.log(a*=5); // exisiting value mea 5 se multiply kar do
console.log(a/=3); // exisiting value mea 3 se devide kar do
console.log(a%=2); // existing value ko 2 se devide karne pad remainder kya aayega
console.log(a**=2); // e^2 where e = exisiting value

// COMPARISON OPERATORS
console.log("a==b = ",a==b); // equal to
console.log("a===b = ",a===b); // equal to with data types
console.log("a!=b = ",a!=b); // not equal to
console.log("a!==b = ",a!==b); // not equal to with data types
console.log("a>b = ",a>b); // greater than
console.log("a<b = ",a<b); // less than
console.log("a>=b = ",a>=b); // greater than equal to
console.log("a<=b = ",a<=b); // less than equal to

// LOGICAL OPERATORS
console.log("(a>b && a==b) = ",(a>b && a==b)); // both condition must be true --> logical AND
console.log("(a<b || a==b) = ",(a>b || a===b)); // one condition must be true --> logical OR
console.log("!(a>b) = ",!(a>b)); // if logic is true it give you false, if logic is false it give you true--> logical OR