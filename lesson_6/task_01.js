'use strict'

const foo = () => {
   for (let a = 1; a <= 10; a++) { 
      console.log ('----------');
   for (let x = 1; x <= 10; x++) {
      console.log(`${a}**${x} = ${a**x}`);
}
   }
};
foo();
