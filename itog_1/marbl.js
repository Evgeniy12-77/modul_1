'use strict'

const sharp = {
player_1: 5,
bot_1: 5,
};

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
  if (ansver_1 === 'ножницы') {
      ansver_1 = gameRus.indexOf('ножницы');
      console.log(ansver_1);
  }
  if (ansver_1 === 'бумага') {
      ansver_1 = gameRus.indexOf('бумага');
      console.log(ansver_1);
  };
  
  const game_9 = () => {
      if (num === ansver_1) {
        alert('Ничья');
      }
      if (num < ansver_1) {
        alert ('Вы проиграли')
        return play_3();
      }
      if (num > ansver_1) {
      alert ('Вы выиграли')
      return play_1();
      }
  };
  game_9();
  ansver();
};

const play_1 = () => {
  let user = Number(prompt('Загадайте количество шариков'));
  if(user <= 0 && user >= 10 && user != Number) {
    alert('Вы ввели некорректные данные, загадайте нужное количество шариков');
    return play_1();
  }
  
  alert ('Ваше количество шариков ' + user);

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

  function play_2() {
    let a = 'Бот угадал';
    let c = 'Бот не угадал';

  if ((bot_77 === 1 && user % 2 != 0) ||
  bot_77 === 2 && user % 2 === 0) {
    sharp.player_1 = sharp.player_1 - user,
    sharp.bot_1 = sharp.bot_1 + user, alert (a),
    console.log(sharp);
  }
  if ((bot_77 === 1 && user % 2 === 0) || 
  (bot_77 === 2 && user % 2 != 0)) {
    sharp.player_1 = sharp.player_1 + user, 
      sharp.bot_1 = sharp.bot_1 - user, alert(c),
      console.log(sharp);
  } 
  return proverka();
};
play_2();
play_3();
};


function play_3() {

  function getRandomIntInclusives(min, max) { 
  min = Math.ceil(1);
  max = Math.floor(sharp.bot_1);
  return Math.floor(Math.random() * (max - min + 1) + min) 
};
const bot_12 = getRandomIntInclusives(1, sharp.bot_1);
console.log(bot_12);

let ch = 'четное';
let nech = 'нечетное';
let player_12 = prompt('Какое число загадал бот? ' + ch + ' или ' + nech);
if ((player_12 === ch && bot_12 % 2 === 0) || 
(player_12 === nech && bot_12 % 2 != 0))  {
  sharp.player_1 = sharp.player_1 + bot_12, 
  sharp.bot_1 = sharp.bot_1 - bot_12, alert('Вы угадали');
}
if ((player_12 === ch && bot_12 % 2 != 0) ||
(player_12 === nech && bot_12 % 2 === 0)) {
  sharp.player_1 = sharp.player_1 - bot_12,
  sharp.bot_1 = sharp.bot_1 + bot_12,
  alert('Вы не угадали');
}
alert('Бот загадал ' + bot_12);
return proverka();
};


ansver();


//play_1();
play_1();

function proverka () {
  let k = sharp.player_1;
  let l = sharp.bot_1;
  if (k <= 0 && l >= 10) {
    alert('Игра завершена, вы проиграли');
  if (confirm(`Начать заново игру?`)) {
    } else { 
      return ansver();
    }
  } 
  else if (k >= 10 && l <= 0) {
    alert('Игра завершена, вы выиграли');
    if (confirm(`Начать заново игру?`)) {
    } else { 
      return ansver();
  } }
    else { return play_1();
  }
};
