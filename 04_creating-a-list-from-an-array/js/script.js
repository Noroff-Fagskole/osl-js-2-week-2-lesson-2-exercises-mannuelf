let listItems = [];

const listInput = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", addToList);

function addToList() {
  const newItem = listInput.value.trim();

  if (newItem.length >= 2) {
    listItems.push(newItem); // adding too
    createList();
    listInput.value = "";
    console.log(listItems);
  }
}

function createList() {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";
  console.log("createList", listItems);
  listItems.forEach(function(item) {
    listContainer.innerHTML += `
      <li>
        <span>${item}</span>
        <i class="fa fa-trash" data-item="${item}"></i>
      </li>`;
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

function removeFromList(e) {
  const deletedItem = e.target.dataset.item;
  // filter on existing array & exclude the deleted item which was clicked
  const newItemsArray = listItems.filter(item => {
     if (deletedItem !== item) {
       return true;
     }
   })
   listItems = newItemsArray; // reassign listItems with new filtered Array
   console.log("removeFromList", listItems );
   createList(); // rerender list with new items
}

function handleClick(event) {
  event.target.classList.toggle("complete");
}
