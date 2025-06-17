/*
Q2. Write a code which can give grades to students according to their scores.
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/
let score = prompt("enter your score: ");
if(score >= 90 && score <= 100){
    console.log(score, " : Grade A");
} else if(score >= 70 && score <= 89){
    console.log(score, " : Grade B"); 
} else if(score >= 60 && score <= 69){
    console.log(score, " : Grade C");
} else if(score >= 50 && score <= 59){
    console.log(score, " : Grade D");
} else if(score >= 0 && score <= 49){
    console.log(score, " : Grade F");
} else{
    console.log(score," : not a valid score.")
}