'use strict'

function getRandomIntInclusive(min, max) {
   min = Math.ceil(0);
   max = Math.floor(2);
   return Math.floor(Math.random() * (max - min + 1) + min)
};
getRandomIntInclusive(0,2);

let prog = getRandomIntInclusive(0,2);

const prog_1 = () => {
   let input = prompt('Камень, ножницы, бумага?');
   if ((prog === 0 && input === 'камень')
   ||(prog === 1 && input === 'ножницы')
   ||(prog === 2 && input === 'бумага')) {
      alert ('Ничья');
   }  if ((prog === 1 && input === 'камень')
   || (prog === 2 && input === 'ножницы')) {
      alert('Вы выиграли');
   }  if ((prog === 0 && input === 'ножницы')
   || (prog === 1 && input === 'бумага')) {
   alert('Вы проиграли');
   } else {
   return getRandomIntInclusive(0,2); 
   }   
   
   prog_1();
};
   prog_1();
   prog_1();

/*

   

   const input_1 = () => {
   
   if (input === 'камень') {
      input = 0;
   } 
   else if (input === 'ножницы') {
      input = 1;
   }
   else if (input === 'бумага') {
      input = 2;
   };
   return function game_1() {
   if (random === input) {
      alert('Ничья');
   }
   else if ((random === 0 && input === 1)
   || (random === 1 && input === 2)) {
      alert('Вы проиграли');
   }
   else if ((random === 1 && input === 0)
   || (random === 1 && input === 2)) {
      alert('Вы выиграли');
   };
};
};
input_1();
random_1();
*/

