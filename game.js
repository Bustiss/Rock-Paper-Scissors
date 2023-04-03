const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput
  } else {
    console.log('Invalid Choice my friend')
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
  if (userChoice === computerChoice) {
    return "Tie Game"
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    return 'Computer Won'
  } else {
    return "User Won"
  }

  if (userChoice === 'paper' && computerChoice === 'scissors') {
    return 'Computer Won'
  } else {
    return 'User Won'
  } 

  if (userChoice === 'scissors' && computerChoice === 'rock') {
    return 'Computer Won'
  } else {
    return 'User Won'
  }

  if (userChoice === 'bomb') {
    return 'User WINS'
  }
}

const playGame = (input) => {
  const userChoice = getUserChoice(input) 
  console.log('You threw: ' + userChoice)
  const computerChoice = getComputerChoice()
  console.log('Computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

//call playGame function
playGame('paper')
