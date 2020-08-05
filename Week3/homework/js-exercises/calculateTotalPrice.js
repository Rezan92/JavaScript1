"use strict"

const cartForParty = {
  beer: 1.99,
  chips: 0.89,
  milk: 1.14,
  bread: 2.79,
  eggs: 3
};

function calculateTotalPrice(object) {
  let totalPrice = 0;
  for (const item in object) totalPrice += object[item];
  return `Total: ${totalPrice.toFixed(2)}`;
};

console.log(calculateTotalPrice(cartForParty));