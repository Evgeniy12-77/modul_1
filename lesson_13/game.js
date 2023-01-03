'use strict';
(() => {

const gameRus = ['камень', 'ножницы', 'бумага'];

function getUserChoise () {
   let userChoise = prompt('Камень, ножницы, бумага?');
   if (userChoise === null) {
      return userChoise;
   }
   return parseInt(userChoise);
   };
getUserChoise();


function getRandomIntInclusive(min, max) {
   min = Math.ceil(0);
   max = Math.floor(2);
   return Math.floor(Math.random() * (max - min + 1) + min)
};
getRandomIntInclusive(0, 2);

const num = getRandomIntInclusive(0, 2);
gameRus[num];

const game = () => {
   const result = {
   player: 0,
   computer: 0,
   };
   
return function start() {
if ((play === 0 && comp === 1) 
|| (play === 1 && comp === 2 )
|| (play === 2 && comp === 2)) {
   alert ('Вы выйграли!');
}  else {
   alert ('Вы проиграли!');
} } 
};
window.DSI() = game;
});


