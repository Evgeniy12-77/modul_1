'use strict'

const getAverageValue = () => {
   const check = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

   const sumCheck = (check.reduce((sum, current) => sum + current)) / check.length;
   console.log(sumCheck);
};

getAverageValue();

