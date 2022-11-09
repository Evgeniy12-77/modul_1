'use strict'

const visokosGod = (n, m) => {
   const newVisokos = [];
   const start = n;
   const end = m;
   const lenghs = m - n + n;
   for (let i = start; i >= start, i <= lenghs; i++) {
      const newGod = Math.round((Math.random() * (end - start) + start));
      newVisokos.push(newGod); 
   } return newVisokos.filter((item) => item % 4 === 0);
};

console.log(visokosGod(2000, 2024));