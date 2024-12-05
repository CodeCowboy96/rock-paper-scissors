function getComputerChoice() {    // Get computer to make a random choice of rock, paper, or scissors  
    let randomNumber = Math.floor(Math.random() * 9) + 1;    //Set a value for each paper, rock, and scissors such that there's an even chance any one is picked
    if (randomNumber >= 1 && randomNumber <= 3) {                // Use number generator to pick a number between 1 and 9
        return "rock";                                                // 1-3= rock 4-6=paper 7-9=scissors
    } else if (randomNumber >= 4 && randomNumber <= 6) {
        return "paper";
    } else {
        return "scissors";
    }                            
}




function getHumanChoice() {             // find a way to record human input on per round basis
    let choice;
        while (true) {
            choice=prompt("Please enter rock, paper, or scissors").toLowerCase();

            if (choice === "rock" || choice === "paper" || choice === "scissors") {
                return choice;
            }
            alert ("Invalid input! Please try again.")       // Needs to trigger invalid statement if user answer is not rock, paper or scissors
        }
}

let humanScore = 0
let computerScore = 0  // find a way to keep score


function playRound(humanChoice, computerChoice) {        // Create logic loop for paper beats rock, rock beats scissors, and scissors beats paper
    if (humanChoice === computerChoice) {                   // Compare human input vs computer choice and determine winner 
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

//call the playround function 5 times to play game
  function playGame() {
    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        console.log(`Round ${i + 1}:`);
        console.log(`Computer chose: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Current score - You: ${humanScore}, Computer: ${computerScore}`);
        console.log('------------------------');
    }
    
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: You ${humanScore}, Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins the game! Final score: Computer ${computerScore}, You ${humanScore}`);
    } else {
        console.log(`It's a tie! Final score: You ${humanScore}, Computer ${computerScore}`);
    }
}

// Call the function to start the game
playGame();
                    