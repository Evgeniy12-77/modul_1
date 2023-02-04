'use strict'

window.marbl = (() => {

const gameRus = ['камень', 'ножницы', 'бумага'];



const ansver = () => {

  function getRandomIntInclusive_1(min, max) {
    min = Math.ceil(0);
    max = Math.floor(2);
     return Math.floor(Math.random() * (max - min + 1) + min)
  };

  getRandomIntInclusive_1(0,2)
  const num = getRandomIntInclusive_1(0, 2);
  const num_1 = gameRus[num];
  console.log(num_1);
  console.log(gameRus.indexOf('ножницы'))

  let ansver_1 = prompt('камень, ножницы, бумага?');

  if (ansver_1 === 'камень') {
      ansver_1 = gameRus.indexOf('камень');
      console.log(ansver_1);
  }
  else if (ansver_1 === 'ножницы') {
      ansver_1 = gameRus.indexOf('ножницы');
      console.log(ansver_1);
  }
  else if (ansver_1 === 'бумага') {
      ansver_1 = gameRus.indexOf('бумага');
      console.log(ansver_1);
  }
  else {
    return ansver();
  }
  
  const game_Rps = () => {
      if (num === ansver_1) {
        alert('Ничья');
        return ansver();
        }        
      if (num < ansver_1) {
        alert ('Вы проиграли');
        return bot_Marbl();
        }        
      if (num > ansver_1) {
      alert ('Вы выиграли');
      return player_Marbl();
        }
  };
  game_Rps();

};

let user;

const sharp = {
  player_1: 5,
  bot_1: 5,
  };

const player_Marbl = () => {
  if(sharp.player_1 <= 0 || sharp.bot_1 <= 0) {
    sharp.player_1 = 5;
    sharp.bot_1 = 5;
  alert('Ваше количество шариков ' + sharp.player_1 + ' , у бота количество шариков ' + sharp.bot_1);
  }
  if(user > 0 || user <= 10 || user != 0) {
  user = Number(prompt('Загадайте количество шариков от ' + 1 + ' до ' + sharp.player_1));
  user === sharp.player_1; 
  alert(`Ваше количество шариков ${user}`);
  }

  if(user < 1 || user > sharp.player_1 || user === 0 || isNaN(user)) {
    alert('Вы ввели некорректные данные, загадайте нужное количество шариков');
    return player_Marbl();
  };

  console.log(user);

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min + 1) + min) 
  };

  const bot_77 = getRandomIntInclusive(1,2);

  if(bot_77 === 1) {
    alert('Бот считает, что вы загадали нечетное число');
  }
  if(bot_77 === 2) {
    alert('Бот считает, что вы загадали четное число');
  }
  console.log(bot_77);

    let a = 'Бот угадал';
    let c = 'Бот не угадал';

  if ((bot_77 === 1 && user % 2 != 0) ||
  bot_77 === 2 && user % 2 === 0) {
    sharp.player_1 = sharp.player_1 - user,
    sharp.bot_1 = sharp.bot_1 + user, 
    alert (a),
    alert('У вас осталось ' + sharp.player_1 + ' шариков, ' + 'у бота - ' + sharp.bot_1);
    if (sharp.player_1 <= 0 && sharp.bot_1 >= 10) {
    alert('У вас не осталось шариков, вы проиграли боту')
    if (confirm(`Начать заново игру?`)) {
      return ansver(); } 
      else { 
      return;
    }
    }
  }
  if ((bot_77 === 1 && user % 2 === 0) || 
  (bot_77 === 2 && user % 2 != 0)) {
    sharp.player_1 = sharp.player_1 + user, 
      sharp.bot_1 = sharp.bot_1 - user, alert(c),
      alert('У вас осталось ' + sharp.player_1 + ' шариков, ' + 'у бота - ' + sharp.bot_1);
        if (sharp.bot_1 <= 0 && sharp.player_1 >= 10) {
          alert('У бота не осталось шариков, вы выиграли')
          if (confirm(`Начать заново игру?`)) {
            return ansver(); } 
            else { 
            return;
          }  
        }
  }
  bot_Marbl();
};

let b;

function bot_Marbl() {
b = sharp.bot_1;
b != 0, b <= 10, b >= 0;
function getRandomIntInclusive(min, max) { 
  min = Math.ceil(1);
  max = Math.floor(b);
  return Math.floor(Math.random() * (max - min + 1) + min) 
};
const bot_12 = getRandomIntInclusive(1, b);
console.log(b);

let ch = 'четное';
let nech = 'нечетное';
alert('Ваше количество шариков ' + sharp.player_1 + ' , у бота количество шариков ' + sharp.bot_1);
let player_12 = prompt('Какое число загадал бот? ' + ch + ' или ' + nech);
if (ch != 'четное' || nech != 'нечетное') {
  alert('Введите корректное значение');
  return;
}
if ((player_12 === ch && bot_12 % 2 === 0) || 
(player_12 === nech && bot_12 % 2 != 0))  {
  sharp.player_1 = sharp.player_1 + bot_12, 
  sharp.bot_1 = sharp.bot_1 - bot_12, alert('Вы угадали, бот загадал ' + bot_12),
  alert('У вас осталось ' + sharp.player_1 + ' шариков, ' + 'у бота - ' + sharp.bot_1);
  if (sharp.player_1 >= 10 && sharp.bot_1 <= 0) {
    alert('У бота не осталось шариков, вы выиграли')
    if (confirm(`Начать заново игру?`)) {
      return ansver(); } 
      else { 
      return;
    }
  }
}
if ((player_12 === ch && bot_12 % 2 != 0) ||
(player_12 === nech && bot_12 % 2 === 0)) {
  sharp.player_1 = sharp.player_1 - bot_12,
  sharp.bot_1 = sharp.bot_1 + bot_12,
  alert('Вы не угадали, бот загадал ' + bot_12),
  alert('У вас осталось ' + sharp.player_1 + ' шариков, ' + 'у бота - ' + sharp.bot_1);
  if (sharp.player_1 <= 0 && sharp.bot_1 >= 10) {
    alert('У вас не осталось шариков, вы проиграли') 
    if (confirm(`Начать заново игру?`)) {
      return ansver(); } 
      else { 
      return;
    } 
  }
}
player_Marbl();
};

return ansver();

})();