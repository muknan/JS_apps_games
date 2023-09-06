'use strict';

// Selecting Elements
const scoreZero = document.getElementById('score--0');
const scoreOne = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');

const currentZero = document.getElementById('current--0');
const currentOne = document.getElementById('current--1');

// Declaring variables
let scores, currentScore, activePlayer, gameActive;

// Initializing values for starting condition
const initValues = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gameActive = 1;

  scoreZero.textContent = 0;
  scoreOne.textContent = 0;
  currentZero.textContent = 0;
  currentZero.textContent = 0;

  diceEl.classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
};

initValues();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (gameActive) {
    // Generating random dice roll
    const diceRoll = Math.trunc(Math.random() * 6 + 1);

    // Displaying hidden dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;

    if (diceRoll !== 1) {
      // Add dice to current score
      currentScore += diceRoll;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //  Switch to next player
      switchPlayer();
    }
  }
});

// Save score on pressing hold button
btnHold.addEventListener('click', function () {
  if (gameActive) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // Changing game state and stop the game when a player wins
      gameActive = 0;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initValues);
