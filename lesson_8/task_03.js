


const fooR1 = (e, n, m, str) => Array
.from ({ length: e }, () => 
    Math.floor(Math.random() *  (Math.max(n, m) - Math.min(n, m) + 1) + Math.min(n, m)))
.filter (num => {
      if (str === 'even') {
      return num % 2 === 0;
   } else if (str === 'odd') {
      return !(num % 2 === 0);
   }
});
console.log(fooR1(1, -10, 10, 'odd'));



