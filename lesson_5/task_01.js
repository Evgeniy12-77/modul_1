'use strict'

{
const converter = euroCost => {
`Стоимость в рублях: ${euroCost * 76.8}, 
стоимость в долларах: ${euroCost * 1.2}`

const evro = Number(prompt('Введите сумму в рублях'));
   
if (evro > 0) {
   console.log (converter(evro));
   } else {
   console.log('Вы ввели некорректное значение');
}
}
};




   
   
   