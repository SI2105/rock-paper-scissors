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
        
            return ('You Lose! Paper beats Rock'),false;
        }

        else if (computerSelection === 'SCISSORS'){
            
            return('You Win, Rock beats Scissors'),true;
        }
    }

    //Check for case when Player Chooses Paper
    else if(playerSelection === 'PAPER'){
        if (computerSelection === 'SCISSORS'){
            
            return ('You Lose!, Scissors beats Paper'),false;
        } 
        else if (computerSelection === 'ROCK'){
            
            return ('You Win, Paper beats Rock'),true;
        }
    }

    //Check for case when Player Chooses Scissors
    else if (playerSelection === 'SCISSORS'){
        if (computerSelection === 'ROCK'){
            
            return ('You Lose!, Rock beats Scissors'),false;
        }

        else if (computerSelection === 'PAPER'){
            
            return ('You Win! Scissors beats Paper'),true;
        }

    }

    //Calls the recursively in Case Of Ties Or invalid input
    playRound(getPlayerChoice("Enter choice again"), getComputerChoice())

    

    
}
function getPlayerChoice(string){
    PlayerChoice = prompt(string);
    return PlayerChoice;
}
function game(){
    //Function runs a best-of-five game that keeps 
    //score and reports a winner or loser at the end.
    let playerwins = 0;
    let compwins = 0;

    for (let i = 0; i<5; i++ ){
        //Loops for 5 rounds
        let stringresult, boolresult = playRound(getPlayerChoice("Please enter your choice for Round: " + (i+1)), getComputerChoice())
        if (boolresult){
            playerwins += 1;
        }

        else{
            compwins += 1;
        }
        console.log(stringresult)
    }

    console.log(`Player Won: ${playerwins} rounds
    Computer Won: ${compwins} rounds
    `)

    if(playerwins < compwins){
        console.log('Unfortunately Computer Won this game.\n Better luck next time.')
    }
    else{
        console.log('Congrats Player Won.')
    }
}



game();