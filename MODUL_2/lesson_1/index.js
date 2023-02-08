'use strcict'

const ads = document.querySelector('.ads');
ads.remove();

const itemDom = document.querySelectorAll('.item');
const itemListParent = document.querySelector('.items');
itemDom[0].replaceWith(itemDom[1]);
itemDom[4].replaceWith(itemDom[0]);
itemDom[5].replaceWith(itemDom[4]);
itemListParent.insertBefore(itemDom[5], null);

console.log(itemDom);

const propsListDom = document.querySelectorAll('.props__list');
console.log(propsListDom);

propsListDom[2].replaceWith(propsListDom[4]);
itemDom[4].append(propsListDom[2]);

const propsEs6 = document.querySelectorAll('.props__item_two');

console.log(propsEs6);

propsEs6[7].append(propsEs6[8]);
propsEs6[7].append(propsEs6[9]);

const propsJS = document.querySelectorAll('.props__item_four');
console.log(propsJS);
propsJS[3].append(propsJS[0]);





