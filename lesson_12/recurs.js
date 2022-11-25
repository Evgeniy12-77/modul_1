
// Функция-рекурсия возведения в степень
const pow = (n, power) => {
   if(power === 1) {
      return n;
   } else {
      return pow(n, power - 1) * n;
   }
};

console.log(pow(2, 2));

// Функция-рекурсия для вычисления факториала

const factorial = (n) => {
   if(n === 0) {
      return 1;
   } else {
      return factorial(n-1) * n;
   }
};
console.log(factorial(5));




const foo = (x) => {
   x *= 3;
   if (x > 100) {
   return x;
}
return foo(x)};

console.log(foo(2));

// функция фибоначчи

const fibo = n => {
   if (n <= 2) {
      return 1;
   } else {
      return fibo(n - 1) + fibo (n - 2);
   }
};
console.time('fibo');
console.log(fibo(20));
console.timeEnd('fibo');

const fibo2 = n => {
   let a = 1;
   let b = 0;
   let c = 0;
   while (n > 0) {
      c = a + b;
      b = a;
      a = c;
      n -= 1;
   }
   return b;
};
console.time('fibo2');
console.log(fibo2(20));
console.timeEnd('fibo2');