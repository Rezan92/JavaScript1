"use strict"

// The code in this file removes the commas from the "myString" string and replaces it with spaces

let myString = 'hello,this,is,a,difficult,to,read,sentence';
console.log(myString.length);
myString = myString.replace(/,/g, " ")
console.log(myString)
