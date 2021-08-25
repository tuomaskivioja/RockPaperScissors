function computerPlay() {
    let getInt = Math.floor(Math.random()*3)
    if (getInt == 2) {
        return 'scissors';
    } 
    else if (getInt == 1) {
        return 'rock';
    }
    else {
        return 'paper';
    }

}
function playRound(playerSelection, computerSelection) {
    playerSelection=playerSelection.toLowerCase();
    const rock = 'rock'
    const paper = 'paper'
    const scissors = 'scissors'
    if (playerSelection==rock && computerSelection==paper) {
        computerWinCounter+=1;
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection==rock && computerSelection==scissors) {
        playerWinCounter+=1;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection==paper && computerSelection==rock) {
        playerWinCounter+=1;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection==paper && computerSelection==scissors) {
        computerWinCounter+=1;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection==scissors && computerSelection==rock) {
        computerWinCounter+=1;
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection==scissors && computerSelection==paper) {
        playerWinCounter+=1;
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection===computerSelection) {
        return "It's a Draw!";
    }

  }

  function game(numOfGames) {
      for(let i = 1; i<(numOfGames+1); i++) {
          const playerSelection = prompt('Round '+i+': What will you play?');
          const computerSelection = computerPlay();
          console.log(playRound(playerSelection, computerSelection));
      }
      if (playerWinCounter>computerWinCounter) {
          return 'You Are the WINNER!! Congratulations!!';
      }
      else if (playerWinCounter<computerWinCounter) {
        return 'You Lose! Better Luck Next Time!!';
    }
      else if (playerWinCounter==computerWinCounter) {
          return 'It\'s a Draw!! No Winner Here!';
      }
  }
  let playerWinCounter=0;
  let computerWinCounter=0;
  console.log(game(5));
  console.log('Final Score: '+playerWinCounter+' to '+computerWinCounter)