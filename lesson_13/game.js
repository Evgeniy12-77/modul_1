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

console.log(num_1);

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
      'Вы ввели неверные данные';
   }
   run();
};
run();



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
