
let randomNumber = Math.floor(  Math.random() * 50   ) + 1;



const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const lowOrHi = document.querySelector('.lowOrHi');










submit.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
});





function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than or equal to 1!');
    } else if (guess > 500) {
        alert('Please enter a number less than or equal to 500!');
    } else {
        checkGuess(guess);
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed correctly!');
    } else if (guess < randomNumber) {
        displayMessage('Too low! Try again!');
    } else {
        displayMessage('Too high! Try again!');
    }
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h1>${message}</h1>`;
}
