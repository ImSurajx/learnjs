/*
Q1. create a function using the "function" keyword that takes a string as an argument 
& returns the number of vowels in the string.
*/
function countVowels(name) {
  let count = 0;
  name = name.toLowerCase();
  for (let i = 0; i < name.length; i++) {
    if (
      name[i] == "a" ||
      name[i] == "e" ||
      name[i] == "i" ||
      name[i] == "o" ||
      name[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

countVowels("Hello Suraj"); 