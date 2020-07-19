"use strict"
// The code in this file create a recipe card.

const mealRecipe = {
  title: "Omelette",
  servings: 2,
  ingredients: ["4 eggs", " 2 strips of bacon", " 1 tsp salt/pepper"]
}
for(const elem in mealRecipe){
   if(typeof mealRecipe[elem] === "string"){
     console.log("Meal name:",mealRecipe[elem]);
    }else if(typeof mealRecipe[elem] === "number"){
      console.log("Serves:",mealRecipe[elem])
    }else{
      console.log("Ingredients:",mealRecipe[elem].toString());
    }
}
