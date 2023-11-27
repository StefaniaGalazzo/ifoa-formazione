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
