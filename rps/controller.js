let game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame();

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    let numberOfRounds = prompt("How many numbers of rounds would you like to play?");
    console.log(numberOfRounds);
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the user again
    while (game.isNumberOfRoundsValid(numberOfRounds) != true){
        console.log("Invalid number, please enter a number between 1 & 5.");
        numberOfRounds = prompt("How many numbers of rounds would you like to play?");
    }
    game.setNumberOfRounds(numberOfRounds);
    
    
    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    for (let i=1; i <= game.numberOfRounds; i++){
        console.log("playing round");
        playRound(i);
    }
    console.log('Total Player Wins: ' + game.countOfPlayerWins)
    console.log('Total Computer Wins: ' + game.countOfComputerWins)
    console.log('Total Ties: ' + game.countOfTies)
    console.log("Run playGame() again to play more, thanks for playing!")

}


    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object


/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log(game.countOfPlayerWins);
    //Prompt for Player Selection
    let playerSelection = getPlayerSelection();
    let round = new Round(playerSelection);

    //Play the Round
    let outcome = round.determineWinner();

    switch (outcome) {
        case 'tie':
            game.incrementCountOfTies();
            break;
        case 'player':
            game.incrementPlayerWins();
            break;
        case 'computer':
            game.incrementComputerWins();
            break;
        default:
            console.log("No one won or tied... weird.");
    }

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log(outcome);
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    playerSelection = prompt("Enter rock, paper, or scissors.").toLowerCase();
    let selection = ['rock','paper','scissors'];
    while (!selection.includes(playerSelection)){
        console.log("Please enter rock, paper, or scissors");
        playerSelection = prompt("Enter rock, paper, or scissors.").toLowerCase();
    }
    return playerSelection
}

