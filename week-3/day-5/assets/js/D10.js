/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A");

const nums = [10, 20];
const sum = (array) => {
  return array.reduce((val, el) => val + el);
};
console.log("La somma risulta:", sum(nums));

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B");

const myRandom = Math.floor(Math.random() * 21);
console.log("Il numero estratto è:", myRandom);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C");

const me = {
  name: "Stefania",
  surname: "Galazzo",
  age: "33",
};

console.log(`io sono ${me.name} ${me.surname}, ho ${me.age} anni `);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D");

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E");

me.skills = ["HTML", "CSS", "JS"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F");

me.skills.push("React.js");

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G");

// Funzioni
me.skills.pop();

console.log(me);

///////////////////////
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1");

function dice() {
  let result = Math.floor(Math.random() * 6) + 1;
  return result;
}

console.log("Il dado dice:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2");

function whoIsBigger(n1, n2) {
  return Math.max(n1, n2);
}
console.log(`il maggiore tra i numeri dati è:`, whoIsBigger(3, 88));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3");

const myString =
  "i test di epicode non tengono conto di possibili DSA o neurodivergenze";

const splitMe = (string) => {
  return string.split(" ");
};
console.log(splitMe(myString));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4");

function deleteOne(string, boolean) {
  if (boolean) return string.slice(1);
  else return string.slice(0, -1);
}
console.log(deleteOne("adoro programmare", true));
console.log(deleteOne("adoro programmare", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5");

const stringa = "I have 1 cat e 3 dog";
const onlyLetters = (str) => {
  return str.replaceAll(/\d+/g, "");
};
console.log(onlyLetters(stringa));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
  */
console.log("ESERCIZIO 6");

const myEmail = "stefania@gmail.com";

const isThisAnEmail = (email) => {
  let myEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (myEmail) return true;
  else return console.log("inserisci una mail valida");
};
console.log("Hai fornito una mail valida?", isThisAnEmail(myEmail));

//
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7");

function whatDayIsIt() {
  // ottengo la data corrente
  var currentDate = new Date();
  // prendo il giorno della settimana (partendo da domenica che vale 0)
  var dayOfTheWeek = currentDate.getDay();
  // creo un Array con i nomi dei giorni della settimana corrispondenti all'indice del get day
  var weekDays = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  // Restituire il nome del giorno della settimana corrente
  return weekDays[dayOfTheWeek];
}
console.log("Oggi è:", whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("ESERCIZIO 8");

function rollTheDices(num) {
  let results = {
    sum: 0,
    values: [],
  };
  for (let i = 0; i < num; i++) {
    let diceResult = dice();
    results.sum += diceResult;
    results.values.push(diceResult);
    console.log(diceResult);
  }
  return results;
}

console.log("Risultati dei dadi:", rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9");

let myDate = new Date("1990-03-18");

function howManyDays(date) {
  let day = new Date();
  let diff = day - date;
  let days = diff / (1000 * 60 * 60 * 24);
  return Math.floor(days);
}
console.log("giorni trascorsi dalla data fornita", howManyDays(myDate));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10");

const isTodayMyBirthday = () => {
  const myBridthDate = "11/13"; // return true
  // const myBridthDate = "03/18";
  const newDate = new Date();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  const today = `${month}/${day}`;
  const isMyBirthday = myBridthDate === today;
  if (isMyBirthday) return true;
  else return false;
};
console.log("oggi è il mio compleanno?", isTodayMyBirthday());

//
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11");
console.log(me, "my obj");

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}
console.log(deleteProp(me, "surname"));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

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

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12");

function newestMovie(array) {
  let result = { Year: 1000 };
  array.forEach((movie) => {
    let year = parseInt(movie.Year);
    if (year > result.Year) {
      result = movie;
    }
  });
  return result;
}
console.log("il film più moderno è:", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13");

function countMovies() {
  return movies.length;
}
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
  */
console.log("ESERCIZIO 14");

const onlyTheYears = (array) => {
  const yearsArr = [];
  array.forEach((el) => yearsArr.push(el.Year));
  return yearsArr;
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15");

const onlyInLastMillennium = (array) => {
  return array.filter((el) => parseInt(el.Year) <= 2000);
};
console.log("array con film di questo millennio", onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16");

const sumAllTheYears = (array) =>
  array.reduce(
    (accumulator, currentValue) => accumulator + parseInt(currentValue.Year),
    0
  );

console.log(
  "Somma degli anni in cui sono usciti i film è:",
  sumAllTheYears(movies)
);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17");

const searchByTitle = (array, string) => {
  let result = array.filter((film) =>
    film.Title.toLowerCase().includes(string.toLowerCase())
  );
  return result;
};

console.log(searchByTitle(movies, "lord"));
//
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("ESERCIZIO 18");

function searchAndDividestr(array, string) {
  let result = {
    match: [],
    unMatch: [],
  };
  array.forEach((film) => {
    if (film.Title.toLowerCase().includes(string)) {
      array.filter((film) => {
        film.Title.toLowerCase().includes(string.toLowerCase());
      });
      result.match.push(film);
    } else {
      result.unMatch.push(film);
    }
  });
  return result;
}

console.log(searchAndDividestr(movies, "lord"));
//
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("ESERCIZIO 19");
const removeIndex = (array, n) => {
  array.splice(array[n], 1);
  return array;
};

console.log(removeIndex(movies, 7));
//
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log("DOM");
/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20");

const myContainer = () => {
  let container = document.querySelector("#container");
  return container;
};
console.log(myContainer());

//
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21");

const myTDs = () => {
  let tagsTD = document.getElementsByTagName("td");
  return tagsTD;
};
console.log(myTDs());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22");

function printTD() {
  let tagsTD = document.querySelectorAll("td");
  console.log(tagsTD);
  tagsTD.forEach((td) => {
    td.innerText = "sono un td";
  });
  return tagsTD;
}
printTD();
//
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("ESERCIZIO 23");

const colorLink = () => (document.querySelector("a").style.background = "red");
colorLink();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 24");

const addItem = () => {
  const myList = document.getElementById("myList");
  const myItem = document.createElement("li");
  myItem.setAttribute("id", "myItem");
  myItem.innerHTML = "oggi è lunedì";
  myList.appendChild(myItem);
};
addItem();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 25 - scommentare funzione");

const removeItem = () => {
  const itemToReset = document.getElementById("myItem");
  itemToReset.innerHTML = "";
};
removeItem();

//
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("ESERCIZIO 26");

const test = () => {
  const myRows = document.querySelectorAll("tr");
  myRows.forEach((row) => row.classList.add("test"));
};
test();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("ESERCIZIO 27");

function halfTree(n) {
  for (i = 0; i <= n; i++) {
    let txt = "";
    for (k = 0; k < i + 1; k++) {
      txt += "*";
    }
    console.log(txt);
  }
}
halfTree(5);

// console.log(halfTree(5));
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("ESERCIZIO 28");
function tree(n) {
  for (i = 0; i <= n; i++) {
    let txt = "";
    for (j = i; j < n; j++) {
      txt += " ";
    }
    for (k = 0; k < i * 2 - 1; k++) {
      txt += "*";
    }
    console.log(txt);
  }
}

tree(13);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(number) {
  if (number <= 1) return false;
  // Verifica se il numero è divisibile per qualche altro numero oltre a 1 e a se stesso
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  // Se nessun divisore è stato trovato, il numero è primo
  return true;
}
console.log(isItPrime(17));
