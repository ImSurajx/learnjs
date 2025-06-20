/*
Functions:
- block of code that perform a specific task, can be invoked whenever needed.

input --> functions --> output.
ex: 
    console.log("hello!");
    "abc".toUpperCase();
    [1,2,3].push(4);

function defination:
    function functionName(){ - way 1
      do some work
    }

    function functionName(parameter1, parameter2...){ - way 2 
        // do some work
    }

function call:
    functionName();
    functionName(arguments);


returning values
    function sum(x,y){
        s = x + y;
        return s; // only return one value.
    }


arrow functions: compact way to writing a function & p part of morden js.
    ex:
    const arrowPro = (a,b) => {
        console.log(a*b);
    };

const functionName = (parameter1, parameter2..) => {
    // do some work
}

note: functions help us in minimize redundancy(repetation).
      functions parameters are local variable & never exist outside of functions.
    
*/
function myFunction(){
    console.log("Hello Suraj.");
    console.log("We are learning JS.");
}

function sum(x, y){
    console.log(x+y);
}

// returning values
function sum(x,y){
    // local variable -> never exist outside of this function like s, x & y.
    s = x + y;
    console.log(`before return`);
    return s; // only return one value.
    console.log(`after return`);
}

// sum function
function sum(a,b){
    return a + b;
}

// multiplication function
function pro(a,b){
    return a*b;
}

const arrowSum = (a,b ) => {
    console.log(a+b);
};

const arrowPro = (a,b) => {
    return a * b;
};

const printHello = () => {
    console.log(`Hello Suraj`);
}
