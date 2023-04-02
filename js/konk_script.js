'use strict';

console.log('arr' + ' -object');
console.log(4 + +'5'); //конкатенация и второй знак сложения

let inc = 10,
	dec = 10;

inc++; // постфиксный, когда после операнда 
--dec; // префиксный, когда перед операдом


console.log(inc);
console.log(dec);

const isChecked = true,
	isClose = true;
console.log(isChecked && isClose);