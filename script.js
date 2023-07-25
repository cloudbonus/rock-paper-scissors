var RPSGame;
(function (RPSGame) {
    RPSGame[RPSGame["Rock"] = 0] = "Rock";
    RPSGame[RPSGame["Paper"] = 1] = "Paper";
    RPSGame[RPSGame["Scissors"] = 2] = "Scissors";
})(RPSGame || (RPSGame = {}));
;
function getComputerChoice() {
    var chance = Math.floor(Math.random() * 3);
    return chance;
}
function playRound(playerSelection, computerSelection) {
    var result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    }
    else if ((playerSelection == RPSGame.Rock && computerSelection == RPSGame.Scissors) ||
        (playerSelection == RPSGame.Paper && computerSelection == RPSGame.Rock) ||
        (playerSelection == RPSGame.Scissors && computerSelection == RPSGame.Paper)) {
        result = "You Win! ".concat(RPSGame[playerSelection], " beats ").concat(RPSGame[computerSelection], ".");
    }
    else {
        result = "You Lose! ".concat(RPSGame[computerSelection], " beats ").concat(RPSGame[playerSelection], ".");
    }
    return result;
}
function getPlayerChoice() {
    var result;
    while (true) {
        var playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        if (playerSelection != null && playerSelection != "") {
            playerSelection = playerSelection.trim().toLowerCase();
            playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
            if (playerSelection == RPSGame[RPSGame.Rock]) {
                result = 0;
                break;
            }
            else if (playerSelection == RPSGame[RPSGame.Paper]) {
                result = 1;
                break;
            }
            else if (playerSelection == RPSGame[RPSGame.Scissors]) {
                result = 2;
                break;
            }
        }
    }
    return result;
}
;
for (var i = 0; i < 5; i++) {
    var playerSelection = getPlayerChoice();
    var computerSelection = getComputerChoice();
    var result = playRound(playerSelection, computerSelection);
    console.log("Round ".concat(i + 1, " - Player vs. Computer: \"").concat(result, "\""));
}
