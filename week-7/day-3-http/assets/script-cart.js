printCartList();

function printCartList() {
  const cartListContainer = document.querySelector("#cartList");
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const cartArray = JSON.parse(storedCart);
    cartArray.forEach((book) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p>${book.title} <span class:'price'>${book.price}€</span></p>`;
      cartListContainer.appendChild(listItem);
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
