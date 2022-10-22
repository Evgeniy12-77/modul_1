'use strict'
{
   const productName = 'ноутбук';
   const productCategory = 'компьютерная техника';
   const quantityOfGoods = 25;
   const productPrice = 1000;
   console.log (productName);
   console.log (quantityOfGoods * productPrice);
};

{
   const productName = 'Плед';
   const productCategory = 'Постельные принадлежности';
   const quantityOfGoods = 135;
   const productPrice = 70;
   console.log (productName);
   console.log (quantityOfGoods * productPrice);
};

{
const productName = prompt('Наименование товара');
const productCategory = prompt('категория товара');
const quantityOfGoods= prompt('количество товара');
const productPrice = prompt('Цена товара');

const quantityOfGoodss = Number(quantityOfGoods);
const productPrices = Number(productPrice);

console.log (typeof quantityOfGoodss);
console.log (typeof productPrices);
console.log(' На складе ' + quantityOfGoodss + productName + ' на сумму ' + quantityOfGoodss * productPrices
+ ' белорусских рублей ');
};






