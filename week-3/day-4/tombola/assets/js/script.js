const stratBTN = document.getElementById("start");
const myCardBTN = document.getElementById("chooseNumToPlay");
const extractionBTN = document.getElementById("extract");
const extractNumbers = [];
stratBTN.addEventListener("click", init);
document.addEventListener("click", checkStartGame);
myCardBTN.addEventListener("click", createCard);
extractionBTN.addEventListener("click", function () {
  extraction();
}); // estraggo i numeri casuali

function checkStartGame() {
  if (extractionBTN.disabled) {
    const input = document.getElementById("choosenCard");
    input.disabled = true;
    document.querySelector("#start").innerHTML = "Start the game!";
  }
}
function init() {
  const input = document.getElementById("choosenCard");
  input.disabled = false;
  const totalCells = 90;
  const bingoBoard = document.getElementById("bingoBoard");
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = i + 1;
    bingoBoard.appendChild(cell);
  }
  stratBTN.style.display = "none";
  extractionBTN.disabled = false;
  createCard();
}

function extraction() {
  //funzione ricorsiva: una funziona che a una data condizione verificata richiama se stessa
  let extractedNumber = document.getElementById("extractedNumber");
  let randomNum = Math.floor(Math.random() * 91);
  let invalidNum = extractNumbers.find((n) => n === randomNum);
  if (invalidNum || randomNum === 0) {
    extraction();
  } else {
    extractNumbers.push(randomNum);
    extractedNumber.innerHTML = randomNum;
    colorCell(randomNum);
    colorCardCell(randomNum);
  }
}

function colorCell(n) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((el) => {
    //confronto il num interno alla cella con il numero estratto
    let numCell = Number(el.innerText);
    if (numCell === n) {
      el.style.backgroundColor = "rgb(188, 134, 255)";
      el.style.color = "#fff";
    }
  });
}
function colorCardCell(n) {
  const cardCells = document.querySelectorAll(".cardCell");
  cardCells.forEach((el) => {
    //confronto il num interno alla cella con il numero estratto
    let numCell = Number(el.innerText);
    if (numCell === n) {
      el.classList.add("extracted");
    }
  });
  youWin();
  console.log(
    document.querySelectorAll(".cardCell"),
    ' document.querySelectorAll(".cardCell")'
  );
  console.log(
    document.querySelectorAll(".extracted"),
    ' document.querySelectorAll(".extracted")'
  );
}

function createCard() {
  const cardContainer = document.querySelector("#userCard");
  const input = document.getElementById("choosenCard");
  let numbersInCard = [];
  let myValues = [];
  let myValue = input.value;
  myValues.push(Number(myValue));
  input.value = "";
  for (let i = 0; i < myValues[0]; i++) {
    let error = document.querySelector("#error");
    if (myValues[0] >= input.min && myValues[0] <= input.max) {
      let randomNumCard = Math.floor(Math.random() * 91);
      numbersInCard.push(randomNumCard);
      const cardCell = document.createElement("div");
      cardCell.classList.add("cardCell");
      cardCell.innerHTML = `<p>${numbersInCard[i]}</p>`;
      cardContainer.appendChild(cardCell);
      input.disabled = true;
      error.innerHTML = "";
    } else {
      error.innerHTML = "Scegli i numeri per la tua cartella!";
    }
  }
}

function youWin() {
  const cardCells = document.querySelectorAll(".cardCell");
  const extractedCardCells = document.querySelectorAll(".extracted");
  let winScreen = document.querySelector("#winScreen");
  if (cardCells.length === extractedCardCells.length)
    setTimeout((winScreen.style.display = "block"), 1000);
  playAgain();
}

function playAgain() {
  const reStartBTN = document.getElementById("re-start");
  reStartBTN.onclick = () => {
    location.reload();
  };
}
// function showError() {
//   const input = document.getElementById("choosenCard");
//   const error = document.querySelector("#error");
//   if (input.checkValidity())
//     error.innerHTML = "Scegli i numeri per la tua cartella!";
//   else if (input.disabled)
//     error.innerHTML =
//       "Hai già scelto! Per fare una nuova scelta inizia un'altra partita";
// }

// function chooseCardNums() {
//   const input = document.querySelector("input#choosenCard");
//   let myValues = [];
//   let value = input.value;
//   myValues.push(value);
//   console.log(input.value, "input value");
//   console.log(myValues, "myvaluesssssss");
// }
