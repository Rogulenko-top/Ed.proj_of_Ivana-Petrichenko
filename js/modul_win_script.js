'use strict';
// ВСЯ ИНФОРМАЦИЯ КОТОРАЯ ПРИХОДИТ ОТ ПОЛЬЗОВАТЕЛЯ ВСЕГДА ИМЕЕТ STRING - СТРОКУ!
// alert('Hello World');

//const result = confirm('Are you here?'); // вызываем модальное окно с отведами, да или нет
//console.log(result);

//const answer = +prompt('Вам есть 18 лет?', ''); // если поставить знак "+" перед функцией prompt то результат будет 'число'
//console.log(`${typeof(answer)}${' ' + answer}`);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Какая у вас фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);
console.log(typeof(answers));
console.log(typeof(null));
