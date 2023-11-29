const hideDiscounted = document.querySelector("#hide");
const hideOffer = document.querySelector("#hide-offer");
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
