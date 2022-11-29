'use strict'


let input;
const random = Math.floor(Math.random() * 100);

  const  generateNum1= () => {
  input = +prompt('Введите число!');
  if (isNaN(input)) {
    alert('Введи чило!');
  } else if (input > random) {
    alert('Меньше!');
  } else if (input < random) {
    alert('Больше!');
  } else if (input === random) {
    alert ('Правильно!');
    if (confirm(`Продолжить игру?`)) {
    } else { 
      return;
    }
  }
  generateNum1();
  };

  generateNum1();

    
