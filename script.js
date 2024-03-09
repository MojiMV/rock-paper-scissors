let wins = 0;
let losses = 0;
const userScore = document.querySelector(".user-score");
userScore.textContent = 0;
const pcScore = document.querySelector(".computer-score");
pcScore.textContent = 0;
const winner = document.querySelector(".winner");
const playButs = document.querySelectorAll(".playBut")


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}


function game(computerSelection, playerSelection){

    
    if (computerSelection === "rock" && playerSelection === "paper"){
        wins += 1;
        userScore.textContent = wins;
    } else if (computerSelection === "rock" && playerSelection === "scissors"){
        losses += 1;
        pcScore.textContent = losses;
    } else if (computerSelection === "paper" && playerSelection === "rock"){
        losses += 1;
        pcScore.textContent = losses;
    } else if (computerSelection === "paper" && playerSelection === "scissors"){
        wins += 1;
        userScore.textContent = wins;
    } else if (computerSelection === "scissors" && playerSelection === "rock"){
        wins += 1;
        userScore.textContent = wins;
    } else if (computerSelection === "scissors" && playerSelection === "paper"){
        losses += 1;
        pcScore.textContent = losses;
    }
    

    if (wins == 5){
        winner.textContent = "You won!"
        playButs.forEach(button => {
            button.disabled = true;
        })
    } else if ( losses == 5){
        winner.textContent = "You lost!"
        playButs.forEach(button => {
            button.disabled = true;
    })
    }

}

document.addEventListener("click", (e) => {
    let target = e.target.id;

    switch(target){
        case "rock":
            game("rock", getComputerChoice());
            break;

        case "paper":
            game("paper", getComputerChoice());
            break;

        case "scissors":
            game("scissors", getComputerChoice());
            break;

        case "refresh":
            location.reload();
            break;
    }
})