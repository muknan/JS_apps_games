'use strict';

const checkBtn = document.querySelector('.check');
const scoreElem = document.querySelector('.score');
const messageElem = document.querySelector('.message');
const numberElem = document.querySelector('.number');
const highscoreElem = document.querySelector('.highscore');
const resetBtn = document.querySelector('.reset');
const guessField = document.querySelector('.guess');

const initMessage = messageElem.textContent;
const initNumber = numberElem.textContent;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  scoreElem.textContent = score;
  messageElem.textContent = initMessage;
  numberElem.textContent = initNumber;
  document.body.style.backgroundColor = '';
  numberElem.style.width = '';
  guessField.value = '';
  guessField.focus();
});

guessField.addEventListener('keyup', function () {
  if (Number(guessField.value) > 20) {
    guessField.value = 20;
  } else if (Number(guessField.value) < 1) {
    guessField.value = 1;
  }
});

checkBtn.addEventListener('click', function () {
  const guessedNumber = Number(guessField.value);

  if (!guessedNumber) {
    messageElem.textContent = '❌ Invalid Number!';
  } else if (guessedNumber !== secretNumber) {
    if (score > 1) {
      score--;
      messageElem.textContent =
        guessedNumber > secretNumber
          ? '😀 Try guessing smaller!'
          : '😉 Try guessing larger!';
      scoreElem.textContent = score;
    } else {
      messageElem.textContent = '😭 You lose, Play Again!';
      scoreElem.textContent = 0;
    }
  } else {
    messageElem.textContent = '🎉 You guessed it right!';
    numberElem.textContent = secretNumber;
    document.body.style.backgroundColor = '#51A65B';
    numberElem.style.width = '30rem';

    let newScore = score;
    if (newScore >= Number(highscoreElem.textContent)) {
      highscoreElem.textContent = newScore;
    }
  }
});

resetBtn.addEventListener('click', function () {
  guessField.value = '';
  guessField.focus();
});
