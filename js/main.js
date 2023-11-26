// Array of choice
const choices = ["rock", "paper", "scissors"];

// Get computer choice
const computerSelection = () => {
  return choices[Math.floor(Math.random() * 3)];
};

// Get player choice
const playerSelection = (choice) => {
  return choices[choice];
};

const gameInit = () => {
  buttonContainer.removeChild(startGameButton);
  buttonContainer.appendChild(rockButton);
  buttonContainer.appendChild(paperButton);
  buttonContainer.appendChild(scissorsButton);
  gameContainer.appendChild(scoreContainer);
  gameContainer.appendChild(roundResult);
};

// Round logic
const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
      } else if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
      } else if (computerSelection === "rock") {
        return "Draw";
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
      } else if (computerSelection === "rock") {
        return "You Win! Paper beats Rock";
      } else if (computerSelection === "paper") {
        return "Draw";
      }
    case "scissors":
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
      } else if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
      } else {
        return "Draw";
      }
    default:
      return "Invalid input";
  }
};

const gameContainer = document.querySelector(".game-container");
const buttonContainer = document.createElement("div");

const gameTitle = document.createElement("h1");
gameTitle.textContent = "Rock Paper Scissors";
gameContainer.appendChild(gameTitle);
gameTitle.classList.add("game-title");

const scoreContainer = document.createElement("div");
scoreContainer.classList.add("score-container");
scoreContainer.textContent = "Player Score: 0 Computer Score: 0";

const roundResult = document.createElement("div");
roundResult.classList.add("round-result");

gameContainer.appendChild(buttonContainer);

buttonContainer.classList.add("button-container");

const startGameButton = document.createElement("button");
startGameButton.textContent = "Start Game";
buttonContainer.appendChild(startGameButton);
startGameButton.addEventListener("click", gameInit);
startGameButton.classList.add("start-game-button");

const rockButton = document.createElement("button");
rockButton.textContent = "✊";
rockButton.classList.add("rock-button");
rockButton.addEventListener("click", () => {
  game(playRound(playerSelection(0), computerSelection()));
});
const paperButton = document.createElement("button");
paperButton.textContent = "🤚";
paperButton.classList.add("paper-button");
paperButton.addEventListener("click", () => {
  game(playRound(playerSelection(1), computerSelection()));
});

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "✌️";
scissorsButton.classList.add("scissors-button");
scissorsButton.addEventListener("click", () => {
  game(playRound(playerSelection(2), computerSelection()));
});

const updateScore = (playerScore, computerScore) => {
  scoreContainer.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
  return scoreContainer;
};

const updateRoundResult = (round) => {
  console.log(round);
  roundResult.textContent = round;
  return roundResult;
};

let computerScore = 0;
let playerScore = 0;

const game = (round) => {
  // Declaring variables
  // Play 5 rounds
  while (playerScore < 5 && computerScore < 5) {
    updateRoundResult(round);
    if (round.includes("Win")) {
      playerScore++;
    } else if (round.includes("Lose")) {
      computerScore++;
    }
    break;
  }
  updateScore(playerScore, computerScore);
};
