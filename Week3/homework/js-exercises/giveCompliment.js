"use strict"

function giveCompliment(name) {
  const compliments =
    ["great", "awesome", "beautiful", "cool", "smart",
      "strong", "amazing", "funny", "nice",
      "great father"];
  let randomIndex = Math.floor((Math.random() * compliments.length));
  console.log(`"You are ${compliments[randomIndex]}, ${name}!"`);
}

giveCompliment("Rezan")
giveCompliment("Rezan")
giveCompliment("Rezan")
