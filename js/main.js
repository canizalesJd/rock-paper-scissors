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

let computerScore;
let playerScore;

const startGame = () => {
  computerScore = 0;
  playerScore = 0;
  buttonContainer.removeChild(startGameButton);
  updateRoundResult("");
  updateScore(0, 0);
  buttonContainer.appendChild(rockButton);
  buttonContainer.appendChild(paperButton);
  buttonContainer.appendChild(scissorsButton);
  gameContainer.appendChild(scoreContainer);
  gameContainer.appendChild(roundResult);
};

// Game Round logic
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
scoreContainer.textContent = "Player: 0 Computer: 0";

const roundResult = document.createElement("div");
roundResult.classList.add("round-result");

gameContainer.appendChild(buttonContainer);
buttonContainer.classList.add("button-container");

// Start game button element creation

const startGameButton = document.createElement("button");
startGameButton.textContent = "Start Game";
buttonContainer.appendChild(startGameButton);
startGameButton.classList.add("start-game-button");

startGameButton.addEventListener("click", startGame);

// Rock button element creation
const rockButton = document.createElement("button");
rockButton.textContent = "✊";
rockButton.classList.add("rock-button");

rockButton.addEventListener("click", () => {
  game(playRound(playerSelection(0), computerSelection()));
});

// Paper button element creation
const paperButton = document.createElement("button");
paperButton.textContent = "🤚";
paperButton.classList.add("paper-button");

paperButton.addEventListener("click", () => {
  game(playRound(playerSelection(1), computerSelection()));
});

// Scissors button element creation
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "✌️";
scissorsButton.classList.add("scissors-button");

scissorsButton.addEventListener("click", () => {
  game(playRound(playerSelection(2), computerSelection()));
});

// Update the score
const updateScore = (playerScore, computerScore) => {
  scoreContainer.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
};

// Update round result text
const updateRoundResult = (round) => {
  roundResult.textContent = round;
};

// Main Game function
const game = (round) => {
  // Play 5 rounds
  console.log(playerScore, computerScore);
  while (playerScore < 5 && computerScore < 5) {
    updateRoundResult(round);
    if (round.includes("Win")) {
      playerScore++;
    } else if (round.includes("Lose")) {
      computerScore++;
    }
    updateScore(playerScore, computerScore);
    break;
  }
  if (playerScore >= 5 || computerScore >= 5) {
    displayWinner(playerScore, computerScore);
  }
};

// Show the game winner
const displayWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    updateRoundResult("🥳 You've Won!!");
  } else {
    updateRoundResult("💩 You've Lost!!");
  }
  resetGame();
};

const resetGame = () => {
  buttonContainer.removeChild(rockButton);
  buttonContainer.removeChild(paperButton);
  buttonContainer.removeChild(scissorsButton);
  startGameButton.textContent = "Play Again";
  buttonContainer.appendChild(startGameButton);
};
