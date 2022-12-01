'use strict'

const rectangle = {
   set width (num) {
      if (Number.isFinite(num)) {
         this._width = num;
      } else this._width = 5;
   },

   set height (num) {
      if (Number.isFinite(num)) {
         this._height = num;
      } else this._height = 5;
   },

   get area() {
      return `${this._width * this._height} см кв`;
   },

   get per() {
      return `${(this._width + this._height) * 2} см`;
   },
};

rectangle.width = 10;
rectangle.height = 20;

console.log(rectangle.area);
console.log(rectangle.per);

console.table(rectangle);