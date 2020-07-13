"use strict"
let z = 7.25;
console.log("z",z);

let a = Math.round(z);
console.log("a",a);

function highestValue(value1, value2) {
  let theHighestValue;
  if (value1 > value2) {
     theHighestValue = value1;
     console.log(`${value1} is the highest value`);
  }else{
    theHighestValue = value2;
    console.log(`${value2} is the highest value`);
  }
}
highestValue(a, z);