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
console.log (getComputerChoice())

function getHumanChoice(answer) {             // find a way to record human input on per round basis
    
}

// find a way to keep score
    // Create logic loop for paper beats rock, rock beats scissors, and scissors beats paper
    // Compare human input vs computer choice and determine winner  