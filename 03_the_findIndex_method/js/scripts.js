const products = [
  { id: 1, name: "Adidas Stan Smithzzz", price: "1000", is_sale: true },
  { id: 2, name: "Nike Cortez", price: "2500", is_sale: false },
  { id: 3, name: "New Balance", price: "1500", is_sale: true }
];

/*
for (let i = 0; i < products.length; i++ ) {
  console.log(products[i]);
}*/

// findIdex()
const itemIndex = products.findIndex(product => {
  if (product.id === 1) {
    return true;
  }
});

console.log(itemIndex);

const specificItem = products[itemIndex];
console.log(specificItem);

products[itemIndex].name = "Adidas Stan Smiths"; // update name
products[itemIndex].price = "500"; // update name
console.log(products);
