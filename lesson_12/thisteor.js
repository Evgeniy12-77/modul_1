


   /*function thisFoo () {
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
   */

console.log('Просто в программе');
console.log(this);

function dsa() {
   console.log('Внутри функции');
   console.log(this);
   console.log(3 + 5 / 2);
   this.style.background = 'red';
};
//dsa();

//document.querySelector('p').onclick = dsa;

/*let p = document.querySelectorAll("p");
p.forEach(function(element) {
   element.onclick = dsa;
});
*/

