let listItems = [];

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);

function addToList() {
  const newItem = listInput.value.trim();

  if (newItem.length >= 2) {
    listItems.push(newItem);
    createList();
    listInput.value = "";
    console.log(listItems);
  }
}

function createList() {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach(function(item) {
    listContainer.innerHTML += `
      <li><span>${item}</span>`;
  });

  const items = document.querySelectorAll("li span");

  items.forEach(function (item) {
    item.addEventListener("click", handleClick);
  });
}

function handleClick(event) {
  event.target.classList.toggle("complete");
}
