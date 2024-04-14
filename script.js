// CREATE function getComputerChoice with no arguments
function getComputerChoice() {
  // RETURN randomly 'rock', 'paper' or 'scissors'
  moves = ['rock', 'paper', 'scissors']
  return moves[Math.floor(Math.random()*moves.length)]
}
// CREATE function playRound with arguments playerSelection and computerSelection
  // IF playerSelection is equal to computerSelection
    // RETURN text saying the result is a draw
  // IF playerSelection beats computerSelection
    // RETURN text saying player won and what beat what in this case
  // IF computerSelection beats playerSelection
      // RETURN text saying player lost this round and what beats what in this case
// CREATE function playGame with no arguments
  // INSTANTIATE variable playerScore of type integer with the value of 0
  // INSTANTIATE variable computerScore of type integer with the value of 0
  // WHILE playerScore is less than 5 or computerScore is less than 5
    // INSTANTIATE variable playerSelection
    // WHILE playerSelection isn't 'rock', 'paper', or scissors
      // SET playerSelection value to GET player input with message asking for their choice of move in lower case
    // INSTANTIATE a variable result of type string with the value of RETURN of playRound with the arguments playerSelection and RETURN of getComputerChoice
    // IF result contains 'won'
      // INCREMENT playerScore by 1
    // IF result contains 'lost'
      // INCREMENT computerScore by 1
    // OUTPUT result, player score and computer score
  // IF playerScore is equal to 5
    // OUTPUT player won message
  // IF computerScore is equal to 5
    // OUTPUT player lost message
// INVOKE playGame