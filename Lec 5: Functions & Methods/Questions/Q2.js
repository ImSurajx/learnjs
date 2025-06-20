// Q2. Create an arrow function to perform the same task of Q1.
const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    str = str.toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
