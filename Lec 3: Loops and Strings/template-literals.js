/*
template literals
A way to have embedded expressions in strings

String Interpolation
- to create string by doing subsitution of placeholder like `string text ${expression}string text`
- let specialString =`This is a template literal`;
- console.log(typeof specialString);

escapte chracter
\n - work like enter
\t
*/

// ex:
let obj = {
    item: "pen",
    price: 10,
};

// using normal strings
console.log("the cost of", obj.item, "is", obj.price, "rupees");

// using template literals
let output = `the cost of ${obj.item} is ${obj.price} rupees`; // it convert everthing into single string
console.log(output);