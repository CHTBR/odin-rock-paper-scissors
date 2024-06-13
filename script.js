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

let playerMove;
let playerScore;
let computerMove;
let computerScore;

createStartMenu();

function createStartMenu() {
  const startButton = document.createElement("button");
  startButton.textContent = "START";
  startButton.setAttribute("id", "#start-button");
  display.appendChild(startButton);
  startButton.addEventListener("click", event => {
    event.stopPropagation();
    playerScore = 0;
    computerScore = 0;
    display.removeChild(startButton);
    display.classList.add("choice");
    createMoveChoiceMenu();
  });
}

function createMoveChoiceMenu() {
  removeElemnetsFromDisplay();
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
      playerMove = moveList.find(move => move["id"] === event.target.id);
      display.removeEventListener("click", click);
      removeElemnetsFromDisplay();
      createComparisonMenu();
    }
  })
}

function createComparisonMenu() {
  display.classList.add("comparison");
  let playerImg = playerMove.returnImageElement();
  display.appendChild(playerImg);
  computerMove = returnRandomMove();
  let computerImg = returnRandomMove().returnImageElement();
  display.appendChild(computerImg);
  computerMoveRevealSequence(computerMove, computerImg, 10, 0);
}

function computerMoveRevealSequence(computerMove, computerImage, waitTime, listIndex) {
  if (waitTime >= 600 && moveList[listIndex]["id"] === computerMove["id"]) {
    setTimeout(createScoreMenu, 2000);
    return;
  }
  waitTime += Math.floor(Math.random() * 75);
  listIndex += 1;
  if (listIndex > 2) {
    listIndex = 0;
  }
  computerImage.setAttribute("src", moveList[listIndex]["src"]);
  setTimeout(computerMoveRevealSequence, waitTime, computerMove, computerImage, waitTime, listIndex);
}

function createScoreMenu() {
  display.classList.remove("comparison");
  display.classList.add("result");
  removeElemnetsFromDisplay();
  evaluateRoundWinner()
  let scoreText = document.createElement("p");
  scoreText.classList.add("result")
  scoreText.textContent = String(playerScore) + "  :  " + String(computerScore);
  display.appendChild(scoreText);
}

function evaluateRoundWinner() {
  if ((playerMove["id"] === 'rock' && computerMove["id"] === 'scissors')
            || (playerMove["id"] === 'paper' && computerMove["id"] === 'rock')
            || (playerMove["id"] === 'scissors' && computerMove["id"] === 'paper')) {
    playerScore += 1;
  } else if (playerMove["id"] != computerMove["id"]) {
    computerScore += 1;
  }
  if (playerScore === 5) {
    setTimeout(createGameEndMenu, 3000, "YOU WON");
  } else if (computerScore === 5) {
    setTimeout(createGameEndMenu, 3000, "YOU LOST");
  } else {
    setTimeout(() => {
      display.classList.remove("result");
      display.classList.add("choice");
      createMoveChoiceMenu();
    }, 3000);
  }
}

function returnButtonElement(textContent, className, idName) {
  const button = document.createElement("button");
  button.textContent = textContent;
  button.classList.add(className);
  button.setAttribute("id", idName);
  return button;
}

function returnRandomMove() {
  return moveList[Math.floor(Math.random()*moveList.length)];
}

function createGameEndMenu(resultText) {
  display.classList.remove("result");
  display.classList.add("game-end");
  removeElemnetsFromDisplay();
  let endText = document.createElement("p");
  endText.classList.add("game-end");
  endText.textContent = resultText;
  display.appendChild(endText);
  setTimeout(() => {
    removeElemnetsFromDisplay();
    createStartMenu();
  }, 4000);
}

function removeElemnetsFromDisplay() {
  while (display.firstChild) {
    display.firstChild.remove();
  }
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