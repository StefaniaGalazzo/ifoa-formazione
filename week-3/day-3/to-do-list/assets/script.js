let addBtn = document.querySelector("button#addBtn");
let deleteBtn = document.querySelector("button#deleteBtn");
let inputTag = document.querySelector("input#item");
let myList = document.querySelector("ul#myList");
deleteBtn.style.display = "none"; // inizializzo lo style del btn che inizialmente non deve essere mostrato
let myTasklist = []; //qui metto i valori messi nell'input

addBtn.addEventListener("click", function () {
  if (inputTag.value != "") {
    addItem();
    printList();
  } else {
    document.querySelector(
      "ul#myList"
    ).innerHTML = `<p class='error'> Inserisci una Task!</p>`;
  }
});

function addItem() {
  singleTask = inputTag.value;
  myTasklist.push(singleTask);
  inputTag.value = "";
}

function printList() {
  myList.innerHTML = "";
  myTasklist.forEach((el, indx) => {
    let myTask = document.createElement("li");
    myTask.innerHTML = `${el}`;
    myList.appendChild(myTask);
    let checkIcon = document.createElement("button");
    myTask.appendChild(checkIcon);
    checkIcon.classList.add("delete-icon");
    toggleCheckedItem(myTask);
    checkIcon.onclick = () => {
      deleteSingleItem(indx);
    };
  });
}

function deleteSingleItem(indx) {
  if (myTasklist.length === 1) myTasklist = [];
  else {
    let myTask = document.querySelector("ul#myList li"); //con questo seleziono a ogni click il primo <li> di riferimento
    myTasklist.splice(indx, 1);
    myTask.remove();
  }
}

function toggleCheckedItem(task) {
  task.onclick = () => {
    if (task.style.backgroundColor != "green") {
      task.style.backgroundColor = "green";
      task.style.textDecoration = "line-through";
      task.style.color = "#fff";
    } else {
      task.style.backgroundColor = "#fff";
      task.style.color = "navy";
      task.style.textDecoration = "none";
    }
  };
}

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
