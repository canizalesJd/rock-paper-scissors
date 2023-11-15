// Array of choice
const choices = ["rock", "paper", "scissors"];

// Get computer choice
const computerSelection = () => {
	return choices[Math.floor(Math.random() * 3)];
};

// Get player choice
const playerSelection = () => {
	return prompt("Rock, Paper, Scissors?").toLowerCase().trim();
};

function game() {
	// Declaring variables
	let round;
	let computerScore = 0;
	let playerScore = 0;
	// Play 5 rounds
	for (let i = 0; i < 5; i++) {
		// Get round result
		round = playRound(playerSelection(), computerSelection());
		// Don't count the round if it's invalid
		if (round === "Invalid input") {
			i--;
		}
		// Update score
		if (round.includes("Win")) {
			playerScore++;
		} else if (round.includes("Lose")) {
			computerScore++;
		}
	}
	// Show score
	if (playerScore > computerScore) {
		return alert("You've Won!");
	} else {
		return alert("You've Lost!");
	}
}

// Round logic
function playRound(playerSelection, computerSelection) {
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
}

game();
