'use strict'
   /*const visokosGod = (n, m) => {
   const newVisokos = [];
   const start = n;
   const end = m;
   newVisokos.length = end - start + 1;
   for (let i = start; i >= start, i <= end; start + i) {
      const newGod = Math.round(Math.random() * (end  - start) + start)
      newVisokos.push(newGod);
      newVisokos.sort((n, m) => n - m);
      } 
      return newVisokos.filter((item, index) => item % 4 === 0 && newVisokos.indexOf(item) === index) 
};

console.log(visokosGod(2000, 2024));*/

// Пытался сам сделать, в результате нашел эту функцию:
// Пока что мало понятную
const getLeapYears = (start, end) => Array
.from({ length: end - start + 1 }, (n, i) => start + i)
.filter(n => (n % 4 === 0));
console.log(getLeapYears(1888, 2099));

