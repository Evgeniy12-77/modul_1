'use strict'


const filter = () => {

const allStudents = [{id: 'Иванов', ball: 80}, {id: 'Петров', ball: 100}, {id: 'Сидоров', ball: 75}, {id: 'Кузнецов', ball: 95}, 
{id: 'Смирнов', ball: 23}, {id: 'Попов', ball: 79}, {id: 'Соколов', ball: 99}];

const failedStudents = allStudents.filter(item => item.ball >= 80);

console.log(failedStudents);
};

filter();

// Смысл функции - поступили те студенты, которые в сумме набрали 80 и выше баллов




