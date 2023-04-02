const arr = ['a', 'b' ,'c'];
arr[5] = 'dfgt'; // добавили в массив 5 элемент со значением строки dfgt

console.log(arr);
 
const arrObj = {
	0: 'a',
	1: 'b',
	2: 'c',
	abc: {
		
	}
};
arrObj[3] = 'd'; // добавили через квадратные скобки в объект новое свойство под цифрой 3
arrObj.f = 'f'; // добавили новое свойство f через точку и присвоили строку 'f'

const b = 'b';
arrObj[b] = 'u'; // присвоили через переменную, новое свойство b и присвоили строку u

console.log(arrObj[3]); // к объекту можно обращатся через квадратные скобки [] 
console.log(arrObj['f']);  // для вывода строки в квадратных сбоках указываем ковычки и потом букву 
console.log(arrObj.b); 

const obj = {a: 1, b: 2, c: 3};
console.log(obj.b);

const employees = {
	Anna: 500,
	'Vera': 1200,
	'Lisa': 560,
};
console.log(employees.Anna);
console.log(employees['Anna']);
 
