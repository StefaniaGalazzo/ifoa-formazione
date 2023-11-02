/*
1. leggere il campo nome e memorizzarlo
2. leggere il campo anno e memorizzarlo
3. calcolare l'età
4. verifica la maggiore o minore età
5. scrivere nell0html
6. cancellare il form

//definisco quali sono gli eventi 
.EVENTO SCATENANTE
click btn verifica

//determino le variabili globli necessarie all'intera applicazione
VARIABILI GLOBALI
nome
anno
stato (condizione)
*/

let currentYear = 2023;
let verifyBtn = document.getElementById("verifyBtn");
let stato; //globale utilizzata per verificare l'età e stampare a video
let age;
let error = document.querySelector("#error");

function eventHandler() {
  readFormData(); // pt 1 e 2
  if (anno > 1900 && anno <= currentYear && nome != "") {
    error.innerHTML = "&nbsp;";
    calculateAge(); // pt 3
    verifyAge(); // pt 4
    writeHTML(); // pt 5
    deleteForm(); // pt 6
  } else {
    error.innerHTML = "ERRORE: Compila il campo con un valore valido";
    return;
  }
}

function readFormData() {
  nome = document.getElementById("nome").value;
  anno = document.getElementById("anno").value;
  console.log(nome, anno, "nome e anno");
}
function calculateAge() {
  age = currentYear - Number(anno);
}
function verifyAge() {
  stato = age >= 18 ? "maggiorenne" : "minorenne";
  console.log(stato, "stato");
}
function writeHTML() {
  document.getElementById("mioNome").innerText = "ciao" + nome;
  document.getElementById("miaVerifica").innerText = "ciao" + age;
  console.log(printAge, printName, "sono qui");
}
function deleteForm() {
  document.getElementById("mioNome").innerHTML = "";
  document.getElementById("miaVerifica").innerHTML = "";
}
