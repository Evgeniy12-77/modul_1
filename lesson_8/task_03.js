

const getNumbersByParity = (array, str) => {
   const changeNum = str;

   const numberFilter = array.filter((num) => {
      if (changeNum === 'even') {
      return num % 2 === 0;
   } else if (changeNum === 'odd') {
      return !(num % 2 === 0);
   }
});
return numberFilter;
} 
   
const fooR = (length, n, m, str) => {
   const newArrr = [];
   const arrLengts = length;
   const minNum = n;
   const maxNum = m;
   const changeNum = str;
   for (let i = 0; i < arrLengts; i++) {
   const newNewArr = Math.round(Math.random() * (maxNum - minNum) + minNum);
   newArrr.push(newNewArr);
} return getNumbersByParity(newArrr, changeNum);
};
console.log(fooR(12, -1000, 10000, 'odd'));
