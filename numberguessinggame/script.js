let randomNumber, totalGuesses, guessedNumbers;

//target html stuff
const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const guessesLeft = document.getElementById("guessesLeft");
const previousGuesses = document.getElementById("previousGuesses");
const restartButtton = document.querySelector("#restartButton");
const guessButton = document.getElementById("guessButton");

initGame();

restartButtton.addEventListener("click", initGame);

// run init

//right number to guess
function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  totalGuesses = 10;
  guessedNumbers = [];

  guessesLeft.textContent = `Guesses left: ${totalGuesses}`;

  feedback.textContent = "";
  previousGuesses.textContent = "";

  guessInput.disabled = false;
  guessButton.disabled = false;

  guessInput.value = "";

  restartButtton.style.display = "none";
}

//run checkguess function when hitting enter key as well as clicking the guess button

// check if guess is right
function checkGuess() {
  const userGuess = Number(guessInput.value);

  // record users previous guesses
  guessedNumbers.push(userGuess);

  previousGuesses.textContent = "previous guesses:" + guessedNumbers.join(", ");

  //reduse guesses left
  totalGuesses--;

  // update the totalguesses paragraph to be one less
  guessesLeft.textContent = `Guesses left ${totalGuesses}`;

  // Math.abs() to turn negative numbers into positive numbers
  if (Math.abs(userGuess - randomNumber) <= 5) {
    feedback.textContent = "You are getting quite close!";
  } else {
    feedback.textContent =
      userGuess < randomNumber ? "Guess is too low!" : "Guess is too high!";
  }
  // check if the guesses is correct

  if (userGuess === randomNumber) {
    feedback.textContent = `Congratulations you guessed correctly the number was ${randomNumber}`;
    endgame();
    return;
  }

  if (totalGuesses === 0) {
    feedback.textContent = `Game over! you dont have any guesses left. The number was ${randomNumber}`;
    endgame();
  }
}

function endgame() {
  guessInput.disabled = true;
  guessButton.disabled = true;
  restartButtton.Style.display = "inline-block";
}
