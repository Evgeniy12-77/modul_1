'use strict'

const randomNumber = (length, n, m) => {
   const newRandom = [];
   const minNumber = n;
   const maxNumber = m;
   const arrLengts = length;
   for (let i = 1; i >= 0; i < arrLengts, i++) {
   const newNewArr_1 = Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
   newRandom.push(newNewArr_1);
} return newRandom;
};
console.log(randomNumber(10, -1000, 10000));


