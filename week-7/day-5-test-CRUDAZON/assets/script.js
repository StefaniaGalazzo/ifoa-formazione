const baseURL = "https://striveschool-api.herokuapp.com/api/product/";
const myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNThhYmZlMDMxZTAwMTliYTE5ZWIiLCJpYXQiOjE3MDIzNzY5MjcsImV4cCI6MTcwMzU4NjUyN30.minFxPIMcRs2QSl8r12J8T9i7QHW2_L9_YL2NlXrMFI";
window.onload = () => {
  getProducts();
};

//
// GET
function getProducts() {
  fetch(`${baseURL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${myToken}`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      printPage(data);
      console.log("Dati del prodotto:", data);
    })
    .catch((error) => console.error("Errore durante la modifica:", error));
}

function printPage(data) {
  const container = document.getElementById("detailsContainer");
  //stampo i prodotti salvati nel local storage
  data.forEach((prod) => {
    const prodCard = document.createElement("div");
    prodCard.classList.add("col");
    prodCard.innerHTML = `
      <div class="card mb-4 shadow-sm">
      <img src=${prod.imageUrl} alt='${prod.name} ${prod._id}'/>
       <div class="card-body">
        <h5 class="card-title">${prod.name} <span>${prod.price}€</span></h5>
        <p class="card-text">
        ${prod.description}
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="detailsBtn btn btn-sm btn-outline-secondary"
            >
              <i class="bi bi-info-circle"></i>
            </button>
            <button
              type="button"
              class="modifyBtn btn btn-sm btn-outline-secondary"
            >
             <i class="bi bi-pencil-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
    container.appendChild(prodCard);
    handleButtons(prodCard, prod._id);
  });
}

// abilito la modifica e gestisco il disable dei bottoni della card product
function handleButtons(card, id) {
  const modifyBTN = card.querySelector(".modifyBtn");
  modifyBTN.onclick = () => goOnPage("edit", id);

  const detailsBTN = card.querySelector(".detailsBtn");
  detailsBTN.onclick = () => goOnPage("product", id);
}

function goOnPage(page, id) {
  window.location.href = `${page}.html?id=${id}`;
}
