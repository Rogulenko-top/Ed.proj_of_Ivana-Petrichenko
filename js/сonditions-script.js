'use strict';

const variable_one = 51;
// const variable_two = 5;

// if (variable_one == variable_two) {
// 	console.log('Ok!');
// } else {
// 	console.log('Desition is not correct!');
// }

// if (variable_one < 49) {
// 	console.log('Error');
// } else if(variable_one > 100){
// 	console.log('Much');
// } else {
// 	console.log('Ok!');
// }

// (variable_one === 50) ? console.log('Ok!') : console.log('Error'); //тернарный оператор

switch(variable_one) {
case '49':
	console.log('Неверно');
	break;
case '100':
	console.log('Неверно');
	break;
case '50':
	console.log('В точку!');
	break;
default:
	console.log('Не в этот раз!');
	break;  
}