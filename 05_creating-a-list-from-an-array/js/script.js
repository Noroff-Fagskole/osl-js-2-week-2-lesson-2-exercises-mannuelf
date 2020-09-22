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

  listItems.forEach(function (item) {
    listContainer.innerHTML += `
      <li><span>${item}</span>
      <i class="fa fa-trash" data-item="${item}"></i> </li>`;
  });

  const items = document.querySelectorAll("li span");

  items.forEach(function (item) {
    item.addEventListener("click", handleClick);
  });

  const trashCans = document.querySelectorAll("li i");
  trashCans.forEach(can => {
    can.addEventListener("click", removeFromList);
  })
}

function handleClick(event) {
  event.target.classList.toggle("complete");
}


function removeFromList(event) {
  console.log(event);
  const deletedItem = event.target.dataset.item;
  // filter on existing array and exclude the deleted item, what was clicked
  const newItemsArray = listItems.filter(item => {
    if (deletedItem !== item) {
      return true;
    }
  })

  listItems = newItemsArray;

  createList();
}



