//мое решение


let numberOfFilms ;

function start () {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { // isNaN проверяем что ввел пользователь не число
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','') 
     }
}
start() // вызываем функцию


//создаем объект
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


function remeberMyFilms () {
    for ( let i = 0; i < 2; i ++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b; // помещаем ответы в объект movies.
            console.log('done');
        } else  {
            console.log('error');
            i--;
        }
    
    }
}
remeberMyFilms ();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов'); 
    } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB)
    }
    
}
showMyDB()

function writeYourGenres () {
    for (let i= 1; i <=3; i ++) {
        const ganr = prompt(`ваш любимый жанр № ${i}`);
        personalMovieDB.genres[i - 1] = ganr;
    }
}

writeYourGenres()

