'use strict';
window.start = (() => {
   const gameRus = ['камень', 'ножницы', 'бумага'];

   function getRandomIntInclusive(min, max) {
      min = Math.ceil(0);
      max = Math.floor(2);
        return Math.floor(Math.random() * (max - min + 1) + min)
   };
   getRandomIntInclusive(0, 2);

   const num = getRandomIntInclusive(0, 2);
   gameRus[num];

   const result = {
   
   userInc: 0,
   botInc: 0,
   language: {
            'en': [
            'Player wins!', 'Computer wins!', 'Draw', 'Select',
            'User', 'Computer', 'Are you sure?', 'Results',
            ],
            'ru': [
            'Вы выиграли', 'Вы проиграли', 'Ничья', 'Выберите',
            'Пользователь', 'Компьютер', 'Хотите выйти?', 'Результаты',
            ],
      }
   };

    // Your Code
   const getAnswer = () => {
      console.log();
   }

   const run = () => {
      console.log();
   }

    // Results
   const game = () => {
      console.log(`Computer: ${result?.player || 0} Bot: ${result?.computer || 0}`);
   };
   return {
      game,
   };
})();

window.start.game();