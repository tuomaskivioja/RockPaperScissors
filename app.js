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
    else if (playerSelection==computerSelection) {
        return "It's a Draw!";
    }

  }

  function grandWinner() {
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
  let gameCounter = 0;
  const btns = document.querySelectorAll('.play');
  const yourScore = document.querySelector('#yourScore');
  const computerScore = document.querySelector('#computerScore');
  const gameCount = document.querySelector("#gameCount");

  btns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        const computerSelection = computerPlay();
        playerSelection = e.target.textContent.toLowerCase();
        gameCounter += 1
        let result = playRound(playerSelection, computerSelection);
        setTimeout(function() {alert('You played: '+playerSelection+'\n'
        +'Computer played: '+computerSelection+'\n'+'\n'+result+'\n'+'\n'+'Games left: '+(5-gameCounter))}, 0.3);
        gameCount.textContent = 5-gameCounter;
        computerScore.textContent = computerWinCounter;
        yourScore.textContent = playerWinCounter;
        setTimeout(function() {
            if(gameCounter==5) {
            alert(grandWinner()+'\n'
            +'Final Score: '+'You: '+playerWinCounter+'\n'
            +'Computer: '+computerWinCounter);
            gameCount.textContent = 5;
            computerScore.textContent = 0;
            yourScore.textContent = 0;
            playerWinCounter=0;
            computerWinCounter=0;
            gameCounter = 0;
            }
        }, 0.4)
    })
  })