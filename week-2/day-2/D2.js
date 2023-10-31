/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log("Il numero più grande è:" + num1);
} else if (num2 > num1) {
  console.log("Il numero più grande è:" + num2);
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (num2 !== 5) console.log("Il numero fornito è != da 5");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n = 15;
let isDivisibleByFive = n % 5 === 0;
if (isDivisibleByFive) console.log("il numero dato è divisibile per 5");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8)
  console.log("Verificato");
else console.log("Non verificato");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 250;
let tot = totalShoppingCart;
let shippingAmount;

if (tot > 50) {
  shippingAmount = 0;
  console.log(
    "COMPLIMENTI! Hai diritto alla spedizione gratuita!" +
      " " +
      "Le tue spese di spedizione ammontano a:" +
      " " +
      shippingAmount +
      "€" +
      "  il tot del tuo carrello è: " +
      tot
  );
} else {
  shippingAmount = 10;
  tot = shippingAmount + totalShoppingCart;
  console.log(
    "Purtroppo non hai diritto alla spedizione gratuita!" +
      " " +
      "Le tue spese di spedizione ammontano a:" +
      " " +
      shippingAmount +
      "€" +
      "  il tot del tuo carrello è: " +
      tot
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let discount = 20;
const newTotalShoppingCart = (totalShoppingCart * discount) / 100;

if (newTotalShoppingCart > 50) {
  shippingAmount = 0;
  tot = newTotalShoppingCart + shippingAmount;
  console.log(
    "BLACK FRIDAY DISCOUNT " +
      discount +
      "%!" +
      "   " +
      "Hai diritto alla spedizione gratuita!" +
      " " +
      "Le tue spese di spedizione ammontano a:" +
      " " +
      shippingAmount +
      "€" +
      "   " +
      "Il tot dei tuoi acquisti è: " +
      tot
  );
} else {
  shippingAmount = 10;
  tot = newTotalShoppingCart + shippingAmount;
  console.log(
    "BLACK FRIDAY DISCOUNT!" +
      discount +
      "%" +
      "   " +
      "Le tue spese di spedizione ammontano a:" +
      " " +
      shippingAmount +
      "€" +
      "   " +
      "Il tot dei tuoi acquisti è: " +
      tot
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
// let a = 13;
// let b = 21;
// let c = 34;

// if (c > b && b > a) {
//   array = [c, b, a];
//   console.log(array, "arrai di numeri decrescenti");
// } else {
//   console.log("I numeri forniti non sono in sequenza decrescente");
// }

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let valoreFornito = "sono il valore!";
let typeOfValore = typeof valoreFornito;

if (typeOfValore == Number) console.log("Il valore fornito è un numero!");
else console.log("il valore fornito non è un numero");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myVal = 9;
let isEven = myVal % 2 === 0;
if (isEven) console.log("il numero dato è pari");
else console.log("Il numero dato è dispari");

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else if (val <= 10) {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};
const city = (me.city = "Toronto");
console.log(me.city);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const lastName = (me.lastName = "");
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
me.skills = ["javascript", "html"];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
