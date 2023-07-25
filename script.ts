enum RPSGame {
    Rock,
    Paper,
    Scissors
}

function getComputerChoice(): RPSGame {
    return Math.floor(Math.random() * 3);
}

function playRound(playerSelection: RPSGame, computerSelection: RPSGame): string {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection == RPSGame.Rock && computerSelection == RPSGame.Scissors) ||
        (playerSelection == RPSGame.Paper && computerSelection == RPSGame.Rock) ||
        (playerSelection == RPSGame.Scissors && computerSelection == RPSGame.Paper)
    ) {
        return `You Win! ${RPSGame[playerSelection]} beats ${RPSGame[computerSelection]}.`;
    } else {
        return `You Lose! ${RPSGame[computerSelection]} beats ${RPSGame[playerSelection]}.`;
    }
}

function getPlayerChoice(): RPSGame {
    while (true) {
        let playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        if (playerSelection != null && playerSelection != "") {
            playerSelection = playerSelection.trim().toLowerCase();
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            if (playerSelection == RPSGame[RPSGame.Rock]) {
                return 0;
            }
            else if (playerSelection == RPSGame[RPSGame.Paper]) {
                return 1;
            }
            else if (playerSelection == RPSGame[RPSGame.Scissors]) {
                return 2;
            }
        }
    }
}

for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    console.log(`Round ${i + 1} - Player vs. Computer: "${result}"`);
}
