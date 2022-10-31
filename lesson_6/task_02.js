'use strict'

function isPrime(x) {
   if (x === 1)  {
   return false;
   }
   else if(x === 2)  {
   return true;
   } else   {
   for (let y = 2; y < x; y++)  {
      if(x % y === 0) {
         return false;
      }
   }
   return true;  
   }
}
console.log(isPrime(151));