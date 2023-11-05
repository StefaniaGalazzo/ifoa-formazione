// Esercizi aggiuntivi (facoltativi) per D4
function giveMeRandom(n) {
  while (randomArray.length < n) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (!randomArray.includes(randomNum)) {
      randomArray.push(randomNum);
    }
  }
  return randomArray;
}
/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let randomArray = [];

function checkArray(randomArray) {
  let sum = 0;
  for (let i = 0; i < randomArray.length; i++) {
    if (randomArray[i] > 5) {
      console.log("Il numero " + randomArray[i] + " è maggiore di 5");
      sum += randomArray[i];
    } else {
      console.log("Il numero " + randomArray[i] + " NON è maggiore di 5");
    }
  }
}
checkArray(giveMeRandom(5));
console.log("check", giveMeRandom(5));
//
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
//
let shoppingCart = [
  { price: 90, name: "Kintsugi Kit", id: 1, quantity: 0 },
  { price: 10, name: "Blue T-shirt", id: 2, quantity: 3 },
  { price: 50, name: "Trudi Peluche", id: 3, quantity: 5 },
  { price: 6, name: "Cholate", id: 4, quantity: 8 },
  { price: 0.5, name: "Magic Box", id: 5, quantity: 13 },
  { price: 30, name: "Sunglasses", id: 6, quantity: 0 },
  { price: 100, name: "Christmas Slip", id: 7, quantity: 50 },
];
function shoppingCartTotal() {
  let totalCart = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].quantity > 0) {
      let sumTotalItem = shoppingCart[i].price * shoppingCart[i].quantity;
      totalCart += sumTotalItem;

      console.log(
        "Il totale di",
        shoppingCart[i].quantity,
        shoppingCart[i].name,
        "è di",
        sumTotalItem
      );
      console.log("Il totale del carrelo è di:", totalCart);
    }
  }
  return totalCart;
}
// console.log(shoppingCartTotal());
//
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myItem = { price: 22, name: "Ramen kit", id: 8, quantity: 5 };

function addToShoppingCart(newItem) {
  shoppingCart.push(newItem);
}
addToShoppingCart(myItem);
console.log("shppingCart + newItem", shoppingCart);

//
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart() {
  let prices = [];
  for (let i = 0; i < shoppingCart.length; i++) {
    prices.push(shoppingCart[i].price);
  }
  let maxPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    }
    console.log(maxPrice, "maxPrice");
  }
  return maxPrice;
}
console.log(maxShoppingCart());

//
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart() {
  let lastProduct = shoppingCart.length - 1;
  return shoppingCart[lastProduct];
}
console.log(latestShoppingCart());
//
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil(n) {
  let x = 0;
  while (x < 3) {
    let val = Math.floor(Math.random() * 10);
    if (val > n) {
      x++;
    }
    console.log(val, "valore loop");
  }
}
loopUntil(5);
//
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. 
La funzione salta automaticamente i valori non numerici nell'array.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = [1, 3, "rospo", 8, "boia"];

function average(array) {
  let numArray = [];
  let media = 0;
  let sum = 0;
  //media = totale della somma degli elementi diviso il numero degli stessi = sommare gli indici e dividere per la length
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
      numArray.push(array[i]);
    }
  }
  return (media = sum / numArray.length);
}
console.log(average(myArray), "avarage");

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let stringArray = ["gatto", "cane", "uva", "giraffa"];
function longest(array) {
  let longestWord = array[0];
  for (let i = 0; i < array.length; i++) {
    let arraySingleWord = [array[i]];
    if (longestWord.length > arraySingleWord.length) longestWord = array[i];
    console.log(arraySingleWord, "arraysingleword");
  }
  return longestWord;
}
console.log("Longest word is:", longest(stringArray));
//
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let email =
  "Buongiorno, questa mail è di carattere pubblicitario. E contiene SPAM";

function antiSpam(emailContent) {
  // console.log(emailContent.includes("SPAM"));
  if (
    emailContent.indexOf("SPAM") === -1 &&
    emailContent.indexOf("SCAM") === -1
  ) {
    console.log("questa mail non contiene spam");
    return true;
  } else {
    console.log("questa mail contiene spam");
    return false;
  }
}

console.log(antiSpam(email));
//
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let myDate = new Date("1990-03-18");

function culcDaysFromSpecificDate(date) {
  let day = new Date();
  let diff = day - date;
  let days = diff / (1000 * 60 * 60 * 24);
  // console.log(date, "date");
  // console.log(day, "day");
  // console.log(diff, "diff");
  // console.log(days, "days");
  return Math.floor(days);
}
console.log(culcDaysFromSpecificDate(myDate));

//
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e 
 i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"]
 ["10","11","12"]
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(x, y) {
  /* creo una matrice (griglia) 
  formata da un asse X (che conta le righe) e 
  un asse Y (che conta le colonne/indici)*/
  // console.log(x, y);
  let matrix = [];
  for (let i = 0; i < x; i++) {
    let row = [];
    for (let j = 0; j < y; j++) {
      row.push(i.toString() + j.toString());
    }
    matrix.push(row);
  }
  console.log(matrix, "matrx");
}
matrixGenerator(5, 3);
