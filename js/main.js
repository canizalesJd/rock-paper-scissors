const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
	return Math.floor(Math.random() * 3);
};

const playerSelection = () => {
	return prompt("Rock, Paper, Scissors?").toLowerCase().trim();
};

const computerSelection = choices[getComputerChoice()];

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerSelection(), computerSelection));
	}
}

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
