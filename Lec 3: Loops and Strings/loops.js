/*
when we want run same peace of code multiple times
- for loop
- while loop
- do while loop
- for-of loop
- for-in loop

* for loop
for(initilization; condition; updation){
        your code;
}

ex:
for(let i = 1; i<=5; i++){
        console.log("Hello Suraj");
}

note: we can not use those variables value which are defined inside of loop.
    : infinite loop: a loop that never end, a loop that's stoping condition is always true.
    ex:
    for(let i = 1; i > 0; i++)


* while loop

initilization;
while(condition){
        console.log("Hello Suraj");
        updation
}

ex:
    let i = 1;
    while(i<=5){
        console.log("Hello Suraj");
        i++;
}

* do-while loop : first time loop run hoga hi hoga uske baad condition check hoga.

initilization;
do{
    your code;
    updation;
} while(condition);

ex:
let i = 20;
do{
    console.log("Hello Suraj");
    i++;
} while(i<=10);

* for-of loop
for(let val of strVar){
    //do some work
}

ex:
let str = "Hello Suraj"; // store character of string into i one by one 
for(let i of str){
    console.log("i = ", i)
}

* for-in loop --> we got keys name by using for-in loop
for(let val of object){
    // do some work
}

ex:
for(let i in student){ // i === keys if we got the keys then we go its value
    console.log("key: ",i, "value: ", student[i] );
}

*/

// for loop
let n = prompt("enter a number: ");
let sum = 0;
for(let i = 1; i<=n; i++){
        sum += i;
}
console.log("sum is: ",sum);


// while loop
let m = prompt("enter a number: ");
let _sum = 0;
let j = 1;
while(j<=m){
        _sum += j;
        j++;
}
console.log("sum is: ",_sum);


// do-while loop
let l = prompt("enter a number: ");
let sum_ = 0;
let k = 1;
do {
    sum_+= k;
    k++;
} while(k<=l) 
console.log("sum is: ",sum_);


// for-of loop
let str = "JavaScript"; // store character of string into i one by one 
let size = 0;
for(let i of str){
    console.log("i = ", i)
    size++;
}
console.log("string size: ", size) // 10

// for-in loop
let student = {
    name: "Suraj Kumar",
    age: 21,
    cgpa: 9,
    isPass: true
};

// for-in loop
for(let i in student){ // i === keys if we got the keys then we go its value
    console.log("key: ",i, "value: ", student[i] );
}