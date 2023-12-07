const dataURL = "https://striveschool-api.herokuapp.com/books";

const cardsContainer = document.querySelector("#cardsContainer");
let cart = [];
let favourite = [];

fetch(dataURL)
  .then((response) => {
    if (!response.ok)
      throw new Error(`Errore nella richiesta Fetch: ${response.status}`);
    return response.json();
  })
  .then((data) => {
    printHome(data);
    addPrefe(data);
    delBookFromHome(data);
    addToCart(data);
    delBookFromCart(data);
  })
  .catch((error) => {
    console.error("Si è verificato un errore durante la fetch:", error);
  });

function printHome(data) {
  data.forEach((book) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = book.img;
    img.classList.add("card-img-top");
    img.alt = book.title;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = book.title;

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = `${book.price}€`;

    let addBtn = document.createElement("a");
    addBtn.classList.add("btn", "btn-primary");
    addBtn.href = "#";
    addBtn.innerText = "❤️";

    let delBtn = document.createElement("a");
    delBtn.classList.add("btn", "btn-warning");
    delBtn.href = "#";
    delBtn.innerText = " X ";

    let buyBtn = document.createElement("a");
    buyBtn.classList.add("btn", "btn-success");
    buyBtn.href = "#";
    buyBtn.innerText = "🛒";

    let delFromCartBtn = document.createElement("a");
    delFromCartBtn.classList.add("btn", "btn-danger");
    delFromCartBtn.href = "#";
    delFromCartBtn.innerText = "Rimuovi dal carrello";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(addBtn);
    cardBody.appendChild(delBtn);
    cardBody.appendChild(buyBtn);
    cardBody.appendChild(delFromCartBtn);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardsContainer.appendChild(card);
  });
}
function addPrefe(data) {
  const addBtns = document.querySelectorAll(".btn-primary");
  addBtns.forEach((addBtn, index) => {
    addBtn.onclick = () => {
      const selectedBook = data[index];
      favourite.push(selectedBook);
      localStorage.setItem("prefe", JSON.stringify(favourite));
      console.log(favourite, "fav addPrefe");
      // show banner add to cart
      const selectedCard = document.querySelectorAll(".card")[index];
      if (selectedCard) {
        const banner = document.createElement("div");
        banner.classList.remove("banner-del");
        banner.classList.add("banner");
        banner.innerText = `Hai aggiunto ${selectedBook.title} hai preferiti!`;
        selectedCard.appendChild(banner);
      }
    };
  });
}
function delBookFromHome(data) {
  const delBtns = document.querySelectorAll(".btn-warning");
  delBtns.forEach((delBtns, index) => {
    delBtns.onclick = () => {
      const selectedBook = data[index];
      // recupero i dati dei prefe dallo storage per aggiornare l'array ed eliminare il libro scartato
      let storedPrefe = localStorage.getItem("prefe");
      console.log(storedPrefe, "stored prefe");
      if (storedPrefe) {
        alert(`Stai per eliminare ${selectedBook.title} anche dai preferiti!`);
        favourite.splice(index, 1);
        localStorage.setItem("prefe", JSON.stringify(favourite));
        console.log(favourite, "favourite delBookFromHome");
      }
      // Nascondi la card corrispondente nell'HTML
      const cardToDelete = document.querySelectorAll(".card")[index];
      if (cardToDelete) cardToDelete.style.display = "none";
    };
  });
}
function addToCart(data) {
  const addToCartBtns = document.querySelectorAll(".btn-success");
  addToCartBtns.forEach((btn, index) => {
    btn.onclick = () => {
      const selectedBook = data[index];
      cart.push(selectedBook);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart, "cart addToCart");
      // show banner add to cart
      const selectedCard = document.querySelectorAll(".card")[index];
      if (selectedCard) {
        const banner = document.createElement("div");
        banner.classList.remove("banner-del");
        banner.classList.add("banner");
        banner.innerText = `Hai aggiunto ${selectedBook.title} al tuo carrello!`;
        selectedCard.appendChild(banner);
      }
      cartIconNum();
    };
  });
}
function delBookFromCart(data) {
  const delFromCartBtns = document.querySelectorAll(".btn-danger");
  delFromCartBtns.forEach((btn, index) => {
    btn.onclick = () => {
      const selectedBook = data[index];
      // recupero i dati dei prefe dallo storage per aggiornare l'array ed eliminare il libro scartato
      let storedCart = localStorage.getItem("cart");
      if (storedCart) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(cart, "cart delBookFromCart");
      }
      // show banner delete from cart
      const selectedCard = document.querySelectorAll(".card")[index];
      if (selectedCard) {
        const banner = document.createElement("div");
        banner.classList.add("banner", "banner-del");
        banner.innerText = `Hai eliminato ${selectedBook.title} dal tuo carrello`;
        selectedCard.appendChild(banner);
      }
      cartIconNum();
    };
  });
}
function cartIconNum() {
  const storedCartData = localStorage.getItem("cart");
  const parsedData = JSON.parse(storedCartData);
  const cartIconContainer = document.querySelector(".cart.fs-3");
  const icon = document.createElement("div");
  if (storedCartData) {
    icon.classList.add("icon-cart");
    icon.innerHTML = `<p>${parsedData.length}</p>`;
    cartIconContainer.appendChild(icon);
  }
}
