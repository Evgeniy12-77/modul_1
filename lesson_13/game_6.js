'use strict'
const gameRus = ['камень', 'ножницы', 'бумага'];

   function getRandomIntInclusive(min, max) {
      min = Math.ceil(0);
      max = Math.floor(2);
        return Math.floor(Math.random() * (max - min + 1) + min)
   };
   getRandomIntInclusive(0, 2);

   const num = getRandomIntInclusive(0, 2);
   const num_1 = gameRus[num];
   
   console.log(gameRus[num]);
