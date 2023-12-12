const baseURL = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNThhYmZlMDMxZTAwMTliYTE5ZWIiLCJpYXQiOjE3MDIzNzY5MjcsImV4cCI6MTcwMzU4NjUyN30.minFxPIMcRs2QSl8r12J8T9i7QHW2_L9_YL2NlXrMFI";
const prodURL = window.location.search;
const productId = new URLSearchParams(prodURL).get("id");

window.onload = () => {
  getProd();
};
//
// GET
function getProd() {
  fetch(`${baseURL}${productId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      printProd(data);
      console.log("Dati del prodotto:", data);
    })
    .catch((error) => console.error("Errore durante la modifica:", error));
}

function printProd(data) {
  const prodImg = document.getElementById("prodImg");
  prodImg.setAttribute("src", `${data.imageUrl}`);
  prodImg.setAttribute("alt", `${data.name}`);
  prodImg.setAttribute("width", `100%`);

  const brand = document.getElementById("brand");
  brand.innerText = data.brand;
  const name = document.getElementById("name");
  name.innerText = data.name;
  const price = document.getElementById("price");
  price.innerText = data.price;
  const desc = document.getElementById("desc");
  desc.innerText = data.description;
}
