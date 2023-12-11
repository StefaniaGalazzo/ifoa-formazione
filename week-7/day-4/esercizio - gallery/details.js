window.onload = () => {
  const header = document.querySelector("header");
  const container = document.getElementById("detailsContainer");
  const pageTitle = document.getElementById("page-title");

  let data = localStorage.getItem("obj");
  data = JSON.parse(data);
  pageTitle.innerText = data.id;
  const image = document.createElement("img");
  const details = document.createElement("a");
  details.innerText = `Photographer: ${data.photographer}`;
  details.setAttribute("href", `${data.photographer_url}`);
  image.setAttribute("src", `${data.src.medium}`);
  image.setAttribute("width", `100%`);
  container.appendChild(image);
  container.appendChild(details);
  console.log(header, "header");
  header.style.backgroundColor = data.avg_color;
};
