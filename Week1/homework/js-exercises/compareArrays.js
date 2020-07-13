"use strict"
const array1 = [["hack", "your", "future"], 2020, "Amsterdam", true];
const array2 =
  ["Rezan", "Al Ibrahim", 29, "Amsterdam", false, true,
    {
      firstName: "Rezan",
      lastName: "Al Ibrahim",
      age: 29,
      city: "Amsterdam",
      work: false,
      study: true
    }]

console.log("The length of the first array",array1.length);
console.log("The length of the second array",array2.length);

if(array1.length === array2.length) {
  console.log("hey are the same!")
}else {
  console.log("Two different sizes")
}