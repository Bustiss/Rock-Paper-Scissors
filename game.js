let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Invalid Choice my friend');
  }
}

const getComputerChoice = () => {
  let compChoice = Math.floor(Math.random() * 3)
  switch (compChoice) {
    case 0:
    return 'rock'
    case 1:
    return 'paper'
    case 2:
    return 'scissors'
  }
}

const determineWinner = (userChoice, computerChoice) => {
  switch (userChoice) {
    case computerChoice:
      return "Tie Game";
    case 'rock':
      return computerChoice === 'paper' ? 'Computer Won' : 'User Won';
    case 'paper':
      return computerChoice === 'scissors' ? 'Computer Won' : 'User Won';
    case 'scissors':
      return computerChoice === 'rock' ? 'Computer Won' : 'User Won';
    case 'bomb':
      return 'User WINS';
    default:
      return 'Invalid user choice';
  }
}

const playGame = (input) => {
  const userChoice = getUserChoice(input);
  console.log('You threw: ' + userChoice);
  const computerChoice = getComputerChoice();
  console.log('Computer threw: ' + computerChoice);
  const result = determineWinner(userChoice, computerChoice);
  
  document.getElementById('results').innerHTML = result;
  document.getElementById('computerChoice').innerHTML = computerChoice.toUpperCase();
}

rock.addEventListener('click', function() {
  playGame('rock');
});

paper.addEventListener('click', function() {
  playGame('paper');
});

scissors.addEventListener('click', function() {
  playGame('scissors');
});
