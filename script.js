let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const restartButton_div = document.getElementById('restart');



function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertCase(anythingIwant) {
  if (anythingIwant === 'paper') return 'Paper';
  if (anythingIwant === 'scissors') return 'Scissors';
  return 'Rock';
}

function win(user, computer) {
  userScore++;
 
  userScore_span.innerHTML = userScore;
  const userName = ' (user)';
  const compName = ' (comp)';
  result_div.innerHTML = `<p>${convertCase(user)} beats ${convertCase(computer)}. You get a point &#9786 </p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('winningStyles');
  setTimeout(() => roundStatus.classList.remove('winningStyles'), 300);
}

function loses(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  const userName = ' (user)';
  const compName = ' (comp)';
  result_div.innerHTML = `<p>${convertCase(computer)} beats ${convertCase(user)}. Opponent gets a point 	&#128533 </p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('losingStyles');
  setTimeout(() => roundStatus.classList.remove('losingStyles'), 300);
}

function draw(user, computer) {
  result_div.innerHTML = `<p> No points, tie! &#128566 </p>`;
  const roundStatus = document.getElementById(user);
  roundStatus.classList.add('drawStyles');
  setTimeout(() => roundStatus.classList.remove('drawStyles'), 300);
}


var i = 0;   

function game(userChoice) {
  
  console.log(i); 
  if (userScore == 3 || computerScore === 3) {
    console.log("Game Over");

    if (userScore > computerScore){
      result_div.innerHTML = `YOU WIN!`;
    }
    if (userScore < computerScore) {
      result_div.innerHTML = `You lose this round`;
    }
  } else {
    
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'paperrock':
    case 'rockscissors':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'scissorsrock':
    case 'paperscissors':
      loses(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'scissorsscissors':
    case 'paperpaper':
      draw(userChoice, computerChoice);
      break;
  }
  }
}



function main() {
  rock_div.addEventListener('click', () => game('rock'));
  paper_div.addEventListener('click', () => game('paper'));
  scissors_div.addEventListener('click', () => game('scissors'));
}

main();