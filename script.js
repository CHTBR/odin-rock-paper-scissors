function getComputerChoice() {
  moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random()*moves.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `A draw. Both you and the computer played ${playerSelection}.`;
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors')
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return `You won. After all, ${playerSelection} beats ${computerSelection}.`;
  } else {
      return `You lost. Sadly ${playerSelection} is beaten by ${computerSelection}.`;
  }
} 

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection;
    while (playerSelection != 'rock'
          && playerSelection != 'paper'
          && playerSelection != 'scissors') {
      playerSelection = prompt('What do you play? Rock, paper or scissors?', '').toLowerCase();
    }
    result = playRound(playerSelection, getComputerChoice())
    if (result.includes('won')) {
      playerScore++;
    } else if (result.includes('lost')) {
      computerScore++;
    }
    console.group();
    console.log(result);
    console.log(`Your score is ${playerScore}.`);
    console.log(`Computer score is ${computerScore}.`);
    console.groupEnd();
  if (playerScore === 5) {
    console.log('You have won.');
  } else {
    console.log('You have lost.');
  } } }

playGame();