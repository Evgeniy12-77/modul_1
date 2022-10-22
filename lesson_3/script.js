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
const productName = 'газплита';
const productCategory = 'техника для кухни';
const quantityOfGoods = 111;
const productPrice = 800;

const productNames = prompt('Наименование товара');
const productCategorys = prompt('категория товара');
const quantityOfGoodss = prompt('количество товара');
const productPrices = prompt('Цена товара');
console.log(typeof Number(quantityOfGoodss));
console.log(typeof Number(productPrices));
console.log('На складе' + quantityOfGoods + 'единиц товара на сумму'  + quantityOfGoods * productPrice 
+ 'белорусских рублей');
};






