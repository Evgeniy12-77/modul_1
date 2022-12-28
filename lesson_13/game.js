'use strict';
(() => {

const gameRus = ['камень', 'ножницы', 'бумага'];

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

result.computer = num;
const play = result.player = prompt('камень, ножницы, бумага?');

return function start() {
if(num === 'камень' && play === 'камень') {
   alert('Ничья');
}
if(num === 'камень' && play === 'ножницы') {
   alert('Вы проиграли');
}
if(num === 'камень' && play === 'бумага') {
   alert('Вы выиграли');
}
if(num === 'ножницы' && play === 'камень') {
   alert('Вы выиграли');
}
if(num === 'ножницы' && play === 'бумага') {
   alert('Вы проиграли');
}
if(num === 'ножницы' && play === 'ножницы') {
   alert('Ничья');
}
if(num === 'бумага' && play === 'камень') {
   alert('Вы проиграли');
}
if(num === 'бумага' && play === 'ножницы') {
   alert('Вы выиграли');
}
if(num === 'бумага' && play === 'бумага') {
   alert('Ничья');
}
};
};
window.GMA() = game;
});


