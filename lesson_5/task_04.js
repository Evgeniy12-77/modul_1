'use strict'

// Функция с условиями

function calculate(sumGoods, numberGoods, promo = null) {
   let sum = sumGoods;

   // Первое условие, если сумма товаров 10 или больше 10
   if (numberGoods >= 10) {
      const countThreeProcent = sum * 0.03;
      console.log('больше 10 товаров ваша скидка ' + countThreeProcent);
   }
   // Второе условие, если сумма товаров превышает 30000
   if (sumGoods > 30000) {
      const difFerence = sum - 30000;
      const countFifteenProcent = difFerence * 0.15;      
      console.log('Больше 30000 ваша скидка ' + countFifteenProcent);
   }
   // Третье условие, если есть промокод
   if (promo === 'METHED') {
      const countTenProcent = sum * 0.10;
      console.log('Ваша скидка по промокоду ' + countTenProcent);
   }
   // Четвертое условие, если есть промокод и если сумма скидок больше 2000
   if (promo === 'G3H2Z1' && ((countThreeProcent + countFifteenProcent + countTenProcent) > 2000)) {
      const promo_500 = sum - 500;
      console.log('Ваша дополнительная скидка 500');
   }
};

calculate(100000, 30, 'METHED');