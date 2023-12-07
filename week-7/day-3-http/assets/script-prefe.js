printPrefeList();

function printPrefeList() {
  const PrefeListContainer = document.querySelector("#prefeList");
  const storedPrefe = localStorage.getItem("prefe");
  if (storedPrefe) {
    const PrefeArray = JSON.parse(storedPrefe);
    PrefeArray.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p>${book.title} <span class:'price'>${book.price}€</span></p>`;
      PrefeListContainer.appendChild(listItem);
    });
  }
  cartIconNum();
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
