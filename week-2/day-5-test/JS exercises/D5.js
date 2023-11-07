/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1");

const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
//
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("Esercizio 2");
console.log("Elementi dell'array in ordine alfabetico", pets.sort());
//
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("Esercizio 3");
console.log(
  "Elementi dell'array in ordine alfabetico inverso",
  pets.sort().reverse()
);

//
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4");
// const firstEl = pets.splice(0, 1);// no perchè restituisce un nuovo arrai con il contenuto selezionato
const firstEl = pets.shift();
pets.push(firstEl);
console.log("Ho spostato il primo elemento alla fine dell'array", pets);
//
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("Esercizio 5");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "XY12" + i + "00";
}
console.log("Ho aggiunto la proprietà licensePlate", cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6");
const newObj = {
  brand: "Jeep",
  model: "Avanger",
  color: "mat black",
  trims: ["GT", "LX", "LS", "DX"],
};
cars.push(newObj);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(
  "Ho aggiunto un unovo oggetto",
  cars[cars.length - 1],
  " all'array cars e ho rimosso l'ultimo elemento all'array del valore trims creando un nuovo array",
  cars
);

//
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7");

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  let firstEl = cars[i].trims[0];
  justTrims.push(firstEl);
}
console.log(
  "Salvo il primo valore di trims e creo un nuovo array con il primo valore trims di ogni oggetto in cars",
  justTrims
);
//
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8");

let color = "";
for (let i = 0; i < cars.length; i++) {
  color = cars[i].color;
  console.log("estraggo il valore del color per ogni oggetto in cars:", color);
  if (color.startsWith("b")) console.log("Fizz");
  else console.log("Buzz");
}
//
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("Esercizio 9");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let n = 0;
let stopCount = numericArray.indexOf(32);
while (n <= stopCount) {
  console.log(numericArray[n]);
  n++;
}
//
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("Esercizio 10");

const charactersArray = ["g", "n", "u", "z", "d"];
const letterPosition = [];

// definisco l'alfabeto completo
const alphabet = "abcdefghilmnopqrstuvz".split("");
console.log("alphabet", alphabet);

// definisco la corrispondenza delle lettere con gli indici
let indxG = alphabet.indexOf("g") + 1;
let indxN = alphabet.indexOf("n") + 1;
let indxU = alphabet.indexOf("u") + 1;
let indxZ = alphabet.indexOf("z") + 1;
let indxD = alphabet.indexOf("d") + 1;

console.log(indxG, indxD, indxN, indxU, indxZ);

// con lo switch pusho l'index nell'array con la posizione dei caratteri preselezionati
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      letterPosition.push(indxG);
      break;
    case "n":
      letterPosition.push(indxN);
      break;
    case "u":
      letterPosition.push(indxU);
      break;
    case "z":
      letterPosition.push(indxZ);
      break;
    case "d":
      letterPosition.push(indxD);
      break;

    default:
      break;
  }
}
console.log("result:", letterPosition, charactersArray);
