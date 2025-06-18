/*
String Methods in JS

these are built in functions to manipulate a string
    * str.toUpperCase() -> convert character into uper case
    * str.toLowerCase() -> convert character into lower case
    * str.trim() -> remove whitespaces from starting & end
    * str.slice(start, end?) -> returns part of string
    * str1.concat(str2) -> join str2 with str1
    * str.replace(seachVal, newVal) -> find & replace
    * str.charAt(idx) -> which character is aviablbe on nth index 
note: string methods never change the originial string b/c in javascript strings are immutable.
*/

let str = "Hello";
let str2 = "Suraj";
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.slice(0,6)); // it will give char from 0 to 5 not til 6
console.log(str.concat(str2)); // str+str2+str3 -> we can also use this
console.log(str.replace("H","Y")); // only replace one time for replacing all the values we use replaceAll.
console.log(str.charAt(0));