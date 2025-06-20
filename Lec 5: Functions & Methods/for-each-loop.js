/*
forEach
    The forEach() method in JavaScript is a built-in array method that executes a provided function once for each element in an array, in ascending-index order. It is commonly used for iterating over array elements and performing actions or "side effects" on each element. 

    array.forEach(callback(currentValue, index, array), thisValue);

    Parameters:
    callback: A function to execute for each element in the array. It can take up to three arguments:
    currentValue: The value of the current element being processed.
    index (optional): The index of the current element being processed.
    array (optional): The array forEach() was called upon.
    thisValue (optional): A value to use as this when executing the callback

    - we use for-each loop whenever we have to perform some action on array.
    - for-each loop only use in arrays & also known & higher order function. 

    what is higher order function:
    the higher order function is a function which tak function as a parameter or return a function.
    if a function have any one of these properties it's a higher order function.

*/
let arr = ["pune", "delhi", "mumbai."];
arr.forEach((val, idx, arr) =>{
    console.log(val.toUpperCase(), idx, arr);
})