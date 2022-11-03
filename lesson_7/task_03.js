'use strict'

const addPrefix = () => {
   const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
   const mrNames = [];
   for (let i = 0; i < names.length; i++) {
      mrNames[i] = 'Mr ' + names[i];
   };
   console.log(mrNames);
};


addPrefix();

