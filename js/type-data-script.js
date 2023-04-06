'use strict';

//let number = 4;

console.log(4 / 0); // полчум положительную бесконечность Infinity
console.log(-4 / 0); // получим отрицательную бесконечность -Infinity
console.log('Privet' * 8); // получим "не число" NaN

let person = 'Anton';
console.log(person);

//let bool = true; // булевые выражения

//console.log(something); // получим null так как отсутствует ссылку на не существующий обект

let und;
console.log(und); // отсутствует значение в перменной дает undefined

const obj = {
	name: 'Alex',
	age: 25,
	isMarried: false,
}; 

console.log(obj.age); // обращаемся к свойству объекта через точку и вызываем 'возраст' 
console.log(obj['name']); // обращаемся к свойству объекта через квадратные скобки, а свойство поля указываем в кавычках

// Является ли массив отдельным типом данных, нет - массив это частный случай объекта

let arr = ['Plum.png', 'Orange.jpg', 'Apple.bmp', 6, {str: 'Hi'}, []];
// console.log(arr[4].str);
// console.log(arr[4]['str']);
for (let index = 0; index < arr.length; index++) {
	const element = arr[index];
	console.log(element);
}