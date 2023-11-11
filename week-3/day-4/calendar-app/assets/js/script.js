//1. prendere il valore del mese corrente, scriverlo nell'h1,  e dei giorni del mese per generare le celle del calendario
//
const now = new Date(); // mi restituisce la data corrente
console.log(now);

// const getYear = new.getFullYear();
// const getMonth = new.getMonth();
// const lastDayDate = new Date(getYear, getMonth +1, 0)

// for (let i = 1; i <= totalCells; i++) {
//   const cell = document.createElement("div");
//   cell.classList.add("cell");
//   isCellEven = i % 2 === 0;
// }

//per salvare gli appuntamenti avrò bisogno di salvarli in un array
//ogni appuntamento è una stringa
//ogni giorno può avere diversi appuuntamenti
//il numero dei mesi è variabile a seconda del mese

/*
es:
[ array del mese
    [day 1],[day 2],[day 3], ...
]

[ mese di novembre
    ['appuntamento 1 di giorno 1','appuntamento 2 di giorno 1','appuntamento 3 di giorno 1',],
    ['appuntamento 1 di giorno 2','appuntamento 2 di giorno 2','appuntamento 3 di giorno 2',],
    [...],
    [...],
]
*/
// dentro array appointments pushiamo tanti sotto array quanti giorni del mese
const appointments = [];
const monthNames = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Marggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];

const writeMonth = function () {
  const title = document.querySelector("h1");
  const monthIndex = now.getMonth(); //restituisce il numero del mese
  const monthName = monthNames[monthIndex]; //prendo il nome del mese dall'array creato attraverso l'index
  title.innerText = monthName;
};
writeMonth();

// calcoliamo i giorni del mese per ogni mese
const numberOfDays = function () {
  const year = now.getFullYear();
  const month = now.getMonth();
  const lastDay = new Date(year, month + 1, 0); // è come se prendessi il valore dello 0 dicembre. ovvero l'ultimo giorno di novembre.
  const dayNumber = lastDay.getDate();
  console.log(dayNumber, lastDay, "numero dei gg", "last day");
  return dayNumber;
};
numberOfDays();

const deselectCells = function () {
  const cells = document.querySelectorAll("day");
  cells.forEach((el) => el.classList.remove("selected"));
};

const dayAppointment = function (dayIndx) {
  const day = document.getElementById("newMeetingDay");
  day.classList.add("hasDay");
  day.innerText = dayIndx;
};

const createGrid = function (numDays) {
  //giorni del mese corrente
  const calendarDiv = document.getElementById("calendar");
  for (i = 0; i > numDays; i++) {
    const dayCell = document.createElement("div");
    dayCell.classList.add("day");
    dayCell.addEventListener("click", dayClickHandler(dayCell, i));
    const cellValue = document.createElement("h4");
    cellValue.innerText = i + 1;
    calendarDiv.appendChild(dayCell);
    cellValue.appendChild(cellValue);
  }
};
createGrid(numberOfDays());

function dayClickHandler(cell, i) {
  console.log("dayclickhandler");
  deselectCurrentCell();
  cell.classList.add("selected");
  dayAppointment(i);
  if (appointments[i].length > 0) showAppointments(i);
  else {
    const divAppointmets = document.getElementById("appointments");
    divAppointmets.style.display = "none";
  }
}
