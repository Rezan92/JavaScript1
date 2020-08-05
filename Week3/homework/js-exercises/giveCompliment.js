"use strict"

function giveCompliment(name) {
  const compliments =
    ["great", "awesome", "beautiful", "cool", "smart",
      "strong", "amazing", "funny", "nice",
      "great father"];
  let randomIndex = Math.floor((Math.random() * compliments.length));
  return `"You are ${compliments[randomIndex]}, ${name}!"`;
}

console.log(giveCompliment("Rezan"));
console.log(giveCompliment("Rezan"));
console.log(giveCompliment("Rezan"));
