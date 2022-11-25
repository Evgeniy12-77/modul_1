'use strict'


let randomNum = parseInt(Math.floor(Math.random() * 100));
function isNum (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
  function generateNum1() {
  let userNum = prompt('Введите число!');
  if (isNum(userNum)) {
    userNum += userNum;
  if (userNum > randomNum) {
    alert('Меньше!');
  } else if (userNum < randomNum) {
    alert('Больше!');
  } else if (userNum === randomNum) {
    alert ('Правильно!');
    return userNum;
  }
  } else {
    alert('Введи чило!');
  } return generateNum1();
}

generateNum1();
