'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 You guessed right!';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 10;
*/

const checkBtn = document.querySelector('.check');
const scoreElem = document.querySelector('.score');
const messageElem = document.querySelector('.message');
const numberElem = document.querySelector('.number');
const highscoreElem = document.querySelector('.highscore');
const resetBtn = document.querySelector('.reset');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
// console.log(secretNumber);

document.querySelector('.again').addEventListener('click', function () {
  document.location.reload();
});

document.querySelector('.guess').addEventListener('keyup', function () {
  if (Number(document.querySelector('.guess').value) > 20) {
    document.querySelector('.guess').value = 20;
  } else if (Number(document.querySelector('.guess').value) < 1) {
    document.querySelector('.guess').value = 1;
  }
});

checkBtn.addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);

  if (!guessedNumber) {
    messageElem.textContent = '❌ Invalid Number!';
  } else if (guessedNumber < secretNumber) {
    if (score > 1) {
      score--;
      messageElem.textContent = '😉 Try guessing larger!';
      scoreElem.textContent = score;
    } else {
      messageElem.textContent = '😭 You lose, Play Again!';
      scoreElem.textContent = 0;
    }
  } else if (guessedNumber > secretNumber) {
    if (score > 1) {
      score--;
      messageElem.textContent = '😀 Try guessing smaller!';
      scoreElem.textContent = score;
    } else {
      messageElem.textContent = '😭 You lose, Play Again!';
      scoreElem.textContent = 0;
    }
  } else {
    messageElem.textContent = '🎉 You guessed it right!';
    numberElem.textContent = secretNumber;
    document.body.style = 'background-color: #66B367';
    numberElem.style = 'width: 30rem';

    let newScore = score;
    if (newScore >= Number(highscoreElem.textContent)) {
      highscoreElem.textContent = newScore;
    }
  }
});

resetBtn.addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').focus();
});
