// CREATE function getComputerChoice with no arguments
function getComputerChoice() {
  // RETURN randomly 'rock', 'paper' or 'scissors'
  moves = ['rock', 'paper', 'scissors'];
  return moves[Math.floor(Math.random()*moves.length)];
}
// CREATE function playRound with arguments playerSelection and computerSelection
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) { // IF playerSelection is equal to computerSelection
    // RETURN text saying the result is a draw
    return `A draw. Both you and the computer played ${playerSelection}.`;
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') // IF playerSelection beats computerSelection
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    // RETURN text saying player won and what beat what in this case
    return `You won. After all, ${playerSelection} beats ${computerSelection}.`;
  } else { // IF computerSelection beats playerSelection
      // RETURN text saying player lost this round and what beats what in this case
      return `You lost. Sadly ${playerSelection} is beaten by ${computerSelection}.`;
  }
} 
// CREATE function playGame with no arguments
function playGame() {
  let playerScore = 0; // INSTANTIATE variable playerScore of type integer with the value of 0
  let computerScore = 0; // INSTANTIATE variable computerScore of type integer with the value of 0
  // WHILE playerScore is less than 5 AND computerScore is less than 5
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection; // INSTANTIATE variable playerSelection
    // WHILE playerSelection isn't 'rock', 'paper', AND scissors
    while (playerSelection != 'rock'
          && playerSelection != 'paper'
          && playerSelection != 'scissors') {
      // SET playerSelection value to GET player input with message asking for their choice of move in lower case
      playerSelection = prompt('What do you play? Rock, paper or scissors?', '').toLowerCase();
    }
    result = playRound(playerSelection, getComputerChoice()) // INSTANTIATE a variable result of type string with the value of RETURN of playRound with the arguments playerSelection and RETURN of getComputerChoice
    if (result.includes('won')) { // IF result includes 'won'
      // INCREMENT playerScore by 1
      playerScore++;
    } else if (result.includes('lost')) { // IF result includes 'lost'
      // INCREMENT computerScore by 1
      computerScore++;
    }
    // OUTPUT result, player score and computer score
    console.group();
    console.log(result);
    console.log(`Your score is ${playerScore}.`);
    console.log(`Computer score is ${computerScore}.`);
    console.groupEnd();
  if (playerScore === 5) { // IF playerScore is equal to 5
    // OUTPUT player won message
    console.log('You have won.');
  } else { // IF computerScore is equal to 5
    // OUTPUT player lost message
    console.log('You have lost.');
  } } }
// INVOKE playGame
playGame();