'use strict'

{
   
const nalog = Number(prompt('Введите сумму вашего дохода'));
nalog > 0;
const nalog1 = nalog * 0.13;
const nalog2 = (nalog - 15000) * 0.20;
const nalog3 = (nalog - 50000) * 0.30;

if (nalog <= 15000) {
   console.log (nalog1);
} else if (nalog > 15000 && nalog <= 50000) {
   console.log (nalog2); 
} else if (nalog > 50000) {
   console.log (nalog3); 
} else {
      console.log('Вы ввели неверные данные');
   }
};



