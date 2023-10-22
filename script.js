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

function playRound(computerSelection, playerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt("What would you pick? Rock, Paper or Scissors? ");
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection === "rock" && computerSelection === "Paper") ||
    (playerSelection === "paper" && computerSelection === "Scissors") ||
    (playerSelection === "scissors" && computerSelection === "Rock")
  ) {
    console.log("You lose!");
  } else if (
    (playerSelection === "rock" && computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    console.log("You win!");
  } else {
    console.log("it's a tie!");
  }
}
function game() {
  for (i = 0; i <= 4; i++) {
    playRound();
  }
}
game();
