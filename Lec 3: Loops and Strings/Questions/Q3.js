// Q3. Prompt the use to enter their full name. Generate a username for them based on the input start username with @, followed by their full name and ending with the fullname length.
let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");
let at = "@"

console.log(`username: ${at+firstName+lastName}`);