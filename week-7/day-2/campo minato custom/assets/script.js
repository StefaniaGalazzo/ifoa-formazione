/* -----------------------
GET ELEMEMNTS FROM HTML
------------------------ */
// Game panel
const scoreCounter = document.querySelector(".score-counter");
const grid = document.querySelector(".grid");
const endGameScreen = document.querySelector(".end-game-screen");

// Livelli
const selectLevel = document.querySelector("#levels");
//
const bonusCard = document.querySelector(".bonus");
//Bad Narval Card
// const narvalCard = document.querySelector(".dead");
const deadCardContainer = document.querySelector("#dead-card-container");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".bodytext");
const cardCite = document.querySelector(".cite");
const closeBtn = document.querySelector(".close");
const spookyContentImg = document.querySelector("#spookyContentImg");
// End game
const endGameText = document.querySelector(".end-game-text");
const playAgainButton = document.querySelector(".play-again");

// Game Logic info
let score = 0;
const totalCells = 100;
const totDeadNarvals = 30;
const totHappyNarvals = 5;
const deadNarvList = [];
const happyNarvList = [];
// Cards
const badCardsContent = [
  {
    id: 0,
    title: "Not all men (?)",
    body: "In Italia quest anno contiamo più di 100 femminicidi.",
  },
  {
    id: 1,
    title: "Governo (anti)femminista",
    body: "Legge di Bilancio, raddoppia l'Iva su assorbenti, pannolini e alimenti per bambini:",
  },
  {
    id: 2,
    title: "☠️ Reato Universale 😱",
    body: "26 LUGLIO 2023  la Camera dei deputati approva un ddl che propone la GPA come Reato Universale",
  },
  {
    id: 3,
    title: "Stop alle famiglie (🌈)",
    body: "Il sindaco Sala ritira le trascrizioni delle famiglie omogenitoriali (ci ripensa mesi dopo) ",
  },
  {
    id: 4,
    title: "☠️ Sopra la media ☠️",
    body: "Nell'ultimo anno sono 170 le Vittime di omofobia registrate (probabilmente molte di più quelle effettive)",
  },
  {
    id: 5,
    title: "IGV, questa sconosciuta.",
    body: "Sebbene l'interruzione volontaria di gravidanza (Ivg) sia una prestazione compresa nei Lea - l'elenco di prestazioni essenziali che il Ssn è tenuto a fornire a tutti i cittadini - solo poco più della metà delle strutture ospedaliere la effettua, e la pillola abortiva (RU486) continua immotivatamente a essere considerata un farmaco rischioso col fine di ostracizzare la libertà delle donne.",
  },
  {
    id: 6,
    title: "🙏Madonna Ferragni salvace tu!🙏",
    body: "Mentre i Centri Anti Violenza si vedono a combattere per evitare sgomberi o ad attendere donazioni dalla Ferragni durante Sanremo per poter mantenere attivi servizi di supporto, vediamo raddoppiare i fondi ad associazioni e iniziative antiabortiste.",
  },
  {
    id: 7,
    title: "Obietterei.",
    body: "Secondo i dati del Ministero della Salute, le strutture ospedaliere che effettuano Ivg sono poco più del 60%. È inoltre obiettore di coscienza, in media, dal 36% al 90% del personale medico, degli anestesisti e dei ginecologi.",
  },
  {
    id: 8,
    title: "🌈Rainbow Europe Map 2023🌈",
    body: "Nella Rainbow Europe Map 2023, uno strumento di benchmarking annuale che illustra la situazione dei diritti umani delle persone LGBTI in Europa e in Asia centrale, l'Italia si classifica al 34° posto su 49 Paesi.",
  },
  {
    id: 9,
    title: "🌈IL CONTESTO GLOBALE",
    body: "Sono 67 gli stati in cui gli atti sessuali tra persone dello stesso sesso sono criminalizzati. 11 gli stati che prevedono la pena di morte per atti sessuali tra persone dello stesso sesso. Solo 13le costituzioni che vietano la discriminazione delle persone lgbtqia+. ",
  },
  {
    id: 10,
    title: "GOVERNO MODERNO",
    body: "In Italia si continua a spingere verso un'economia non sostenibile, voltando le spalle ai provvedimenti europei",
  },
  {
    id: 11,
    title: "GOVERNO MODERNO bis",
    body: "Carne coltivata: eresia! Farina di insetti? Bienvenue!",
  },
  {
    id: 12,
    title: "MATTA-TOIO",
    body: "Mentre si piangono le vittime quotidiane di femminismo, il governo fa sgomberare molte consultorie e centri antiviolenza",
  },
  {
    id: 13,
    title: "ESTREMAMENTE FROCE!",
    body: "La Russia vieta il movimento lgbt+, accusato di “estremismo”",
  },
  {
    id: 14,
    title: "G3N0C1D1IO",
    body: "Dal 7 ottobre sono stati uccisi più di 14.800",
  },
  {
    id: 15,
    title: "☠️ Oh no! ☠️",
    body: "Accidenti! Baby Narval è stato circondato da un gruppo di Bravi Ragazzi!",
  },
  {
    id: 16,
    title: "Omofobia, portami via!",
    body: "Si contano ben 133 storie di odio contro persone LGBTQIA+ negli ultimi 12 mesi",
  },
  {
    id: 17,
    title: "UNA PRESA PER IL CULO 🍑",
    body: "È ciò che sembra essere il piano “Educare alle relazioni” presentato dal ministro Valditara e dal Governo extracurriculare(facoltativo,su base volontaria deigli Istituti, solo 30 ore l’anno e per scuole superiori, con il consenso dei genitori)",
  },
  {
    id: 18,
    title: "🍯 FRATELLO ORSO (?)",
    body: "Sono più di 7 gli orsi uccisi in trentino dall'inizio del 2023.",
  },
  {
    id: 19,
    title: "☠️ Oh no! ☠️",
    body: "A causa del cambiamento climatico la casa di Baby Narval è andata distrutta!",
  },
  {
    id: 20,
    title: "☠️ Oh no! ☠️",
    body: "Ti vogliono rubare il corno per venderlo al mercato nero!",
  },
  {
    id: 21,
    title: "🌈 SURPRISE 🌈",
    body: "Il caldo ti da alla testa, pensi di essere un unicorno e ti lanci fuori dall'acqua.",
  },
  {
    id: 22,
    title: "☠️ Oh no! ☠️",
    body: "Scambi una caravella portoghese per un biscotto e finisci avvelenato!",
  },
  {
    id: 23,
    title: "card 23",
    body: "",
  },
  {
    id: 24,
    title: "card 24",
    body: "",
  },
  {
    id: 25,
    title: "card 25",
    body: "",
  },
  {
    id: 26,
    title: "card 26",
    body: "",
  },
  {
    id: 27,
    title: "card 27",
    body: "",
  },
  {
    id: 28,
    title: "card 28",
    body: "",
  },
  {
    id: 29,
    title: "card 29",
    body: "",
  },
];

