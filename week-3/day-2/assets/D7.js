/* ESERCIZIO 1
 Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
*/
let title = document.getElementsByTagName("h1");
const changeTitle = function () {
  return (title[0].innerHTML = "Sono il nuovo titolo");
};
changeTitle();
/* ESERCIZIO 2
 Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
*/
const addClassToTitle = function () {
  title[0].className = "myHeading";
};
addClassToTitle();
/* ESERCIZIO 3
 Scrivi una funzione che cambi il testo dei p figli di un div
*/

const changePcontent = function () {
  let pGroup = document.querySelectorAll("p");
  pGroup.forEach((el) => (el.innerHTML = "testo cambiato"));
};
changePcontent();
/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
  let aGroup = document.querySelectorAll("a");
  for (i = 0; i < aGroup.length - 1; i++) {
    aGroup[i].setAttribute("href", "https://www.google.com");
  }
};
changeUrls();

/* ESERCIZIO 5
 Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
*/

const addToTheSecond = function () {
  const myLi = document.createElement("li");
  myLi.innerHTML = "sono il nuovo li";
  document.getElementById("secondList").appendChild(myLi);
};
addToTheSecond();
/* ESERCIZIO 6
 Scrivi una funzione che aggiunga un paragrafo al primo div
*/

const addParagraph = function () {
  const divGroup = document.getElementsByTagName("div");
  for (let i = 0; i < divGroup.length; i++) {
    let myP = document.createElement("p");
    myP.innerText = "sono un p creato in JS!";
    divGroup[i].appendChild(myP);
  }
};
addParagraph();
/* ESERCIZIO 7
 Scrivi una funzione che faccia scomparire la prima lista non ordinata
*/

const hideFirstUl = function () {
  document.getElementById("firstList").style.display = "none";
};
// hideFirstUl();

/* ESERCIZIO 8 
 Scrivi una funzione che renda verde il background di ogni lista non ordinata
*/

const paintItGreen = function () {
  const ulGroup = document.querySelectorAll("ul");
  ulGroup.forEach((el) => (el.className = "green"));
};
paintItGreen();
/* ESERCIZIO 9
 Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
*/

let myTitle = document.querySelector(".myHeading");
const makeItClickable = function () {
  let slicedTitle = myTitle.innerText.slice(0, -1);
  myTitle.innerHTML = slicedTitle;
};

/* ESERCIZIO 10
 Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
*/

let footerLink = document.querySelector("a");
let footer = document.querySelector("footer");
const revealFooterLink = function () {
  console.log(footerLink.href);
  alert(`${footerLink.href}`);
};
/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/
const generateTable = function () {
  let myTable = document.createElement("table");
  myTable.setAttribute("id", "myTableArea");
  myTable.innerHTML = `
<tbody>
  <tr>
    <th>Immagine</th>
    <th>Nome Prodotto</th>
    <th>Quantità</th>
    <th>Prezzo</th>
  </tr>
</tbody>`;
  document.getElementById("tableArea").appendChild(myTable);
};
generateTable();
/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/

let myTableBody = document.getElementsByTagName("tbody");
const addRow = function () {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
  <tr>
  <td class='no-class'><img class='img-table'
  src="
https://images.unsplash.com/photo-1531001389693-3a2630f196aa?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
"
  alt="piumone"
/></td>
  <td>Piumone</td>
  <td>1</td>
  <td>150€</td>
</tr>
  `;
  myTableBody[0].appendChild(newRow);
};
addRow();
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
*/

const hideAllImages = function () {
  let imgTabel = document.querySelector(".img-table");
  if (imgTabel.style.display === "none") imgTabel.style.display = "visible";
  else if (imgTabel.style.display === "visible")
    imgTabel.style.display = "none";
};

/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {
  let myH2 = document.querySelector("#changeMyColor");
  myH2.style.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {
  let allH1 = document.querySelectorAll("h1");
  let allH2 = document.querySelectorAll("h2");
  let allp = document.querySelectorAll("p");
  let totalEl = [...allH1].concat([...allH2]).concat([...allp]);
  console.log(totalEl, "totalel");
  totalEl.forEach(
    (el) => (el.innerText = el.innerText.replace(/[aeiou]/gi, ""))
  );
};
deleteVowels();
