const hideDiscounted = document.querySelector("#hide");
const hideOffer = document.querySelector("#hide-offer");

showNumsOfTravels();
// nascondere le sezioni
hideDiscounted.onclick = () => {
  const discounted = document.querySelector("#discounted");
  if (discounted.style.display != "none") discounted.style.display = "none";
  else discounted.style.display = "flex";
};
hideOffer.onclick = () => {
  const offer = document.querySelector("#offer");
  if (offer.style.display != "none") offer.style.display = "none";
  else offer.style.display = "flex";
};

//raccogliere il numero di viaggi (che in qst caso corrisponde al numero di card?)
function showNumsOfTravels() {
  const cards = document.querySelectorAll(".card");
  const myInfo = document.createElement("div");
  myInfo.classList.add(
    "col-1",
    "end-0",
    "offset-11",
    "fixed-top",
    "bg-warning",
    "rounded",
    "text-white",
    "p-1",
    "ps-3",
    "mt-5",
    "lh-1",
    "fs-sm"
  );
  myInfo.innerText = `Viaggi presenti in questa pagina:\n ${cards.length}`;
  document.body.appendChild(myInfo);
}
