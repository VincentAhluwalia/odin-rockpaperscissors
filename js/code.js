function getComputerChoice(){
    let choice1 = 'Rock';
    let choice2 = 'Paper';
    let choice3 = 'Scissors';
    let randomNum = Math.floor(Math.random()*100)
    if(randomNum >= 66){
        return choice1;
    }else if(randomNum <= 33){
        return choice2;
    }else{
        return choice3;
    }
}

const computerSelection = getComputerChoice();

function getPlayerChoice(){
    let playerInput = prompt("Rock, Paper or Scissors?");
    if(playerInput.toUpperCase() == "ROCK"){
        return playerInput;
    }else if(playerInput.toUpperCase() == "PAPER"){
        return playerInput;
    }else if(playerInput.toUpperCase() == "SCISSORS"){
        return playerInput;
    }else{
        alert("Please input either Rock, Paper or Scissors");
    }
}

const playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection){
    let upperCasePlayer = playerSelection.toUpperCase();
    let upperCaseComputer = computerSelection.toUpperCase();
    let tie = "It's a tie";
    let victory = "You win!"
    let defeat = "You lose!"
    if(upperCaseComputer == "ROCK" && upperCasePlayer == "ROCK"){
        return tie;
    }else if(upperCaseComputer == "ROCK" && upperCasePlayer == "PAPER"){
        return victory;
    }else if(upperCaseComputer == "ROCK" && upperCasePlayer == "SCISSORS"){
        return defeat;
    }else if(upperCaseComputer == "PAPER" && upperCasePlayer == "PAPER"){
        return tie;
    }else if(upperCaseComputer == "PAPER" && upperCasePlayer == "ROCK"){
        return defeat;
    }else if(upperCaseComputer == "PAPER" && upperCasePlayer == "SCISSORS"){
        return victory;
    }else if(upperCaseComputer == "SCISSORS" && upperCasePlayer == "SCISSORS"){
        return tie;
    }else if(upperCaseComputer == "SCISSORS" && upperCasePlayer == "ROCK"){
        return victory;
    }else if(upperCaseComputer == "SCISSORS" && upperCasePlayer == "PAPER"){
        return defeat;
    }
}

function game(){
    
}

console.log(computerSelection)
console.log(playRound(playerSelection,computerSelection))