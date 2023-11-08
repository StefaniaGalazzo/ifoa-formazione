/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const myConcatString = (str1, str2) => {
  let firstStr = str1.slice(0, 2);
  let secondStr = str2.slice(str2.length - 3);
  const result = firstStr.concat(secondStr).toUpperCase();
  console.log("result", result);
  return result;
};
myConcatString("sono una", "persona bellissima");
//
/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
let myArray = [];
const myRandom = () => {
  for (let i = 0; i < 10; i++) {
    myArray.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log("myArray", myArray);
};
myRandom();
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
const myFilteredArray = () => {
  let evenArray = [];
  myArray.filter((el) => {
    if (el % 2 === 0) {
      evenArray.push(el);
      console.log("evenArray", evenArray);
    }
  });
};
myFilteredArray();
//
/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const mySummedArray = () => {
  let tot = 0;
  myArray.forEach((el) => {
    tot += el;
  });
  console.log("Sum with .forEach():", tot);
};

mySummedArray();

//
/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
const mySumWithReduce = (array) => {
  return array.reduce((val, el) => val + el);
};
console.log("La mia somma con reduce()", mySumWithReduce(myArray));

//
/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
const myIncrement = (n) => {
  let myMappedArray = myArray.map((el) => {
    return el + n;
  });
  console.log("myMappedArray", myMappedArray);
};
myIncrement(3);

//
/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
const myStringArray = ["sasso", "carta", "forbici"];

const myLength = () => {
  let lengthStringArray = [];
  myStringArray.map((el) => {
    lengthStringArray.push(el.length);
  });
  console.log("lengthStringArray", lengthStringArray);
};
myLength();
//
/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
let counter = 0;
let myValues = [];
while (counter < 100) {
  myValues.push(counter + 1);
  counter++;
}
const myOddArray = () => {
  let oddArray = [];
  myValues.forEach((el) => {
    if (el % 2 !== 0) {
      oddArray.push(el);
    }
  });
  // console.log("my odd numbers array:", oddArray);
};

myOddArray();

//
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
// */
const oldest = (array) => {
  let result = { Year: 3000 };
  array.forEach((movie) => {
    let year = parseInt(movie.Year);
    if (year < result.Year) {
      result = movie;
    }
  });
  return result;
};
console.log("il film più vecchio è:", oldest(movies));
//
/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log(movies.length);
//
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
const moviesTitles = (array) => {
  array.map((el) => {
    el.Title;
  });
  console.log("Array con titoli:", array);
};
moviesTitles(movies);
//
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

const thisYearMovies = (array) => {
  array.filter((el) => parseInt(el.Year) >= 2000);
};
console.log("array con film di questo millennio", thisYearMovies(movies));

//
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
const sumAllYears = (array) =>
  array.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.Year),
    0
  );

console.log("Somma degli anni:", sumAllYears(movies));
//
/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const myFavouriteFilm = (array, filmID) => {
  return array.find((el) => el.imdbID === filmID);
};
console.log("Il mio film preferito:", myFavouriteFilm(movies, "tt2395427"));

//
/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
const firstFilmOfYear = (array, year) => {
  return array[array.findIndex((el) => el.Year === year)];
};
console.log(
  "il primo film dell'anno selezionato è",
  firstFilmOfYear(movies, "1990")
);

movies.forEach((movie) => {
  document.getElementById(
    "imdbID"
  ).innerHTML += `<option value=${movie.imdbID}>${movie.Title}</option>`;
});
console.log(select, "select");

function cerca() {
  let imdbID = document.getElementById("imdbID").value;
  myMovie = movies.find((el) => el.imdbID === imdbID);
  document.getElementById("titolo").innerHTML = myMovie.Title;
  document.getElementById("poster").src = myMovie.Poster;
  document.getElementById("poster").alt = myMovie.Title;
}
