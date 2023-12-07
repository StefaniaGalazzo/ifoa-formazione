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
}
printPrefeList();
