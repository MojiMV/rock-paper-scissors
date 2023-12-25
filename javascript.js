function getComputerChoice() {
    choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice(){
    choice = prompt("Make your choice (rock, paper, scissors)");
    choice = choice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        alert("Wrong choice");
    }

}
function playOneRound() {

    computerSelection = getComputerChoice();
    playerSelection = getUserChoice();

    if (computerSelection === "rock" && playerSelection === "rock"){
        playOneRound();
    } else if (computerSelection === "rock" && playerSelection === "paper"){
        return true;
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        return false;
    } else if (computerSelection === "paper" && playerSelection === "paper"){
        playOneRound();
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        return false;
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
        return true;
    } else if (computerSelection === "scissors" && playerSelection === "scissors"){
        playOneRound();
    } else if (computerSelection === "scissors" && playerSelection === "rock"){
        return true;
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return false;
    }
}

function game(){
    let wins = 0;
    let losses = 0;

    for (let i = 0; i<5 ; i++){
        playOneRound();
        if (playOneRound === true){
            wins = wins + 1;
            alert("You won this round!");
        } else if (playOneRound === false){
            losses = losses + 1;
            alert("You lost this round!");
        }
    }

    if (wins > losses){
        alert("You won the game!");
    } else if( losses > wins) {
        alert("You lost the game!");
    }
}

game();