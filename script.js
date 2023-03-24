const hands = document.querySelectorAll('.hand');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

let playerScore = 0;
let computerScore = 0;

// Play game when player clicks on their hand
playerHand.addEventListener('click', () => {
  const computerChoice = computerPlay();
  const playerChoice = 'rock'; // Hardcoded for now
  const gameResult = playRound(playerChoice, computerChoice);
  updateHands(playerChoice, computerChoice);
  displayResult(gameResult);
});

// Generate computer's choice
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determine winner of the round
function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'tie';
  } else if (playerChoice === 'rock') {
    return computerChoice === 'paper' ? 'computer' : 'player';
  } else if (playerChoice === 'paper') {
    return computerChoice === 'scissors' ? 'computer' : 'player';
  } else if (playerChoice === 'scissors') {
    return computerChoice === 'rock' ? 'computer' : 'player';
  }
}

// Update hand images to reflect player and computer choices
function updateHands(playerChoice, computerChoice) {
  playerHand.style.backgroundImage = `url('https://i.imgur.com/9oHKPpE_${playerChoice}.png')`;
  computerHand.style.backgroundImage = `url('https://i.imgur.com/Ts9Y9FS_${computerChoice}.png')`;
}

// Display result of the round
function displayResult(result) {
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('result-container');
  const resultMessage = document.createElement('p');
  resultMessage.classList.add('result-message');
  if (result === 'player') {
    resultMessage.textContent = 'You win!';
    playerScore++;
  } else if (result === 'computer') {
    resultMessage.textContent = 'Computer wins!';
    computerScore++;
  } else {
    resultMessage.textContent = "It's a tie!";
  }
  resultContainer.appendChild(resultMessage);
  const scoreContainer = document.createElement('div');
  scoreContainer.classList.add('score-container');
  const playerScoreDisplay = document.createElement('p');
  playerScoreDisplay.classList.add('player-score');
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  const computerScoreDisplay = document.createElement('p');
  computerScoreDisplay.classList.add('computer-score');
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  scoreContainer.appendChild(playerScoreDisplay);
  scoreContainer.appendChild(computerScoreDisplay);
  resultContainer.appendChild(scoreContainer);
  document.body.appendChild(resultContainer);
}
