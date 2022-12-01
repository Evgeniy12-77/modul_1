

class User {
   constructor() {
      //  this._name = name;
   }
   set name(name) {
      this._name = name.trim().toLowerCase();
   }
   get name() {
   return this._name;
   }
}
const student = new User();
student.name = '   Alex';
console.log(student);
console.log(student.name);
//защищщенные св-ва в js добавляются нижнее подчерквиание
// методы get и set
//Приватное свойство - #.