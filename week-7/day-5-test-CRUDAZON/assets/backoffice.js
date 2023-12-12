const dataURL = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNThhYmZlMDMxZTAwMTliYTE5ZWIiLCJpYXQiOjE3MDIzNzY5MjcsImV4cCI6MTcwMzU4NjUyN30.minFxPIMcRs2QSl8r12J8T9i7QHW2_L9_YL2NlXrMFI";

let products = [];
let editProd = false;
const btnReset = document.getElementById("reset");
btnReset.onclick = resetForm;

const createProdBtn = document.getElementById("createProd");
createProdBtn.onclick = createProd;

//
// POST - Creo un nuovo prodotto
function createProd() {
  const url = dataURL;
  const token = myToken;
  // Ottengo i dati dal modulo
  const name = document.getElementById("name").value;
  const productBrand = document.getElementById("productBrand").value;
  const description = document.getElementById("description").value;
  const price = parseFloat(document.getElementById("price").value);
  const imgSRC = document.getElementById("imgSRC").value;
  // Crearo l'oggetto del nuovo prodotto
  const newProd = {
    name: name,
    description: description,
    brand: productBrand,
    imageUrl: imgSRC,
    price: price,
  };
  // Invio il nuovo prod
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProd),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to create product. Status: ${response.status}`);
      }
      return response.json();
    })
    .then((createdProduct) => {
      console.log("Product created successfully:", createdProduct);
      alert("Product created successfully:", createdProduct);
      // window.location.href = "idex.html";
    })
    .catch((error) => console.error("Error creating product:", error));
  resetForm();
}

function resetForm() {
  const form = document.querySelector("#nuovoProdottoForm");
  form.querySelector("#name").value = "";
  form.querySelector("#productBrand").value = "";
  form.querySelector("#description").value = "";
  form.querySelector("#price").value = "";
  form.querySelector("#imgSRC").value = "";
}
