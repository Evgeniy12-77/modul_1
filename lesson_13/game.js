'use strict';
window.start = (() => {

const gameRus = ['камень', 'ножницы', 'бумага'];

function getRandomIntInclusive(min, max) {
   min = Math.ceil(0);
   max = Math.floor(2);
   return Math.floor(Math.random() * (max - min + 1) + min)
};
getRandomIntInclusive(0,2)
const num = getRandomIntInclusive(0, 2);
gameRus[num];

const game = () => {
return function start() {
   let input = prompt('Камень, ножницы, бумага?');
   if ((num === 0 && input === 'камень')
   ||(num === 1 && input === 'ножницы')
   ||(num === 2 && input === 'бумага')) {
      alert ('Ничья');
   }  if ((num === 1 && input === 'камень')
   || (num === 2 && input === 'ножницы')) {
      alert('Вы выиграли');
   }  if ((num === 0 && input === 'ножницы')
   || (num === 1 && input === 'бумага')) {
   alert('Вы проиграли');
   } else {     
   }  
};
};

window.start.game;
/*


const result = {
   player: 0,
   computer: 0,
   };

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
