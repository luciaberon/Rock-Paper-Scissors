function computerPlay() {
	let options = ["Rock","Paper","Scissors"]
	return options[Math.floor(Math.random() * 3)]; // returns random integer from 0 to 2
}

function gameRound(playerChoice) {
	let v = computerPlay();
	const optionComputer = v.toUpperCase();
    const optionPlayer = playerChoice.toUpperCase();
	
	if (optionComputer != optionPlayer) {
		if ((optionComputer == "ROCK" && optionComputer == "PAPER") || (optionComputer == "SCISSORS" && optionPlayer == "PAPER") || (optionComputer == "PAPER" && optionPlayer == "ROCK")) {
			return "You Lose! " + optionComputer + " beats " + optionPlayer;
		} else {
			return "You Win! " + optionPlayer + " beats " + optionComputer;
		}
	} else {
		return "TIE!";
	}
}


function game() {
	let computerPoints = 0;
	let playerPoints = 0;
	for (var i = 0; i<5; i++) {
		let choice = prompt("Rock, paper or scissors?");
		let result = gameRound(choice);
		if (result.includes("Win")) {
			++playerPoints;
			printPoint(computerPoints,playerPoints);
		} else if (result.includes("Lose")) {
			++computerPoints;
			printPoint(computerPoints,playerPoints);
		}
	}
	let finalWinner = countPoints(computerPoints,playerPoints);
	document.getElementById("resultado").innerHTML = finalWinner;

}
	
function countPoints (computerPoints,playerPoints) {
	if (computerPoints>playerPoints) {
		return "The Computer Won the Game!";
	} else if (playerPoints>computerPoints) {
		return "You Won the Game!"		
	} else {
		return "IT WAS A TIE!";
	}
}

function printPoint (computerPoints,playerPoints) {
	document.getElementById("pc-points").innerHTML = computerPoints;
	document.getElementById("player-points").innerHTML = playerPoints;
}