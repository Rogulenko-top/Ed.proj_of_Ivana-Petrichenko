'use strict';

const category = 'toys';

console.log(`http://someurl.com/${category}/5`); // итерполяция ${}, лучше чем конкатенация(склеивание символом +).

const user = prompt('Как ваше имя?', ''); //применил функцию propt (модальное окно), результат положил в user.
alert(`Привет, ${user}`);//вызвал функцию alert и используя интерполяцию, отформатировал строку вместе с перменной.
