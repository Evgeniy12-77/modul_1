'use strict'

// Функция с условиями

function calculate(sumGoods, numberGoods, promo = null) {
   let sum_12 = sumGoods;

   if (numberGoods >= 10) {
   const threeProcent = sum_12 * 0.03;
   console.log("Ваша скидка составила " + threeProcent);
} 
if (sumGoods > 30000) {
   const fifteenProcent = (sum_12 - 30000) * 0.15;
   console.log("Ваша скидка составила " + fifteenProcent);
} 
if (promo === 'METHED') {
   const tenProcent = sum_12 * 0.10; 
   console.log("Ваша скидка составила " + tenProcent);
 }
 sumGoods -= sum_12 - (sum_12 * 0.03) - ((sum_12 - 30000) * 0.15) - (sum_12 * 0.10);
 if (promo === 'G3H2Z1' && sumGoods > 2000) {
  sum_12 -= sum_12 - 500;
   console.log('Ваша дополнительная скидка составила ' + 500);
 }
};
calculate(31000, 30, 'G3H2Z1');