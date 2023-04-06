// const humburger = true;
// const fries = true;

// if (humburger && fries) {
// 	console.log('Я сыт!');
// }

// const humburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(humburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sdadasdsa');

// if (humburger === 3 && cola === 1 && fries) {
// 	console.log('Я сыт!');
// } else {
// 	console.log('I\'m hungry');
// }

// const humburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggits = 2;

// if (humburger === 3 && cola === 2 || fries === 3 && nuggits) {
// 	console.log('Все довольны!');
// } else {
// 	console.log('Мы уходим!');
// }

// console.log(humburger === 3 && cola === 2 || fries === 3 && nuggits);

let JohnReport, alexReport, samReport, mariaReport = 'done';

console.log(JohnReport || alexReport || samReport || mariaReport);

console.log(!0);

console.log(NaN || 2 || undefined ); //2
console.log( NaN && 2 && undefined ); //NaN
console.log( 1 && 2 && 3 ); //3 
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); //25
console.log( NaN || null || !3 || undefined || 5); //5
console.log( NaN || null && !3 && undefined || 5); //5
console.log( 5 === 5 && 3 > 1 || 5); //true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
// 	console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 3;


// if (hamburger || cola || fries === 3 || nuggets) {
// 	console.log('Done!');
// }

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) {
	console.log('Done!');
}

