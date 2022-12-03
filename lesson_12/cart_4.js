'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  discount: 0,

  get totalPrice() {
  return this.calculateItemPrice()
  },

  add(el, cost, amount,) {
    this.items.push({product: el, price: cost, amount});
    this.calculateItemPrice();
    this.increaseCount(amount);
  },

  calculateItemPrice() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      const elSum = this.items[i].price * this.items[i].amount;
      sum += elSum;
    }  
    return Math.round(sum - (sum * this.discount / 100)); // применение скидки
  },

  increaseCount(amount) {
    this.count += amount;
  },

  clear() {
    cart.items = [];
    cart.totalPrice = 0;
    cart.count = 0;
    // Здесь функция должна обнулить верхние свойства
    // items: [], totalPrice: 0, count: 0,
  },

  print() {
    const cartStr = JSON.stringify(cart.items);
    const cartObj = JSON.parse(cartStr);
    console.log(cartObj);
    console.log(`'Общая стоимость товаров составляет': ${this.totalPrice}`);
  },  
  get setDiscount() {
    return this.discount();
  },

set setDiscount (promo) {
  if (promo === 'METHED') {
    this.discount = 15;
    }
  if (promo === 'NEWYEAR') {
    this.discount = 21; // здесь вывожу discount а  не totalPrice
  }
},
}
cart.add('мобильный телефон', 10000, 1,);
cart.add('чехол', 500, 1,);
cart.add('защитное стекло ', 500, 1,);
cart.setDiscount = 'METHED';
console.log(cart);
cart.print();
