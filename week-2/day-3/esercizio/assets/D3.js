const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male",
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female",
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a",
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male",
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
  },
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/
let characters = [];
//
/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
let ese1 = document.querySelector("#ese-1");
for (let i = 0; i < starWarsCharacters.length; i++) {
  characters.push(starWarsCharacters[i].name);
  // characters[i] = starWarsCharacters[i].name;
}
let printName = document.createElement("p");
printName.classList.add("name");
printName.innerHTML = "<h3>The characters are: </h3>" + "<br>" + characters;
ese1.appendChild(printName);
console.log(characters);
//
/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
let femaleCharacters = [];
let ese2 = document.querySelector("#ese-2");

for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "female") {
    femaleCharacters.push(starWarsCharacters[i]);
    console.log(starWarsCharacters[i], "starWarsCharacters[i]");
  }
}
console.log(femaleCharacters);
let printFemale = document.createElement("p");
printFemale.classList.add("name");
printFemale.innerHTML =
  "<h3>The female characters are:</h3>" +
  "<br>" +
  femaleCharacters[0].name +
  " & " +
  femaleCharacters[1].name;
ese2.appendChild(printFemale);

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
let eyeColor = {
  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blueGray: [],
};
//
/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
for (let i = 0; i < starWarsCharacters.length; i++) {
  // console.log(starWarsCharacters[i].eye_color, "starWarsCharacters.eye_color");
  switch (starWarsCharacters[i].eye_color) {
    case "blue":
      eyeColor.blue.push(starWarsCharacters[i]);
      break;
    case "yellow":
      eyeColor.yellow.push(starWarsCharacters[i]);
      break;
    case "brown":
      eyeColor.brown.push(starWarsCharacters[i]);
      break;
    case "red":
      eyeColor.red.push(starWarsCharacters[i]);
      break;
    case "blue-gray":
      eyeColor.blueGray.push(starWarsCharacters[i]);
      break;
    default:
      break;
  }
}
console.log(eyeColor, "eyecolor");
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
let n = 0;
let crewMass = 0;

while (n < starWarsCharacters.length) {
  const currentCharacter = starWarsCharacters[n];
  crewMass += Number(currentCharacter.mass);
  n++;
}
console.log("La massa totale dell'equipaggio è di: " + crewMass);
//
/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/
let spaceshipMass = 701;

if (spaceshipMass < 500) {
  console.log("Ship is under loaded");
} else if (spaceshipMass > 1000) {
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!");
} else if (spaceshipMass > 900) {
  console.log("Critical Load: Over 900");
} else if (spaceshipMass > 700) {
  console.log("Warning: Load is over 700");
} else if (spaceshipMass > 500) {
  console.log("Ship is alf loaded");
}

switch (true) {
  case spaceshipMass < 500:
    console.log("Ship is under loaded");
    break;
  case spaceshipMass > 1000:
    console.log("Ship is under loaded");
    break;
  case spaceshipMass > 900:
    console.log("Ship is under loaded");
    break;
  case spaceshipMass > 700:
    console.log("Ship is under loaded");
    break;
  case spaceshipMass > 500:
    console.log("Ship is under loaded");
    break;

  default:
    break;
}
//
/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/
let robots = [];
for (let i = 0; i < starWarsCharacters.length; i++) {
  if (starWarsCharacters[i].gender === "n/a") {
    starWarsCharacters[i].gender = "robot";
    robots.push(starWarsCharacters[i]);
  }
  console.log(starWarsCharacters[1].gender, "robot gender");
  console.log(robots, "robots array");
}

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/
console.log(characters.length, "characters length BEFORE");

for (let char = 0; char < characters.length; char++) {
  const currentChar = characters[char];
  for (let fem = 0; fem < femaleCharacters.length; fem++) {
    const currentFemChar = femaleCharacters[fem];
    if (currentFemChar.name === currentChar) {
      characters.splice(char, 1);
    }
  }
}
console.log(characters.length, "characters length AFTER");

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
let randomIndx = Math.floor(Math.random() * starWarsCharacters.length);
let randomCharacter = starWarsCharacters[randomIndx];

console.log(
  "The random character is:" +
    randomCharacter.name +
    " and it's a " +
    randomCharacter.gender
);

if (randomCharacter.eye_color === "blue") {
  console.log("Wow! What a cool ", randomCharacter.eye_color, " eyes!");
}
if (randomCharacter.skin_color === "gold") {
  console.log(
    "Your really shine today! " + randomCharacter.skin_color,
    "it's a nice skin color"
  );
}
