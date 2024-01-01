function getComputerChoice(){
    //returns randomly 'Rock', 'Paper' or 'Scissors'
    let choices = ['ROCK', 'PAPER', 'SCISSORS'] //Array with choices
    let choice = Math.floor(Math.random() * 3)//Generates Random Number between 0 and 2 to pick from the choices
    return choices[choice] //Returns a choice from Choices

}

function playRound(playerSelection, computerSelection){
    //Plays a single round of Rock Paper Scissors.
    //Evaluates who wins out of player and computer Selections.
    playerSelection = playerSelection.toUpperCase()


    //Check for case when Player Chooses Rock
    if(playerSelection === 'ROCK'){
        if(computerSelection === 'PAPER'){
        
            return ('You Lose! Paper beats Rock');
        }

        else if (computerSelection === 'SCISSORS'){
            
            return('You Win, Rock beats Scissors');
        }
    }

    //Check for case when Player Chooses Paper
    else if(playerSelection === 'PAPER'){
        if (computerSelection === 'SCISSORS'){
            
            return ('You Lose!, Scissors beats Paper');
        } 
        else if (computerSelection === 'ROCK'){
            
            return ('You Win, Paper beats Rock');
        }
    }

    //Check for case when Player Chooses Scissors
    else{
        if (computerSelection === 'ROCK'){
            
            return ('You Lose!, Rock beats Scissors');
        }

        else if (computerSelection === 'PAPER'){
            
            return ('You Win! Scissors beats Paper');
        }

    }

    //Calls the recursively in Case Of Ties
    playRound("rock", getComputerChoice())

    

    
}

playRound("rock",getComputerChoice());