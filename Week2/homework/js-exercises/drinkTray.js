"use strict"

/* The code in this file will add the elements from the array "drinkTypes" to the array "drinkTray",
each element will be repeated twice.
when the "drinkTray.length = 6" the loop will stop "break" */

const drinkTray = [];
const drinkTypes = ["cola", "lemonade", "water"];

for (let i = 0; i < 5; i++) {
  let index;
  if (drinkTray.length <= 1) {
    index = 0;
    drinkTray.push(drinkTypes[index]);
  } else if (drinkTray.length >= 2 && drinkTray.length <= 3) {
    index = 1;
    drinkTray.push(drinkTypes[index]);
  } else if (drinkTray.length >= 4 && drinkTray.length <= 5) {
    index = 2;
    drinkTray.push(drinkTypes[index]);
  }else {
    break;
  };
};
console.log(drinkTray);

let drinks= "";
for(const drink of drinkTray){
  (drink === "water")? drinks += `${drink}`: drinks +=`${drink}, `;
}
console.log(`Hey guys, I brought a ${drinks}!`)