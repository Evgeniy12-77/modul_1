
'use strict'

   function thisFoo () {
      console.log(this);
   };
   
   const obj = {
      x: 5,
      y: 15,
      foo() {
         console.log(this)
      }
   }
   obj.foo();