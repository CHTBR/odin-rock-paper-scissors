const rockImage = {
  src: "img/rock.png",
  alt: "An image of a grey circle representing rock."
}
const paperImage = {
  src: "img/paper.png",
  alt: "An image of a white square representing paper."
}
const scissorsImage = {
  src: "img/scissors.png",
  alt: "An image of a red triangle representing scissors."
}

const display = document.querySelector("#display");
const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", () => {
  display.removeChild(startButton);
  display.classList.add("choice");
  createMoveChoiceMenu();
});

function createMoveChoiceMenu() {
  const images = [rockImage, paperImage, scissorsImage]
  const buttonTextsAndIds = ["Rock", "Paper", "Scissors"]
  for (let i = 0; i < 3; i++) {
    const container = document.createElement("div");
    container.classList.add("vertical-container");
    display.appendChild(container);
    const image = returnImageElement(images[i]["src"], images[i]["alt"]);
    container.appendChild(image);
    const button = returnButtonElement(buttonTextsAndIds[i], "choice", buttonTextsAndIds[i].toLowerCase());
    container.appendChild(button);
  }
}

function returnButtonElement(textContent, className, idName) {
  const button = document.createElement("button");
  button.textContent = textContent;
  button.classList.add(className);
  button.setAttribute("id", idName);
  return button;
}

function returnImageElement(src, altText) {
  const image = document.createElement("img");
  image.setAttribute("src", src);
  image.setAttribute("alt", altText);
  return image;
}

/*
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
*/