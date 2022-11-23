'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  add(el, cost, amount) {
    this.items.push({product: el, price: cost, amount});
    this.calculateItemPrice();
    this.increaseCount(amount);
    console.log(this.add);
  },

  calculateItemPrice() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      const elSum = this.items[i].price * this.items[i].amount;
      sum += elSum;
    }
    this.totalPrice = sum;
    return this.totalPrice;
  },
  // вернуть общую сумму с функции add

  getTotalPrice() {
    console.log(`'Общая стоимость корзины товаров составляет:
    ' ${this.totalPrice}`);
  },

  increaseCount(amount) {
    cart.count += amount;
    // Инкрементированную функцию и добавить этот инкримент в свойство count: 0,
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
    this.getTotalPrice();
  },
  // Вывести данные в формате JSON
  get() {
    return this.calculateItemPrice();
  },
  set(cost) {
    if (cost === 'string') {
      console.log('Введите пожалуйста число');
    }
  },
};
cart.add('мобильный телефон', 5000, 1);
cart.add('чехол', 500, 1);
cart.add('защитное стекло ', 500, 1);
console.log(cart);
cart.print();


