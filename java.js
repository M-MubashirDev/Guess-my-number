`use strict`;
// document.querySelector('.no').textContent = 40;
// document.querySelector('.correct-num').textContent = 'correct-number';
// document.querySelector('.entered').textContent = 120;
// document.querySelector('.entered-highscore').textContent = 12;
// document.querySelector('.number1').textContent = 12;
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let gamescore = 20;
let highscores = 0;
document.querySelector('.btn1').addEventListener('click', function () {
  document.querySelector('.input-num').value = '';
  document.querySelector('.no').textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.correct-num').textContent = 'start guessing......';
  document.querySelector('body').style.backgroundColor = 'rgb(61, 60, 60)';
});
document.querySelector('.btn').addEventListener('click', function () {
  const savednumber = Number(document.querySelector('.input-num').value);
  console.log(savednumber);
  if (!savednumber) {
    document.querySelector('.correct-num').textContent = 'no number';
  } else if (secretnumber === savednumber) {
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('.correct-num').textContent = '🎉correct number';
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (secretnumber > savednumber) {
    document.querySelector('.correct-num').textContent = 'too low';
    if (gamescore > 0) {
      gamescore--;
      document.querySelector('.score').textContent = gamescore;
    } else if (gamescore === 0) {
      document.querySelector('.score').textContent = gamescore;
      document.querySelector('.correct-num').textContent = 'you lost';
    }
  } else if (secretnumber < savednumber) {
    document.querySelector('.correct-num').textContent = 'too high';
    if (gamescore > 0) {
      gamescore--;
      document.querySelector('.score').textContent = gamescore;
    } else if (gamescore === 0) {
      document.querySelector('.score').textContent = gamescore;
      document.querySelector('.correct-num').textContent = 'you lost';
    }
  }
});
