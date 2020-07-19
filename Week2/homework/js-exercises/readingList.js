"use strict"
// The code in this file keeps track of which books you read and which books you want to read!
const bookList = [
  {
    title: "Crazy Town",
    author: "Sterling R. Braswell",
    alreadyRead: false
  },
  {
    title: "The Shakeress",
    author: "Kimberley Heuston",
    alreadyRead: true
  },
  {
    title: "The Dark Labyrinth",
    author: "Lawrence Durrell",
    alreadyRead: true
  }];
 
  for (let i = 0; i < bookList.length; i++) {
    if(bookList[i].alreadyRead === true){
      console.log(`"${bookList[i].title} by ${bookList[i].author}"`)
      console.log(`You already read "${bookList[i].title}"`)
    }else{
      console.log(`"${bookList[i].title} by ${bookList[i].author}"`)
      console.log(`You still need to read "${bookList[i].title}"`)
    }
  }