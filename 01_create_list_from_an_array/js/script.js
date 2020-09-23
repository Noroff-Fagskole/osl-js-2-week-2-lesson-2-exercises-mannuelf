const listItems = []; // array

const listInput = document.querySelector("input");
const searchButton = document.querySelector(".button");

searchButton.addEventListener("click", addToList);

function addToList() {
  const newItem = listInput.value.trim(); // get user input
  if(newItem.length >= 3) {
    listItems.push(newItem); // pushes on to array
    createList(); // create the list
    listInput.value = "";
  }
}

function createList() {
  const shoppingList = document.querySelector("#shopping-list"); // reference to UL
  shoppingList.innerHTML = "";
  // loop over array of user input items and render an LI with item inside
  listItems.forEach(item => {
    console.log("item", item);
    shoppingList.innerHTML += `
      <li><span>${item}<span></li>
    `;
  });
  const items = document.querySelectorAll("li span");
  items.forEach(item => {
    item.addEventListener("click", handleClick);
  });
}

function handleClick(e) {
  e.target.classList.toggle("complete");
}




/*
TODO:
building a todo list
reference to the DOM elements
add items to a list
 - creating a list
 event for the submit button.
*/
