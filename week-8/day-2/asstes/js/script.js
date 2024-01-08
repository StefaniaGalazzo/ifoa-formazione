// let clicked = 0;
let losts = 0;
let score = 0;
let totScore = 0;
const scoreHTML = document.getElementById("score");
const startBTN = document.getElementById("startGame");
startBTN.onclick = animateElement;

function animateElement() {
  const element = document.getElementById("elToHit");
  let positionTop = 0;
  let speed = 2;
  function move() {
    positionTop += speed;
    element.style.top = `${positionTop}px`;
    if (positionTop >= window.innerHeight + element.offsetHeight) {
      positionTop = 0;
      element.style.left = `${
        Math.random() * (window.innerWidth - element.offsetWidth)
      }px`;
      element.style.display = "block";
    }
    requestAnimationFrame(move);
  }
  move();
  element.addEventListener("click", () => {
    score += 1;
    speed *= 1.02; // aumento la velocità
    scoreHTML.innerText = score;
    element.offsetHeight != 0 ? (element.style.display = "none") : "block";
  });
}

function handleTotalScore() {
  totScore = score - losts;
  console.log(losts, "losts");
  score = score - losts;
  losts < 0 ? gameOver() : "";
  console.log(totScore, "tot");
}

function gameOver() {
  document.body.innerHTML = "<h4>Game over!</h4>";
}
// CIAO STEFANIA, DEVI GESTIRE LO SCORE. BACI
