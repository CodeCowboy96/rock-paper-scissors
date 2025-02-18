const container = document.querySelector("#container")
const buttons = document.querySelectorAll("button");
const scoreDisplay = document.createElement("div");
container.appendChild(scoreDisplay);

let humanScore = 0
let computerScore = 0  

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const humanSelection=(button.id);
        const computerSelection=getComputerChoice()
        const roundResult = playRound(humanSelection, computerSelection);

        displayResult(humanSelection, computerSelection, roundResult);
        updateScore();
      });
    });



function getComputerChoice() {      
    let randomNumber = Math.floor(Math.random() * 9) + 1;    
    if (randomNumber >= 1 && randomNumber <= 3) {                
        return "rock";                                                
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        return "paper";
    } else {
        return "scissors";
    }                     
        
}







function playRound(humanChoice, computerChoice) {        
       if (humanChoice === computerChoice) {                   
        return "It's a tie.";
    }
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        return humanScore++, `You win! ${humanChoice} beats ${computerChoice}`;
        
    } else {
        return computerScore++,`You lose! ${computerChoice} beats ${humanChoice}`;
        
        
    }
}
function displayResult(humanChoice, computerChoice, result) {
    const existingResultDiv = document.querySelector("#resultDiv");
    if (existingResultDiv) {
        existingResultDiv.remove();
    }

    const resultDiv = document.createElement("div");
    resultDiv.id = "resultDiv";
    
    const humanChoicePara = document.createElement("p");
    humanChoicePara.textContent = `You chose: ${humanChoice}`;
    resultDiv.appendChild(humanChoicePara);

    const computerChoicePara= document.createElement("p");
    computerChoicePara.textContent= `Computer chose: ${computerChoice}`;
    resultDiv.appendChild(computerChoicePara)

    const resultPara= document.createElement("p");
    resultPara.textContent= result;
    resultDiv.appendChild(resultPara)

    container.appendChild(resultDiv)
}


function updateScore() {
    scoreDisplay.textContent=`Score - You: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === 5 || computerScore === 5) {
        endGame ();
    } 
}


function endGame(){
    const gameOverDiv=document.createElement("div");

    const gameOverHeader=document.createElement("h2");
    gameOverHeader.textContent= "Game Over!";
    gameOverDiv.appendChild (gameOverHeader)

    const winnerPara=document.createElement("p");
    if (humanScore > computerScore) {
        winnerPara.textContent= "You win the game!"
    } else {
        winnerPara.textContent= "You lose, better luck next time!";
    }

    gameOverDiv.appendChild (winnerPara)

    container.appendChild (gameOverDiv)

    buttons.forEach(button => button.disabled = true);
}















  //function playGame() {
   // humanScore = 0;
   // computerScore = 0;
    
    //for (let i = 0; i < 5; i++) {
      //  const humanSelection = getHumanChoice();
      //const computerSelection = getComputerChoice();
        
       // console.log(`Round ${i + 1}:`);

        //console.log(`Computer chose: ${computerSelection}`);
        //console.log(playRound(humanSelection, computerSelection));
       // console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
        //console.log('------------------------');
    //}
    
    //console.log("Game Over!");
   // if (humanScore > computerScore) {
        //console.log(`You win the game! Final score: You ${humanScore}, Computer ${computerScore}`);
   // } else if (computerScore > humanScore) {
      //  console.log(`Computer wins the game! Final score: Computer ${computerScore}, You ${humanScore}`);
   // } else {
      //  console.log(`It's a tie! Final score: You ${humanScore}, Computer ${computerScore}`);
   // }
//}


//Change all console logs to DOM methods
//find a way to display running score
//display both computer and human choice each round


//playGame();
                    