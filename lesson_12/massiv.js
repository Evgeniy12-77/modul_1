'use strict'
let r = [];
function func4() {
	let b = Math.floor(Math.random() * 10);
	if(b === 0) return;
	r.push(b);	
	if (r.reduce((sum, current) => sum + current) > 50) return r;
	if (r.length > 10) return;
	console.log(r);
	func4();
};
console.log(func4());
