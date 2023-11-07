let html = document.getElementById("HTML");
let css = document.getElementById("CSS");
let js = document.getElementById("JS");

let selected = [html, css, js];
let student = {
  name: "Mario",
  cognome: "Rossi",
  materie: [],
};
console.log("studemt", student);

function invia() {
  let courses = [];
  student.materie = [];
  document.getElementById("selected").innerHTML = ``;
  selected.forEach((el) => {
    if (el.checked) {
      courses.push(el.value);
    }
  });
  document.getElementById(
    "selected"
  ).innerHTML = `Corsi selezionati: ${courses}`;
  student.materie.push(...courses);
  console.log(student);
}
