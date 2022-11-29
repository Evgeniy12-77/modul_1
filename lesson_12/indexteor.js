'use strict'

/*const capitalize = str =>
str[0].toUpperCase() + str.slice(1).toLowerCase();

const getFullName = ({firstname, surname}) =>
`${capitalize(firstname)} ${capitalize(surname)}`;

const printFullName = arr => {
   arr.forEach(item => void console.log(getFullName(item)));
};
// void - оператор говорит, вычисли все, что справа, а
// верни undefined;

const listPerson = [
   {
      firstname: 'сергей',
      surname: 'попов',
   },
   {
      firstname: 'АЛександр',
      surname: 'иванов',
   },
   {
      firstname: 'Олег',
      surname: 'ПЕТРОВ',
   },
];

printFullName(listPerson);
*/
/*
let t = 0;
function f1() {
   t++
   console.log(t);
   if (t === 100) return;
   f1();
}

f1();
*/
// цикл
/*
function f2() {
   let out = '';
   for (let i = 1; i <= 30; i++){
      out += i + ' ';
   }
   console.log(out);
}
f2();
*/
// рекурсией:
//let i = 0;
//let out = '';
function f3() {
   i++;
   out += i + ' ';  
   if(i >= 30) return;
   f3();
}
//f3();
//console.log(out);
// лицо с низкой соц ответственностью...

function randomInteger(min, max) {
   //случайное число от min до (max+1)
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}
let s1 = 0;
function moneyRecursion() {
   let m = randomInteger(0, 100);
   console.log('add: ' + m);
   s1 += m;
   console.log('sum: ' + s1);
   if(s1 >= 300) return;
   moneyRecursion();
}
//moneyRecursion();

function moneyCycle() {
   let s2 = 0;
   while (true) {
      let g = randomInteger(0, 100);
      console.log('add ' + g);
      s2 += g;
      console.log('sum: ' + s2);
      if (s2 >= 300) return;
   }
}
// moneyCycle();
// факториал
function fact1(n) {
   let s = 1;
   for (let i = 1; i <= n; i++) {
      s = s * i;
   }
   console.log(s);
}
fact1(5);

let r = 1;
function fact2(n) {
   if (n === 0 ) return;
   s = s * r;
   fact2(n - 1);
}

fact2(5);
console.log(s);