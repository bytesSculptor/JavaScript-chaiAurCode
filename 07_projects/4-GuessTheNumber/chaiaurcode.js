const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
const inputNumber = document.querySelector('#guessField');
const submitBtn = document.querySelector("#subt");
const resetBtn = document.querySelector("#reset");

const result = document.querySelector(".resultParas");
const preGuess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const showResult = document.querySelector('.lowOrHi');

let prevGuess = [];
let playGame = true;
let numGuess = 1;

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const guessedNumber = parseInt(inputNumber.value);
        // console.log(guessedNumber);

        validateGuessNumber(guessedNumber);
        inputNumber.value = ''
    });
}

function validateGuessNumber(guessedNumber) {
    if (isNaN(guessedNumber)) {
        alert("Please Enter a number!!!")
    } else if (guessedNumber < 1 || guessedNumber > 100) {
        alert("Please enter a number between 1 and 100")
    } else {
        prevGuess.push(guessedNumber);
        // console.log(prevGuess);
        if (numGuess === 10) {
            displayWrongGuessNumber(guessedNumber);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        } else {
            displayWrongGuessNumber(guessedNumber);
            checkGuessNumber(guessedNumber);
        }
    }
}

function checkGuessNumber(guessedNumber) {
    if (guessedNumber === randomNumber) {
        displayMessage(`You guessed it right, the number is: ${guessedNumber}`);
        endGame();
        // console.log(`you guessed it right ${guessedNumber}`)
    } else if (guessedNumber < randomNumber) {
        displayMessage(`You guessed it low, guess again!!!`);
        // console.log("The no. is low")
    } else if (guessedNumber > randomNumber) {
        displayMessage(`You guessed it high, guess again!!!`);
        // console.log("The no. is high")
    }
}

function displayMessage(message) {
    showResult.innerHTML = `<h2>${message}</h2>`;

}

function displayWrongGuessNumber() {
    preGuess.innerHTML = prevGuess;
    numGuess++;
    lastResult.textContent = 11 - numGuess;
}

function endGame() {
    inputNumber.setAttribute('disabled', '');
    submitBtn.style.display = 'none';
    resetBtn.style.display = 'block';
    resetBtn.style.margin = '50px auto 0px auto';
    resetBtn.addEventListener('click', (e) => {
        console.log(-1)
    })
}


/*
ORIGINAL SOLUTION
##################################################################################################################################


let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
##################################################################################################################################
*/