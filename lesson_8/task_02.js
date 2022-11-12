



'use strict'
const randomNumber = (a, n, m) => Array.from({ length: a }, () => 
Math.round(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) );
console.log(randomNumber(6, -3, 4));


//const createArray = (s, n, m) => 
//Array+ Math.min(n, m).from({ length: s }, () => Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1))
//+ Math.min(n, m));