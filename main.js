

let myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = "Author: " + author + "\nTitle: " + title + "\nPages: " + pages + "\nHave you read this before?: " + read;
};

const TheHobbit = new Book('The Hobbit', 'JR Tolkein', 310, false);

console.log(TheHobbit.info);

function addBookToLibrary(){
   
}


