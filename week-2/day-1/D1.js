/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let jsDatatype =
  "I principali data type i JS sono: le stringhe di testo, i numeri (interi o decimali), e un valore vero/falso che prende il nome di booleano. Altri due valori che fanno parte di questo gruppo, ovvero il gruppo dei dati primitivi, sono null e undefined.";
console.log(jsDatatype);
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Stefania";
console.log(myName);

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12;
let b = 20;
function somma() {
  return a + b;
}
console.log(somma());

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Galazzo";
console.log(myName);
// DECOMMENTARE DA RIGA 49 A 54 PER MOSTRARE IN CONSOLE L'ERRORE
// console.log(
//   "Questo errore in console dimostra che non posso cambaire il valore di una const:"
// );
// const text = "test";
// text = "antitest";
// console.log(text);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n = 4;

function sub() {
  return x - n;
}
console.log(sub());

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
let equivalents = name1 === name2;
let equivalents2 = name1 === name2.toLocaleLowerCase();

console.log(name1, name2, "I due nomi sono uguali? " + equivalents);
console.log(
  name1,
  name2.toLocaleLowerCase(),
  "I due nomi sono uguali? " + equivalents2
);

/*****************EXTRA****************/
let printEquivalents1 = [name1, name2];
let printEquivalents2 = [name1.toLocaleLowerCase(), name2.toLocaleLowerCase()];
// definisco i miei elementi di interesse
let header = window.document.getElementById("myName");
let explanation = window.document.getElementById("explanation");
let subSection = window.document.getElementById("sub");
let sumSection = window.document.getElementById("sum");
let verifiedNameSection = window.document.getElementById("verifiedName");

//creo nuovi elementi
const explanationParagraph = document.createElement("p");
explanation.appendChild(explanationParagraph);

// applico il contenuto
header.innerHTML = "Hi! my name is " + "Stefania " + myName;
explanationParagraph.innerText = jsDatatype;
sumSection.innerHTML =
  "<p>Il risultato della mia addizione è:<p>" + somma().toString();
subSection.innerHTML =
  "<p>Il risultato della mia sottrazione è:<p>" + sub().toString();
verifiedNameSection.innerHTML = `<p>Questi due nomi: ${printEquivalents1} sono uguali? ${equivalents}</p><p>Questi due nomi: ${printEquivalents2} sono uguali? ${equivalents2}</p>`;
