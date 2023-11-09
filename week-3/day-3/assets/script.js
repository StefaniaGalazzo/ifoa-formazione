let addBtn = document.querySelector("button#addBtn");
let deleteBtn = document.querySelector("button#deleteBtn");
let myList = document.querySelector("ul#myList");
deleteBtn.style.display = "none";

let myTasklist = []; //qui metto i valori
function addItem() {
  addBtn.onclick = (e) => {
    e.preventDefault();
    let inputTag = document.querySelector("input#item");
    let checkIcon = document.createElement("button");
    checkIcon.classList.add("delete-icon");
    myTask = document.createElement("li");
    if (inputTag.value != "") {
      singleTask = inputTag.value;
      myTasklist.push(singleTask);
      myTasklist.forEach((el) => {
        myTask.innerHTML = el;
        myList.appendChild(myTask);
        myTask.appendChild(checkIcon);
        myTask.onclick = () => {
          if (
            myTask.style.backgroundColor === "#fff" ||
            myTask.style.backgroundColor != ""
          ) {
            myTask.style.backgroundColor = "#fff";
            myTask.style.color = "navy";
          } else {
            myTask.style.backgroundColor = "green";
            myTask.style.textDecoration = "line-through";
            myTask.style.color = "#fff";
          }
        };
        checkIcon.onclick = () => {
          myTask.remove();
        };
      });
      inputTag.value = "";
    }
  };
}
addItem();

function deleteAll() {
  if (myTasklist.length > 0) {
    deleteBtn.style.display = "block";
  }
  deleteBtn.onclick = (e) => {
    e.preventDefault();
    myTasklist.forEach((el) => {
      myTask.innerHTML = " ";
    });
    myList.innerHTML = "";
    console.log(deleteBtn, "deletebtn");
  };
}
deleteAll();
