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
  let pGroup = document.querySelectorAll("div p");
  pGroup.forEach((el) => (el.innerHTML = "testo cambiato"));
};
changePcontent();
/* ESERCIZIO 4
 Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
*/

const changeUrls = function () {
  let aGroup = document.querySelectorAll("a:not(footer a)");
  aGroup.forEach((el) => el.setAttribute("href", "https://www.google.com"));
  console.log(aGroup);
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
  const firstDiv = document.querySelector("div");
  let myP = document.createElement("p");
  myP.innerText = "sono un p creato in JS!";
  firstDiv.appendChild(myP);
};
addParagraph();
//
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
  document.querySelectorAll("ul").forEach((el) => (el.className = "green"));
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

let footerLink = document.querySelector("footer a");
let footer = document.querySelector("footer");
const revealFooterLink = function () {
  alert(`${footerLink.href}`);
};
/* ESERCIZIO 11
 Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
 La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
*/
// const myData = [
//   {
//     img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     name: "The Lord ",
//     qty: 30,
//     price: 40,
//   },
//   {
//     img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     name: "The Rings",
//     qty: 1,
//     price: 20,
//   },
//   {
//     img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     name: "The ship",
//     qty: 3,
//     price: 5,
//   },
//   {
//     img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     name: "The Lord of the Rings: The Fellowship of the Ring",
//     qty: 30,
//     price: 40,
//   },
//   {
//     img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     name: "The Lord of the Rings: The Fellowship of the Ring",
//     qty: 30,
//     price: 40,
//   },
//   {
//     img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     name: "The Lord of the Rings: The Fellowship of the Ring",
//     qty: 30,
//     price: 40,
//   },
//   {
//     img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
//     name: "The Lord of the Rings: The Fellowship of the Ring",
//     qty: 30,
//     price: 40,
//   },
// ];

// const tableTitle = ["immagine", "nome prodotto", "quantità", "prezzo"];

const prodotti = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    name: "The Lord ",
    qty: 30,
    price: 40,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    name: "The Rings",
    qty: 1,
    price: 20,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    name: "The ship",
    qty: 3,
    price: 5,
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    name: "The Lord of the Rings: The Fellowship of the Ring",
    qty: 30,
    price: 40,
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    name: "The Lord of the Rings: The Fellowship of the Ring",
    qty: 30,
    price: 40,
  },
];
const generateTable = function () {
  const contenitore = document.getElementById("tableArea");
  const tabella = document.createElement("table");
  tabella.classList.add("tabella");

  const primaRiga = document.createElement("tr");

  const intImmagine = document.createElement("th");
  intImmagine.innerText = "Immagine";
  const intNome = document.createElement("th");
  intNome.innerText = "Nome prodotto";
  const intQty = document.createElement("th");
  intQty.innerText = "Quantità";
  const intPrezzo = document.createElement("th");
  intPrezzo.innerText = "Prezzo";

  primaRiga.appendChild(intImmagine);
  primaRiga.appendChild(intNome);
  primaRiga.appendChild(intQty);
  primaRiga.appendChild(intPrezzo);
  tabella.appendChild(primaRiga);

  for (let i = 0; i < prodotti.length; i++) {
    const nuovaRiga = document.createElement("tr");

    const cellaImmagine = document.createElement("td");
    cellaImmagine.src = `${prodotti[i].img}`;
    const cellaNome = document.createElement("td");
    cellaNome.innerText = `${prodotti[i].name}`;
    const cellaQty = document.createElement("td");
    cellaQty.innerText = `${prodotti[i].qty}`;
    const cellaPrezzo = document.createElement("td");
    cellaPrezzo.innerText = `${prodotti[i].price}`;

    nuovaRiga.appendChild(cellaImmagine);
    nuovaRiga.appendChild(cellaNome);
    nuovaRiga.appendChild(cellaQty);
    nuovaRiga.appendChild(cellaPrezzo);
    tabella.appendChild(nuovaRiga);
  }

  contenitore.appendChild(tabella);
};

generateTable();

// let myTable = document.createElement("table");
// let myTbody = document.createElement("tbody");
// const generateTable = function () {
//   let myTableRow = document.createElement("tr");
//   myTable.setAttribute("id", "myTableArea");
//   document.getElementById("tableArea").appendChild(myTable);
//   myTable.appendChild(myTbody);
//   myTbody.appendChild(myTableRow);
//   for (let i = 0; i < tableTitle.length; i++) {
//     let myTh = document.createElement("th");
//     myTableRow.appendChild(myTh);
//     myTh.innerHTML = `${tableTitle[i]}`;
//   }
//   console.log(document.querySelectorAll("th"), "th group");
// };
// generateTable();

