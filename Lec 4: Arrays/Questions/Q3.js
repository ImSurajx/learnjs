/*
Q3. create an array to stoore companies -> "Bloombery", "Microsoft", "Uber", "Google", "IBM", "Netflix"
- remove the first company from the array
- remove uber & add ola in its place
- add amazon at the end.
*/
let companies = ["Bloombery", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// remove the first company from the array
companies.splice(0,1); // we also use shift & pop.
console.log(companies);
// remove uber & add ola in it's place
companies.splice(1,1,"Ola"); 
console.log(companies);
// add amazon at the end.
companies.splice(5,0,"Amazon");
console.log(companies); // we also use push.