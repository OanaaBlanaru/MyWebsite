'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); //this is another way to select by id
const currentSc0El = document.getElementById('current--0');
const currentSc1El = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

let scores,
  currentScore,
  activePlayer,
  playing,
  diceRolled,
  isHoldAllowed,
  dice;
//starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceRolled = false;
  isHoldAllowed = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  diceElement.classList.add('hidden');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  // Disable Hold button when switching players
  buttonHold.disabled = true;
  // Enable Hold button if the current player has rolled a number other than 1
  if (dice !== 1) {
    buttonHold.disabled = false;
  }
};
//rolling dice functionality
buttonRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    diceRolled = true;
    isHoldAllowed = true; // Set isHoldAllowed to true after the dice roll
    //3. Check for rolled 1 =>if true switch to player 2
    if (dice !== 1) {
      //Add dice to current score
      currentScore = currentScore + dice;
      //currentSc0El.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player
      switchPlayer();
    }
    buttonHold.removeAttribute('disabled'); // Enable the "Hold" button after rolling the dice
  }
});

buttonHold.addEventListener('click', function () {
  if (playing && diceRolled && isHoldAllowed) {
    //1. Add current score to active player's score
    scores[activePlayer] = scores[activePlayer] + currentScore;
    console.log(scores[activePlayer]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 10
    if (scores[activePlayer] >= 10) {
      //3 varianta a. Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove(`player--active`);
      document.querySelector('.winner-message').textContent = `Player ${
        activePlayer + 1
      } won !`;
    } else {
      //3 varianta b. Switch to next player
      switchPlayer();
    }
    isHoldAllowed = false; // Prevent further holds until the next dice roll
  }
});
buttonNew.addEventListener('click', function () {
  init();
  // Reseteaza mesajul la inceputul jocului
  document.querySelector('.winner-message').textContent = '';
});
