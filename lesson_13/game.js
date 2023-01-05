'use strict';

const gameRus = ['камень', 'ножницы', 'бумага'];

function getRandomIntInclusive(min, max) {
   min = Math.ceil(0);
   max = Math.floor(2);
   return Math.floor(Math.random() * (max - min + 1) + min)
};

getRandomIntInclusive(0,2)
const num = getRandomIntInclusive(0, 2);
const num_1 = gameRus[num];
console.log(num);
console.log(gameRus.indexOf('ножницы'))

const ansver = () => {
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
         alert ('Вы проиграли');
      }
      if (num > ansver_1) {
         alert ('Вы выиграли');
      }
   };
   game_9();
};
ansver();

//

//console.log(num_1);


/*

const result = {
   player: 0,
   computer: 0,
}
const run = () => {
   let input = prompt('камень, ножницы, бумага?');
   if ((num_1 === 'камень' && input === 'камень')
   ||(num_1 === 'ножницы' && input === 'ножницы')
   ||(num_1 === 'бумага' && input === 'бумага')) {
      alert ('Ничья');
   }  if ((num_1 === 'ножницы' && input === 'камень')
   || (num_1 === 'бумага' && input === 'ножницы')) {
      alert('Вы выиграли');
   }  if ((num_1 === 'камень' && input === 'ножницы')
   || (num_1 === 'ножницы' && input === 'бумага')) {
   alert('Вы проиграли');
   } else {
      alert('Вы ввели неверные данные');
   };
   input = gameRus.indexOf();
   run();
};
run();
result.player = input;
result.computer = num;
console.log(result);




//window.start.game;
/*

const game = () => {
   
   
return function start() {
if ((play === 0 && comp === 1) 
|| (play === 1 && comp === 2 )
|| (play === 2 && comp === 2)) {
   alert ('Вы выйграли!');
}  else {
   alert ('Вы проиграли!');
} } 
game()
};
*/
