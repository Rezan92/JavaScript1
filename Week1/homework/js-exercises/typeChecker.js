"use strict"
let age = 3;
let height = 6;
let firstName = "Rezan";
let lastName = "Al Ibrahim";



function typeChecker(type1, type2){
  let firstType = typeof type1;
  let secondType = typeof type2;
  console.log("The type of the first parameter is",firstType);
  console.log("The type of the second parameter is",secondType);
  if(firstType===secondType){
    console.log(`SAME TYPE, Both are ${firstType}s`);
  }else{
    console.log(`NOT THE SAME TYPE, the first one is ${firstType} and the second one is ${secondType}`)
  }
  console.log("  ") //This line is just to add a space after each call, so it's easy to read the values in the console
}

typeChecker(age, height);
typeChecker(firstName, lastName);
typeChecker(age, firstName);
typeChecker(lastName, height);
