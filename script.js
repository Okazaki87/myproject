//мое решение
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','') // +promt делаем число 

//создаем объект
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b; // помещаем ответы в объект movies.
personalMovieDB.movies[c] = d; // помещаем ответы в объект movies

console.log(personalMovieDB); // выводим объект в консоль
