let items = [
  { id: 1, letter: "a" },
  { id: 2, letter: "b" },
  { id: 3, letter: "c" },
  { id: 4, letter: "d" },
];
console.log("before", items);

function removeItem(idToRemove) {
  // filter methdod to create a new array based on some condition
  const filteredItems = items.filter(item => {
    console.log(item.id !== idToRemove);
    if (item.id !== idToRemove) {
      return true;
    }
  })

  items = filteredItems;
}

removeItem(4);

console.log("after", items);
