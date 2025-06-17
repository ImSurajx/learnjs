// CONDITIONAL STATEMENTS

// if-statment
// ex-1
let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log(color);

// ex-2
let age = 19;
if (age >= 18) {
  console.log("you can vote.");
}
if (age < 18) {
  console.log("you can not vote.");
}

// if-else statement

// ex-1
let mod = "light";
let colour;
if (mod === "dark") {
  colour = "black";
} else {
  colour = "white";
}
console.log(colour);
// ex-2
let num = 10;
if(num%2==0){
    console.log(num, " is even.");
} else{
    console.log(odd," is odd");
}
// syntax --> rules of writing the programming language.

// else-if statement

// ex-1
let md = "dark";
let cl;
if(md === "dark"){
    cl = "black"
} else if(md === "blue"){
    cl = "blue";
} else if( md === "pink"){
    cl = "pink";
} else{
    cl = "white";
}
console.log(cl);

if(mode === "dark") console.log(mode);

// Ternary Operators
// condition? true output: false output;
let ag = 25;
age>=18?console.log("adult"):console.log("not adult");

// switch statement
// if expration match to case.
/* switch(expr){
    case 'orange':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangos and papayas are $2.79 a pound');
        break;
    default:
        console.log('Sorry, we are out of ${expr}.');
                }*/