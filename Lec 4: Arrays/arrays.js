/*
ARRAYS
- when we store same type of information or collection of same type of data/item in linear manner is known as array.

Create Array
- let heros = ["ironman", "hulk", "thor", "batman"];
- let marks = [96, 75, 48, 83, 66];
- let infor = ["rahul", 86, "Delhi"]; -> !exception

Array Indices
- indices always start with 0 & so on.
- like:
       let heros = ["ironman", "hulk", "thor", "batman"];
       heros[0] : ironman, heros[1] : hulk, heros[2] : thor, heros[3] : batman;

Array Value Updation
- like:
       let heros = ["ironman", "hulk", "thor", "batman"];
       heros[0] = hulk, heros[1] = "ironman", heros[2] = "batman", heros[3] = thor; -> updation
    new array wil look like:
        heros = ["hulk", "ironman", "batman", "thor"];
    
*/
let arr = [95, 96, 97, 98, 100];
console.log(arr);
console.log(arr.length); // property
let heros = ["ironman", "hulk", "thor", "batman"];
console.log(heros);
console.log(heros.length); // property
console.log(typeof heros); // object  note: key: value pair like object also present here but here key is the index value like indicies for ex: heros[0] = ironman
console.log(heros[0]);

// printing all the values inside array.
for(let i = 0; i < heros.length; i++){
    console.log(heros[i]);
}

// using for-of loop to access array values
for(let el of heros){
    console.log(el);
}

// print individual elemt of array
let cities = ["Delhi", "Pune", "Mumbai", "Hyderabad", "Gurgaon"];
for(let city of cities){
    console.log(city.toUpperCase());
}