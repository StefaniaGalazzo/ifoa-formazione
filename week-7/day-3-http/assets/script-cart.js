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
}
printCartList();
