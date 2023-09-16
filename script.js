var RPSGame;
(function (RPSGame) {
    RPSGame[RPSGame["Rock"] = 0] = "Rock";
    RPSGame[RPSGame["Paper"] = 1] = "Paper";
    RPSGame[RPSGame["Scissors"] = 2] = "Scissors";
})(RPSGame || (RPSGame = {}));
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    else if ((playerSelection == RPSGame.Rock && computerSelection == RPSGame.Scissors) ||
        (playerSelection == RPSGame.Paper && computerSelection == RPSGame.Rock) ||
        (playerSelection == RPSGame.Scissors && computerSelection == RPSGame.Paper)) {
        return "You Win! ".concat(RPSGame[playerSelection], " beats ").concat(RPSGame[computerSelection], ".");
    }
    else {
        return "You Lose! ".concat(RPSGame[computerSelection], " beats ").concat(RPSGame[playerSelection], ".");
    }
}
function getPlayerChoice() {
    while (true) {
        var playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
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
for (var i = 0; i < 5; i++) {
    var playerSelection = getPlayerChoice();
    var computerSelection = getComputerChoice();
    var result = playRound(playerSelection, computerSelection);
    console.log("Round ".concat(i + 1, " - Player vs. Computer: \"").concat(result, "\""));
}
