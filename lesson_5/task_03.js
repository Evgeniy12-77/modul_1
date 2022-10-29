'use strict'



// Используем Используем метод split(), чтобы получить массив из строки
// Используем метод reverse(), чтобы перевернуть элементы в полученном массиве
// Используем метод join(), чтобы соединить элементы массива

function reverseStr(str) {
return str.split("").reverse().join("");
};

const res_1 = prompt('Введите любое слово');

console.log(reverseStr(res_1));
