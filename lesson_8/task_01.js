'use strict'



const fooR = (d) => Array.from ({ length: d }, () =>
Math.floor(Math.random() * 100));
console.log(fooR(100));
   

