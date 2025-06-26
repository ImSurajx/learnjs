let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");

const drawGame = () => {
  msg.innerHTML = "Game was draw! Play again.";
  msg.style.backgroundColor = "#081b31";
};

const genComputerChoice = () => {
  //rock, paper, scissors
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    uScore.innerHTML = `${userScore}`;
  } else {
    compScore++;
    msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    cScore.innerHTML = `${compScore}`;
  }
};

const playGmae = (userChoice) => {
  // get computer choice
  const compChoice = genComputerChoice();
  // genrate computer choice --> modular
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
      // rock, scissors
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGmae(userChoice);
  });
});
