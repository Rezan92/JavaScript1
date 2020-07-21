"use strict"

/* The code in this file will add the elements from the array "drinkTypes" to the array "drinkTray",
each element will be repeated twice.
when the "drinkTray.length = 6" the loop will stop "break" but in this caseit won't break because
the loop will only run five times*/

const drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

for (let i = 0; i < 5; i++) {
  let index;
  if (i % 2 === 0) {
    index = i / 2;
    drinkTray.push(drinkTypes[index]);
  } else {
    index = (i - 1) / 2;
    drinkTray.push(drinkTypes[index]);
  }
  if (drinkTray.length === 6) {
    break;
  }
}

/*
The following code will add a comma and space after each element from the "drinkTray" array except the last element.
and asign all the elements to the variable "drinks"
*/
let drinks = "";
for (let i = 0; i < drinkTray.length; i++) {
  let drink = drinkTray[i]
  if (i === drinkTray.length - 1) {
    drinks += `${drink}`;
  } else { drinks += `${drink}, `; }
}
console.log(drinkTray);
console.log(`Hey guys, I brought a ${drinks}!`)