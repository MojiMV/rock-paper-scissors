# rock-paper-scissors
rock-paper-scissors game for TOP


The pseudocode used for this project:

rock papers scissors project


make a project that enables the user to play the rock paper scissors game with computer and let the user know the winner after 5(x) rounds


create a getComputerChoice function to make the computer make a random choice between "rock" "paper" "scissors"


create a getUserChoice function to get the user's choice. make sure to lower case it and also give an error if the choice is not between "rock" "paper" "scissors"


create a playOneRound function that gets computer's choice and player's choice as two parameters and compares them in an if statement. if the player wins, it returns TRUE and if the player loses, it returns FALSE and if it's a draw it replays the game ( to replay it, my solution is to run the get desicion funtions inside this function and whenever its a draw, we just recall this function. in this way, we dont need parameters.)


create a game function that declares two variables called wins and losses first and assigns zero to them. then runs the playOneRond function for 5 times in a for loop and each time its TRUE, it adds 1 to wins and tells the user they won that round and each time its false, it adds 1 to losses and tells the user they lost that round
at the end of the function, it compares losses and wins and tells the user if they won or lost overall

======================================================================================================================

pseudocode for the new version ( with UI )

create a function called getComputerChoice() that chooses a random choice

create an Even listener which reacts to the buttons being clicked and runs a function called game() to play the game with one parameter being the users choice and the other parameter the getComputerChice() function, also reacts to the refresh button which reloads the page after the game is finished (or at any point you want)

game(): the game function should compare the choices and if the user wins +1 the wins and if the user loses, +1 the losses. and at the end it chech with an if statement if the the wins or losses have reached 5. if they have reached 5 then it chooses the winner and disables the play buttons

