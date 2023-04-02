'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

const answer_one = prompt('Один из последних просмотренных фильмов?','');
const answer_two = prompt('На сколько оцените его?','');
const answer_three = prompt('Один из последних просмотренных фильмов?','');
const answer_four = prompt('На сколько оцените его?','');

personalMovieDB.movies[answer_one] = answer_two; //всегда обращайтесь в объекты только через квадратные скобки
personalMovieDB.movies[answer_three] = answer_four;

console.log(personalMovieDB);