// Generate random badCard in game grid
const nums = new Set();
while (nums.size !== badCardsContent.length) {
  nums.add(Math.floor(Math.random() * badCardsContent.length));
}

const extractNumbers = [];
function extraction() {
  let randomNum = Math.floor(Math.random() * badCardsContent.length);
  let invalidNum = extractNumbers.find((n) => n === randomNum);
  if (invalidNum) {
    extraction();
  } else {
    extractNumbers.push(randomNum);
    cardTitle.innerText = badCardsContent[randomNum].title;
    deadCardContainer.classList.remove("hide");
  }
}
// Posiziono randomicamente le celle deadNarv
while (deadNarvList.length < totDeadNarvals) {
  const number = Math.floor(Math.random() * totalCells) + 1;
  if (!deadNarvList.includes(number)) {
    deadNarvList.push(number);
  }
}

// Posiziono randomicamente le celle per le card bonus
while (happyNarvList.length < totHappyNarvals) {
  const number = Math.floor(Math.random() * totalCells) + 1;
  if (!happyNarvList.includes(number) && !deadNarvList.includes(number))
    happyNarvList.push(number);
}

/* -----------------------
START GAME DESIGN - CREATE GRID
-----------------------*/
let isCellEven = false;
let isRowEven = false;

for (let i = 1; i <= totalCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  isCellEven = i % 2 === 0;

  // Stile scacchiera
  if ((isRowEven && isCellEven) || (!isRowEven && !isCellEven))
    cell.classList.add("cell-dark");
  if (i % 10 === 0) isRowEven = !isRowEven;

  // QUANDO clicco su una casella
  cell.addEventListener("click", function () {
    // SE è già cliccata
    if (
      cell.classList.contains("cell-clicked") ||
      cell.classList.contains("dead-narv") ||
      cell.classList.contains("happy-narv")
    )
      return;
    //   SE è un deadNarval
    if (deadNarvList.includes(i)) {
      // decrese score
      score -= 5;
      // show dead narv cell
      cell.classList.add("dead-narv");
      /**************** show dead card */
      extraction();
    } else if (happyNarvList.includes(i)) {
      // bonus score and show popup
      cell.classList.add("happy-narv"); // DA CREARE
      bonusCard.classList.remove("hide");
      score += 15;
    } else {
      cell.classList.add("cell-clicked");
      score += 5;
    }
    // ---- HANDLE SCORE AND ENDGAME ---- //
    if (score <= 0) {
      score = 0;
      scoreCounter.innerText = String(score).padStart(5, 0);
      endGame((isVictory = false));
    }
    if (score > 0) {
      scoreCounter.innerText = String(score).padStart(5, 0);
    }
    // controllo se le celle sono tutte cliccate
    const clickedCells = document.querySelectorAll(".cell-clicked");
    const totNarvCells =
      totalCells - deadNarvList.length - happyNarvList.length;
    if (totNarvCells === clickedCells.length) {
      endGame((isVistory = true));
    }
  });
  grid.appendChild(cell);
}
/*-- end game design --*/

/* -------------------
FUNC
-------------------*/
// CLOSE POPUP
function closePopup() {
  deadCardContainer.classList.add("hide");
  bonusCard.classList.add("hide");
}

// SHOW END GAME LAYOUT
function endGame(isVictory) {
  if (isVictory === true) {
    endGameScreen.classList.add("win");
    endGameText.innerHTML = "YOU<br>WIN";
  } else {
    revealAllDead();
  }
  endGameScreen.classList.remove("hide");
}

// reveal all narvs
function revealAllDead() {
  // Recupero tutte le celle
  const cells = document.querySelectorAll(".cell");
  for (let i = 1; i <= cells.length; i++) {
    // controllo se la cella è una bomba
    if (deadNarvList.includes(i)) {
      const cellToReveal = cells[i - 1];
      cellToReveal.classList.add("dead-narv");
    }
  }
}

// Play again
function playAgain() {
  location.reload();
}
/*end func*/

/* ---------------------
EVENTI
-----------------------*/
// PLAY AGAIN
playAgainButton.addEventListener("click", playAgain);

// Close popup
deadCardContainer.addEventListener("click", closePopup);
bonusCard.addEventListener("click", closePopup);
