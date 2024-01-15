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

    let resultarea = document.querySelector('.result');
    let result = document.createElement('p')
    resultarea.appendChild(result)
    let computerpoint = document.querySelector('#computer');
    let playerpoint = document.querySelector('#player');


    //Check for case when Player Chooses Rock
    if(playerSelection === 'ROCK'){
        if(computerSelection === 'PAPER'){

            result.textContent = 'You Lose! Paper beats Rock' ;
            let score = computerpoint.textContent; 
            score++;
            computerpoint.textContent = score;
        }   

        else if (computerSelection === 'SCISSORS'){
            
            result.textContent = 'You Win, Rock beats Scissors';
            let score = computerpoint.textContent; 
            score++;
            playerpoint.textContent = score;
        }
    }

    //Check for case when Player Chooses Paper
    else if(playerSelection === 'PAPER'){
        if (computerSelection === 'SCISSORS'){
            
            result.textContent = 'You Lose!, Scissors beats Paper';
            let score = computerpoint.textContent; 
            score++;
            computerpoint.textContent = score;
        } 
        else if (computerSelection === 'ROCK'){
            
            result.textContent ='You Win, Paper beats Rock';
            let score = computerpoint.textContent; 
            score++;
            playerpoint.textContent = score;
        }
    }

    //Check for case when Player Chooses Scissors
    else if (playerSelection === 'SCISSORS'){
        if (computerSelection === 'ROCK'){
            
            result.textContent = 'You Lose!, Rock beats Scissors';
            let score = computerpoint.textContent; 
            score++;
            computerpoint.textContent = score;
        }

        else if (computerSelection === 'PAPER'){
            
            result.textContent = 'You Win! Scissors beats Paper';
            let score = computerpoint.textContent; 
            score++;
            playerpoint.textContent = score;
        }
        

    }

    //Calls the recursively in Case Of Ties Or invalid input
    if(playerpoint.textContent == 5){
        alert('Player Won')
        location.reload()
    }
    else if(computerpoint.textContent == 5){
        alert('Computer Won')
        location.reload()
    }

    
}
function game(){
    //Function runs a best-of-five game that keeps 
    //score and reports a winner or loser at the end.
    let playerwins = 0;
    let compwins = 0;

    let buttoncontainer = document.querySelector('.buttons');
    let buttons = buttoncontainer.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => playRound(button.value,getComputerChoice()))
    })

    let playerpoint = document.querySelector('#player');

    

    // console.log(`Player Won: ${playerwins} rounds
    // Computer Won: ${compwins} rounds
    // `)

    // if(playerwins < compwins){
    //     console.log('Unfortunately Computer Won this game.\n Better luck next time.')
    // }
    // else{
    //     console.log('Congrats Player Won.')
    // }
}



game();