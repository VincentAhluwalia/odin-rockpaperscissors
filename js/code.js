function getComputerChoice(){
    let choice1 = "ROCK";
    let choice2 = "PAPER";
    let choice3 = "SCISSORS";
    let randomNumber = Math.floor(Math.random()*99);
    console.log(randomNumber);
    if(randomNumber > 66){
        return choice1;
    }else if(randomNumber >= 33 && randomNumber <= 66){
        return choice2;
    }else{
        return choice3;
    }
}

function getPlayerInput(){
    while(true){
        let playerInput = prompt().toUpperCase(); //toUpperCase is to make the input case-insensitive
        if(playerInput == "ROCK" || playerInput == "PAPER" || playerInput == "SCISSORS"){
            return playerInput;
            break;
        }else{
            alert("Wrong input! Please enter 'Rock', 'Paper' or 'Scissors'.")
        }  
    }
    
}

    let playerScore = 0;
    let computerScore = 0;

function playRound(){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerInput();
    console.log(computerSelection)
    console.log(playerSelection)
    let result;

    if(playerSelection == computerSelection){
        result = "tie";
    }
    else{
        if(playerSelection == "ROCK" && computerSelection == "SCISSORS"){
            result = "win";
        }else if(playerSelection == "PAPER" && computerSelection == "ROCK"){
            result = "win";
        }else if(playerSelection == "SCISSORS" && computerSelection == "PAPER"){
            result = "win";
        }else{
            result = "lose";
        }
    }

    if(result == "tie"){
        alert("Tie!")
        alert(`Current Score: Player: ${playerScore} vs Computer: ${computerScore}!`)
    }else if(result == "win"){
        playerScore++;
        alert(`PLAYER WINS! ${playerSelection} BEATS ${computerSelection}!` )
        alert(`Current Score: Player: ${playerScore} vs Computer: ${computerScore}!`)
    }else{
        computerScore++;
        alert(`COMPUTER WINS! ${computerSelection} BEATS ${playerSelection}`)
        alert(`Current Score: Player: ${playerScore} vs Computer: ${computerScore}!`)
    }
}

function game(){
    for(let i = 0;i < 5; i++){
        playRound()
    }
    if(playerScore > computerScore){
        alert("Player wins the match!")
    }else if(computerScore > playerScore){
        alert("Computer wins the match!")
    }else{
        alert("It's a tie! Nobody wins.")
    }
        
}
console.log(game())

