'use script';

let num =50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

do {
	console.log(num);
	num++;
}
while (num < 55);

// for (let i = 0; i < 8; i++) {
// 	console.log(i);
// }

for (let i = 1; i <= 10; i++) {
	if( i === 7){
		break; //может прервать цикл break как колько if будет иметь true в условии и выполнит блок кода с break
	}
	console.log(i);	
}

for (let i = 1; i <= 10; i++) {
	if( i === 7){
		continue; //позволяет пропустить нужный для нас определенное условие, но при этом не прерывает цикл
	}
	console.log(i);	
}