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