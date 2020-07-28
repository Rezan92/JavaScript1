"use strict"

const shoppingCart = ["bananas", "milk"];

function addToShoppingCart(groceryItem) {
  shoppingCart.push(groceryItem);
  if (shoppingCart.length === 4) shoppingCart.shift();
  let items = shoppingCart.join(" ");
  console.log (`You bought ${items}!`);
};

addToShoppingCart('chocolate');
addToShoppingCart('waffles'); 
addToShoppingCart('tea');