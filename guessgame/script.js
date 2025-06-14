'use strict';
/*
console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Correct Number! ❤️';
console.log(document.querySelector('.message').textContent);

//document.querySelector('.number').textContent = 11;
//document.querySelector('.score').textContent = 10;
//document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//event listener

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 20;
let highscore = 0;

const myButton = document.getElementById('check');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    //when there is no input
    displayMessage('⛔No number!');
  } else if (guess === secretNumber) {
    //when player wins
    displayMessage('❤️Correct number!❤️');
    backgroundColor('#60b347');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    myButton.classList.add('disabled');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //ternary operator
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣💥You lost the game!');
      document.querySelector('.score').textContent = score;
      myButton.classList.add('disabled');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  myButton.classList.remove('disabled');
  //location.reload(); //nu merge cu reload ca tre sa ment
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  backgroundColor('#d9aaea');
  document.querySelector('.number').style.width = '15rem';
  myButton.classList.add('enabled');
});
