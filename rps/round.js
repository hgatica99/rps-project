// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        return Object.values(Selections)[Math.floor(Math.random() * 3)]
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        let pS = this.playerSelection
        let cS = this.computerSelection
        if (pS === cS){
            return Outcomes["TIE"]
        } else if (pS === 'rock' && cS === 'paper' || pS === 'paper' && cS === 'scissors' || pS === 'scissors' && cS === 'rock'){
            return Outcomes["COMPUTER_WINS"]
        } else {
            return Outcomes["PLAYER_WINS"]
        }
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;