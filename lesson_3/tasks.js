'use strict'

{ const rain = Math.round (Math.random());

if (rain === 1) {
   console.log('Пошёл дождь. Возьмите зонт!');
} else {
   console.log('Дождя нет!');
};
};

{
const mathematik = Number(prompt('Введите кол-во баллов по математике'));
const russich = Number(prompt('Введите кол-во баллов по русскому языку'));
const informathik= Number(prompt('Введите кол-во баллов по информатике'));

const sum = mathematik + russich + informathik;

if (sum >= 255) {
   alert('Поздравляю, вы поступили на бюджет!');
} else {
   alert('Сожалеем, вы не поступили на бюджет!');
}
};



