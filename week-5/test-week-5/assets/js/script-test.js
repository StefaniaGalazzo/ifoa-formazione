const paths = document.querySelectorAll("g");
const mArray = [];

[...paths].forEach((el) => {
  if (el.style.opacity !== 0 || el.style.opacity !== "0") {
    mArray.push(el);
    console.log(mArray, "marray");
  }
  return mArray;
});

function hideM() {
  let getRandom = Math.floor(Math.random() * paths.length);
  if (
    paths[getRandom].style.opacity !== 0 ||
    paths[getRandom].style.opacity !== "0"
  ) {
    paths[getRandom].style.fill = "blue";
    console.log(paths[getRandom]);
  }
}
hideM();
// for (let i =0; i<= mArray.length; i++){

// }