/****************************
 *
 */
/* ESERCIZIO 12
 Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
*/
const addRow = function () {
  const nuovoProdotto = {
    id: 6,
    immagine: "immagine6",
    nomeProd: "prodotto 6",
    quantita: 18,
    prezzo: 25,
  };

  prodotti.push(nuovoProdotto);

  const tabella = document.querySelector("table");

  const nuovaRiga = document.createElement("tr");

  let i = prodotti.length - 1;

  const cellaImmagine = document.createElement("td");
  cellaImmagine.innerText = `${prodotti[i].immagine}`;
  const cellaNome = document.createElement("td");
  cellaNome.innerText = `${prodotti[i].nomeProd}`;
  const cellaQty = document.createElement("td");
  cellaQty.innerText = `${prodotti[i].quantita}`;
  const cellaPrezzo = document.createElement("td");
  cellaPrezzo.innerText = `${prodotti[i].prezzo}`;

  nuovaRiga.appendChild(cellaImmagine);
  nuovaRiga.appendChild(cellaNome);
  nuovaRiga.appendChild(cellaQty);
  nuovaRiga.appendChild(cellaPrezzo);
  tabella.appendChild(nuovaRiga);

  nuovaRiga.appendChild(cellaImmagine);
  nuovaRiga.appendChild(cellaNome);
  nuovaRiga.appendChild(cellaQty);
  nuovaRiga.appendChild(cellaPrezzo);
  tabella.appendChild(nuovaRiga);
};

addRow();
// const addRow = function () {
//   const tableBody = document.querySelector("tbody");
//   let myTableRow = document.createElement("tr");
//   tableBody.appendChild(myTableRow);
//   let myArrayData = [];
//   for (let i = 0; i < myData.length; i++) {
//     myArrayData = [
//       myData[i].img,
//       myData[i].name,
//       myData[i].qty,
//       myData[i].price,
//     ];
//   }
//   for (let i = 0; i < myArrayData.length; i++) {
//     let myTd = document.createElement("td");
//     myTableRow.appendChild(myTd);
//     console.log(myTd);
//   }
//   let tdGroup = document.querySelectorAll("td");
//   console.log(tdGroup, "tdgrup");
//   for (let i = 0; i < myArrayData.length; i++) {
//     tdGroup[0].style.backgroundImage = `url(${myArrayData[0]})`;
//     tdGroup[1].innerText = `${myArrayData[1]}`;
//     tdGroup[2].innerHTML = `${myArrayData[2]}`;
//     tdGroup[3].innerHTML = `${myArrayData[3]}`;
//   }
//   console.log(myArrayData);
// };
// addRow();

/********
 * *********** */
/* ESERCIZIO 14
Crea una funzione che nasconda le immagini della tabella quando eseguita
// */

const hideAllImages = function () {
  const immagini = document.querySelectorAll("td img");
  immagini.forEach((element) => (element.style.display = "none"));
};
// let imgTable = document.querySelector("td img");
// let btn = document.querySelector("#show-hide-btn");
// const hideAllImages = function () {
//   console.log(imgTable, "img mytable");
//   imgTable.style.display = "block";
//   btn.onclick = function () {
//     if (imgTable.style.display === "block") imgTable.style.display = "none";
//     else if (imgTable.style.display === "none")
//       imgTable.style.display = "block";
//   };
// };
// hideAllImages();

//
/* EXTRA ESERCIZIO 15
Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
*/

const changeColorWithRandom = function () {
  document.querySelector("#changeMyColor").style.color = `rgb(${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
};

/* EXTRA ESERCIZIO 16
Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
*/

const deleteVowels = function () {
  let totalEl = document.querySelectorAll(
    "h1, h2,h3, p, a, li, th, td, button"
  );
  totalEl = [...totalEl];
  // console.log(totalEl);
  totalEl.forEach(
    (el) => (el.innerText = el.innerText.toLowerCase().replace(/[aeiou]/gi, ""))
  );
};
deleteVowels();

//esempio prof
// const deleteVowels = function () {
// 	document.querySelectorAll('h1, h2, li, a, p, h3, th, td').forEach((element) => {  // selettore querySelectorAll multiplo
// 		element.innerText = [...element.innerText].filter((carattere) => { // descrizione di una stringa di testo come array con lo spread operator
// 			carattere = carattere.toLowerCase();
// 			return ( // restituzione di elementi filtrati a condizione
// 				carattere !== 'a' &&
// 				carattere !== 'e' &&
// 				carattere !== 'i' &&
// 				carattere !== 'o' &&
// 				carattere !== 'u'
// 			);
// 		}).join('') // fusione degli elementi nell'array fltrato in parola unica
// 	});
// };
