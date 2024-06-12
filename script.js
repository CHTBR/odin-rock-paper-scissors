function imgObject(id, src, alt) {
  obj = {};
  obj.id = id;
  obj.src = src;
  obj.alt = alt;
  obj.returnImageElement = function () {
    img = document.createElement("img");
    img.setAttribute("src", this.src);
    img.setAttribute("alt", this.alt);
    return img;
  };
  return obj;
}

const moveList = [
  new imgObject("rock", "img/rock.png", "An image of a grey circle representing rock."),
  new imgObject("paper", "img/paper.png", "An image of a white square representing paper."),
  new imgObject("scissors", "img/scissors.png", "An image of a red triangle representing scissors.")
]

const display = document.querySelector("#display");
const startButton = document.querySelector("#start-button");

let playerMove;
let computerMove;

startButton.addEventListener("click", event => {
  event.stopPropagation()
  display.removeChild(startButton);
  display.classList.add("choice");
  createMoveChoiceMenu();
});

function createMoveChoiceMenu() {
  for (let i = 0; i < 3; i++) {
    const container = document.createElement("div");
    container.classList.add("vertical-container");
    display.appendChild(container);
    const image = moveList[i].returnImageElement();
    container.appendChild(image);
    const button = returnButtonElement(moveList[i]["id"][0].toUpperCase()+moveList[i]["id"].slice(1), "choice", moveList[i]["id"]);
    container.appendChild(button);
  }
  display.addEventListener("click", function click(event) {
    if (event.target.type === 'submit') {
      display.classList.remove("choice")
      playerMove = event.target.id;
      display.removeEventListener("click", click);
      while (display.firstChild) {
        display.firstChild.remove();
      }
      createComparisonMenu();
    }
  })
}

function createComparisonMenu() {
  display.classList.add("comparison")
  let playerImg = moveList.find((obj) => obj["id"] === playerMove).returnImageElement();
  display.appendChild(playerImg)
  computerMove = returnComputerMove()
  let computerImg = moveList.find((obj) => obj["id"] === computerMove).returnImageElement();
  display.appendChild(computerImg)
}

function returnButtonElement(textContent, className, idName) {
  const button = document.createElement("button");
  button.textContent = textContent;
  button.classList.add(className);
  button.setAttribute("id", idName);
  return button;
}

function returnComputerMove() {
  let moveList = ['rock', 'paper', 'scissors'];
  return moveList[Math.floor(Math.random()*moveList.length)];
}

/*
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