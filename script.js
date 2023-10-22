function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 1) {
    return "Rock";
  } else if (random === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}
let userScore = 0;
let computerScore = 0;

function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt("What would you pick? Rock, Paper or Scissors? ");
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "Paper") ||
    (playerSelection === "paper" && computerSelection === "Scissors") ||
    (playerSelection === "scissors" && computerSelection === "Rock")
  ) {
    computerScore += 1;
    console.log("Computer is earning a point!");
    console.log(`Your points: ${userScore}`);
    console.log(`Computer points: ${computerScore}`);
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    userScore += 1;
    console.log("You are earning a point!");
    console.log(`Your points: ${userScore}`);
    console.log(`Computer points: ${computerScore}`);
  } else {
    console.log("it's a tie!");
    console.log(`Your points: ${userScore}`);
    console.log(`Computer points: ${computerScore}`);
  }
}

function game() {
  for (i = 0; i <= 4; i++) {
    playRound();
  }
}
game();

if (userScore > computerScore) {
  console.log("YOU WIN!");
} else if (userScore < computerScore) {
  console.log("YOU LOSE!");
} else {
  console.log("IT'S A TIE!");
}
