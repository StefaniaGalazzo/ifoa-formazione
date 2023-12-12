const baseURL = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNThhYmZlMDMxZTAwMTliYTE5ZWIiLCJpYXQiOjE3MDIzNzY5MjcsImV4cCI6MTcwMzU4NjUyN30.minFxPIMcRs2QSl8r12J8T9i7QHW2_L9_YL2NlXrMFI";
const prodURL = window.location.search;
const productId = new URLSearchParams(prodURL).get("id");

window.onload = () => {
  getProd();
  handleBtns();
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
      populateForm(data);
      console.log("Dati del prodotto:", data);
    })
    .catch((error) => console.error("Errore durante la modifica:", error));
}

//
//PUT
function modifyProd() {
  const form = document.querySelector("#modifyProd");
  // Recupero i nuovi valori dal form
  const updatedData = {
    name: form.querySelector("#name").value,
    brand: form.querySelector("#productBrand").value,
    description: form.querySelector("#description").value,
    price: parseFloat(form.querySelector("#price").value),
    imageUrl: form.querySelector("#imgSRC").value,
  };
  fetch(`${baseURL}${productId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Dati aggiornati:", data);
      alert("modifiche apportate con successo");
      window.location.href = `product.html?id=${productId}`;
    })
    .catch((error) => console.error("Errore durante la modifica:", error));
}

//
// DELETE
function deleteProd() {
  const apiUrl = `${baseURL}${productId}`;
  fetch(apiUrl, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to delete product. Status: ${response.status}`);
      }
      console.log("Product deleted successfully");
      alert("Product deleted successfully");
      //   window.location.href = `product.html?id=${productId}`;
    })
    .catch((error) => console.error("Error deleting product:", error));
}

/**** CALLBACKS ****/
function handleBtns() {
  const deleteBTN = document.querySelector("#deleteProd");
  const resetBTN = document.querySelector("#resetForm");
  const saveBTN = document.querySelector("#saveForm");

  saveBTN.onclick = modifyProd;
  resetBTN.onclick = resetForm;
  deleteBTN.onclick = deleteProd;
}
function resetForm() {
  const form = document.querySelector("#modifyProd");
  form.querySelector("#name").value = "";
  form.querySelector("#productBrand").value = "";
  form.querySelector("#description").value = "";
  form.querySelector("#price").value = "";
  form.querySelector("#imgSRC").value = "";
}
function populateForm(data) {
  const form = document.querySelector("#modifyProd");
  form.querySelector("#name").value = `${data.name}`;
  form.querySelector("#productBrand").value = `${data.brand}`;
  form.querySelector("#description").value = `${data.description}`;
  form.querySelector("#price").value = `${data.price}`;
  form.querySelector("#imgSRC").value = `${data.imageUrl}`;
}
