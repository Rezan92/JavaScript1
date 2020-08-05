"use strict"

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(groceryItem) {
  shoppingCart.push(groceryItem);
  if (shoppingCart.length === 4) shoppingCart.shift();
  let items = shoppingCart.join(" ");
  return `You bought ${items}!`;
};

console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('waffles'));
console.log(addToShoppingCart('tea'));