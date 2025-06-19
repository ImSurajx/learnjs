/*
push() : add to end
pop() : ddelete from end & return
toString: convers array to string
concat(): join multiple arrays
unshift(): add item at the start of array & make changes into original array.
shift(): remove item at the start of array & make changes into original array.
slice(staridx, endidx): returns a piece of the array
splice(startidx, delCount, newEl1): change original array(add, remove, replace);
*/
let foodItems = ["potato", "apple", "mango", "lichi"];

// pushing - change into original array. -> array.push("item", "item");
console.log(foodItems);
foodItems.push("chips", "burger", "panner"); 
console.log(foodItems);

// poping -> array.pop(array)
let deletedValue = foodItems.pop(foodItems);
console.log(foodItems);
console.log(deletedValue);

// convert array into strings -> toString()
let marks = [97, 44, 59, 54, 80];
console.log(marks.toString());

// merging two arrays. -> concat
let marvel = ["thor", "iron-man", "spider-man", "deadpool"];
let dc = ["superman", "batman"];
let indian = ["krish", "shaktiman"]
let heros = marvel.concat(dc, indian);
console.log(heros);

// add item at the start of array using - unshift
marvel.unshift("superman", "batman")
console.log(marvel);

// remove item at the start of the array - shift; -> made changes into original aaray.
let value = marvel.shift();
console.log(marvel);
console.log(value);

// return a piece of the array. - slice
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr. Strange"]
console.log(marvelHeroes.slice());

// remove, add, replace - splice 
marvelHeroes.splice(2,0,"101", "102","103", "104", "105", "106");
console.log(marvelHeroes);