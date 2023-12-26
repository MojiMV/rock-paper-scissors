function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function getUserChoice(){
    let choice = prompt("Make your choice (rock, paper, scissors)");
    choice = choice.toLowerCase()
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        return choice;
    } else {
        alert("Wrong choice");
    }  
}

function playOneRound() {

    const playerSelection = getUserChoice();
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(computerSelection);


    if (computerSelection === "rock" && playerSelection === "rock"){
        return playOneRound();
    } else if (computerSelection === "rock" && playerSelection === "paper"){
        return true;
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        return false;
    } else if (computerSelection === "paper" && playerSelection === "paper"){
        return playOneRound();
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        return false;
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
        return true;
    } else if (computerSelection === "scissors" && playerSelection === "scissors"){
        return playOneRound();
    } else if (computerSelection === "scissors" && playerSelection === "rock"){
        return true;
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        return false;
    }
}

function game(){
    let wins = 0;
    console.log(wins);
    let losses = 0;
    console.log(losses);

    for (let i = 0; i<5 ; i++){
        if (playOneRound()){
            wins = wins + 1;
            alert("You won this round!");
            
        } else {
            losses = losses + 1;
            alert("You lost this round!");
            
        }
        console.log(wins);
        console.log(losses);
    }

    if (wins > losses){
        alert("You won the game!");
    } else if( losses > wins) {
        alert("You lost the game!");
    } else{
        alert("It was a draw!")
    }
}

game();