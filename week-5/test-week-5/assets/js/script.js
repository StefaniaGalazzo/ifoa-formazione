const stringLength = [18, 20, 26, 15, 23];
//

// animazione header cambio colore
const windowHeight = window.innerHeight;

window.addEventListener("scroll", onScroll);
function onScroll() {
  let header = document.querySelector("header");
  let btn = document.querySelector("li.btn");
  console.log(btn);
  const scrollPosition = window.scrollY;
  if (scrollPosition > 500) {
    header.style.backgroundColor = "#fff";
    btn.style.backgroundColor = "#1a8917";
  } else {
    header.style.backgroundColor = "#ffc017";
    btn.style.backgroundColor = "#000";
  }
}

// SVG ANIMATION
// prendo tutti i tag g che rappresentano le M (anche nascoste)
function getChars() {
  const char = document.querySelectorAll("g[stroke-linecap=butt]");
  let getRandom = Math.floor(Math.random() * char.length);
  let selectedChar = char[getRandom];
  return selectedChar;
}
// prendo tutti i tag g che rappresentano le M (anche nascoste)
function hideChars() {
  let myChar = getChars();
  let opacity = parseInt(myChar.getAttribute("opacity"));
  if (opacity === 0) {
    myChar.setAttribute("opacity", 1);
  } else {
    myChar.setAttribute("opacity", 0);
  }
}
//creo un setinterval per far ripartire ciclicamente la funzione
const intervalOpacity = () => setInterval(() => hideChars(), 100);

window.onload = function () {
  hideChars();
  intervalOpacity();
};

//
//
// ALTERNATIVA ALL'SVG ---- animazione stringhe di M (per testarla commentare l'svg interno al div#letters)
// let intervalId;
// stampaStringhe(stringLength, 3);
// countDown();
// let spanArray = document.querySelectorAll("#letters span");
// hideLetters(spanArray, 180);
// function generateString(length) {
//   const pContainer = document.createElement("p");
//   const myString = `${"M".repeat(length)}`;
//   for (const char of myString) {
//     const span = document.createElement("span");
//     span.textContent = char;
//     pContainer.appendChild(span);
//   }
//   pContainer.appendChild(document.createElement("br"));
//   return pContainer;
// }

// function stampaStringhe(arrayLengths, reps) {
//   const divContainer = document.querySelector("#letters");
//   for (let i = 0; i < reps; i++) {
//     for (const length of arrayLengths) {
//       const span = generateString(length);
//       divContainer.appendChild(span);
//     }
//   }
// }

// function countDown() {
//   if (intervalId) clearInterval(intervalId);
//   intervalId = setInterval(function timer() {
//     removeClassAnimate();
//     animateLetters(10);
//   }, 1300);
// }

// function animateLetters(step) {
//   for (let spn = 0; spn < spanArray.length; spn += step) {
//     let getRandomSpan = Math.floor(Math.random() * step) + spn;
//     getRandomSpan = Math.min(getRandomSpan, spanArray.length - 1);
//     spanArray[getRandomSpan].classList.add("animate");
//   }
// }
// function hideLetters(array, n) {
//   for (let i = 0; i <= n; i++) {
//     let hideRandomSpan = Math.floor(Math.random() * array.length);
//     array[hideRandomSpan].classList.add("hide");
//     console.log(hideRandomSpan, " hide random span");
//     console.log(array, "array");
//   }
// }
// function removeClassAnimate() {
//   let spanArray = document.querySelectorAll("span");
//   for (let spn = 0; spn < spanArray.length; spn++) {
//     if (spanArray[spn].classList.contains("animate"))
//       spanArray[spn].classList.remove("animate");
//   }
// }
