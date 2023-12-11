const baseURL = "https://api.pexels.com/v1/search?query=";
const token = "5qUCWpiLuQb8b6eMy0ecj4c23zDD9jbSaPnvZAktXvPMcsi8z4oEJhhz";

const loadMainImgsBtn = document.getElementById("loadIMGS");
const loadSecondaryImgsBtn = document.getElementById("loadSecondaryIMGS");
const leadBySearch = document.getElementById("searchBtn");

let query = "";
let images = [];
loadMainImgsBtn.onclick = () => loadIMGS("cat");
loadSecondaryImgsBtn.onclick = () => loadIMGS("dog");
leadBySearch.onclick = () => loadIMGS(searchImage());

function loadIMGS(query) {
  let url = `${baseURL}${query}`;
  fetch(url, {
    headers: {
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      images = data;
      console.log(images, "images/data");
      printCards(images);
    })
    .catch((error) => console.error("Errore:", error));
}

function printCards(cards) {
  const imagesContainer = document.getElementById("imagesContainer");
  imagesContainer.innerHTML = "";
  cards.photos.forEach((img) => {
    const imgCard = document.createElement("div");
    imgCard.classList.add("col-md-4");
    imgCard.innerHTML = `
    <div class="card mb-4 shadow-sm"
      data-bs-toggle="modal"
      data-bs-target="#imgDetails"
    >
        <img
          src=${img.src.medium}
          alt=${img.alt}
          class="openInfo" 
          data-id=${img.id} 
        />
      <div class="card-body">
        <h5 class="card-title">Photographer: ${img.photographer}</h5>
        <p class="card-text">
         ${
           img.liked
             ? '<i id="likeFill" class="bi bi-balloon-heart-fill"></i>'
             : '<i id="likeOutline" class="bi bi-balloon-heart"></i>'
         }
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              View
            </button>
            <button
              id='hide'
              type="button"
              class="btn btn-sm btn-outline-secondary"
            >
              Hide
            </button>
          </div>
          <small class="text-muted">${img.id}</small>
        </div>
      </div>
    </div>
  </div>`;
    imagesContainer.appendChild(imgCard);
  });
  const openInfoElements = document.querySelectorAll(".openInfo");
  openInfoElements.forEach((element) => {
    element.onclick = () => {
      openDetails(element.getAttribute("data-id"));
    };
  });
}

function openDetails(id) {
  const imgDetails = images.photos.find(
    (img) => img.id.toString() === id.toString()
  );
  currentCard = imgDetails;
  const modalInfo = document.getElementById("imgInfo");
  modalInfo.innerHTML = `
    <div class='w-100 overflow-hidden'>
    <img
    src=${imgDetails.src.small}
    alt=${imgDetails.alt}
    />
    </div>
    <h6 class="">Photographer: ${imgDetails.photographer}</h6>
    <a class="nav-link">${imgDetails.photographer_url}</a>
  `;
}
function searchImage() {
  const input = document.getElementById("inputSearch");
  query = input.value;
  return query;
}
