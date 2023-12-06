// primo esercizio
let data = [];

handleData();
printData();

function handleData() {
  const inputName = document.querySelector("#insertName");
  const saveData = document.querySelector("#saveData");
  const clearData = document.querySelector("#clearData");
  saveData.onclick = () => {
    let val = inputName.value;
    data.push(val);
    localStorage.setItem("val", JSON.stringify(data));
    inputName.value = "";
  };
  clearData.onclick = () => {
    let storedData = localStorage.getItem("val");
    if (storedData) {
      data = JSON.parse(storedData);
      data.shift();
      localStorage.setItem("val", JSON.stringify(data));
      printData();
    }
    inputName.value = "";
  };
}

function printData() {
  const prevVal = document.querySelector("#printPrevValue");
  const currentVal = document.querySelector("#printCurrentValue");
  let storedData = localStorage.getItem("val");
  if (storedData) data = JSON.parse(storedData);
  prevVal.textContent = data[0];
  currentVal.textContent = data[data.length - 1];
}

// secondo esercizio
let intervalId;

countDown();
function countDown() {
  let countdown = sessionStorage.getItem("countdown") || 30;
  let myTimer = document.getElementById("countdown");
  myTimer.innerHTML = countdown;
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(function timer() {
    countdown = --countdown < 0 ? 30 : countdown;
    myTimer.innerHTML = countdown;
    // salvo il valore corrente nel sessionStorage ad ogni tick del timer
    sessionStorage.setItem("countdown", countdown.toString());
  }, 1000);
}
// function countDown() {
//   let countdown = 30;
//   let myTimer = document.getElementById("countdown");
//   myTimer.innerHTML = countdown;
//   if (intervalId) {
//     clearInterval(intervalId);
//   }
//   intervalId = setInterval(function timer() {
//     countdown = --countdown < 0 ? 30 : countdown;
//     myTimer.innerHTML = countdown;
//   }, 1000);
// }
