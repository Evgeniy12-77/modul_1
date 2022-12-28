'use strict';
// у каждой функции локальнаяо бласт ьвидимости своя

const x = 5;

const scopeOne = (y, z) => {
   // LexicalEnvironment (определяется во время вызова функции) = {y: 25, z: undefined}
   const x = 15;
   // scope (определяется во время создания функции) = GlobalScope = {x: 5, scopeOne}
   // lexicalEnvironment = {x: 15, y: 25, z: undefined}
   console.log(x, y, z);
   const scopeTwo = () => {
   // lexicalEnvironment = {}
   // scope = scopeOne.lexicalEnvironment = {x: 15, y: 25, z: undefined}
   console.log(x);
   };

   scopeTwo();
   };

   scopeOne(25);
// x - три разных переменных
// x = 5 - глобальная область видимости
// Лексический контекст - набор идентификаторов, связанных с определенными значениями,
// в рамках функции или блока кода. Структура похожа на объект.
