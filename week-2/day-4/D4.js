/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  // Area = base * altezza"
  let rectangleArea = l1 * l2;
  return rectangleArea;
}
console.log("L'area del rettangolo è di:", area(3, 5) + "mt");
//
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
  let sum = n1 + n2;
  if (n1 === n2) {
    sum *= 3;
  }
  return sum;
}
console.log("Il risultato dell'operazione è:", crazySum(5, 5));
//
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
  let diff = Math.abs(num - 19);
  if (num > 19) return (diff *= 3);
  else return diff;
}
console.log("La crazyDiff da risultato: ", crazyDiff(9));
//
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  if ((n > 20 && n <= 100) || n === 400) return true;
  else return false;
}
console.log("The boundary is:", boundary(400));
//
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(myString) {
  let entireString = String(myString).toUpperCase() + myString;
  //   console.log(originalString.indexOf(myString) === -1);
  if (myString.startsWith("EPICODE")) return myString;
  else return entireString;
}
console.log(epify("EPICODERS are the best developers!"));
console.log(epify("Corso Front-End IFOA"));

//
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(n) {
  if (n % 3 === 0 || n % 7 === 0 || (n % 3 === 0 && n % 7 === 0)) return true;
  else return false;
}
console.log(
  "Il numero fornito è un multiplo di 3 o di 7 o di entrambi?",
  check3and7(57)
);
//
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(myString) {
  return myString.split("").reverse().join("");
}
console.log(reverseString("I TOPI NON AVEVANO NIPOTI"));
//
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(myString) {
  const stingToArray = myString.split(" ");
  for (let i = 0; i < stingToArray.length; i++) {
    stingToArray[i] =
      stingToArray[i].charAt(0).toUpperCase() + stingToArray[i].slice(1);
  }
  return [...stingToArray];
}
console.log(upperFirst("provo a mettere il capitalize con JS"));
//
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(myString) {
  let newString = myString.slice(1, -1);
  return newString;
}
console.log(cutString("sono stefania"));
//
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let randomArray = [];
  while (randomArray.length < n) {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    if (!randomArray.includes(randomNum)) randomArray.push(randomNum);
  }
  return randomArray;
}
console.log("randomArray", giveMeRandom(8));
//
