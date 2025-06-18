// Q2. Create a game where you start with any random game number, ask the user to keep guessing the game number until the user enters correct value.
let gameNumber = 5;
let number = prompt("Guesss the game number: "); // prompt me number string ke form mea aate hain.
while(number!= gameNumber){
    number = prompt("You entered wrong number. Guesss again: ");
}
console.log("congratulation, you entered the right number.");