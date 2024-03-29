

//Add Book Form population
const openFormButton = document.querySelectorAll('[data-open-target]')
const closeFormButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openFormButton.forEach(button => {
  button.addEventListener('click', () => {
    const openAddForm = document.querySelector(button.dataset.openTarget)
    openForm(openAddForm)
  })
})

closeFormButton.forEach(button => {
  button.addEventListener('click', () => {
    const openAddForm = button.closest('.openForm')
    closeForm(openAddForm)
  })
})

function openForm(openAddForm) {
  if (openAddForm == null) return
  openAddForm.classList.add('active')
  overlay.classList.add('active')
}

function closeForm(openAddForm) {
  if (openAddForm == null) return
  openAddForm.classList.remove('active')
  overlay.classList.remove('active')
}


//Form Submission
var form = document.getElementById('form')

form.addEventListener('submit', function(event){
  event.preventDefault()

  var title = document.getElementById('title').value
  //console.log(title)

  var author = document.getElementById('author').value
  //console.log(author)

  var pages = document.getElementById('pages').value
  //console.log(pages)

  let hasRead = document.querySelector('#hasRead').checked;
  //console.log(hasRead.checked)
  
  const book = new Book(title, author, pages, hasRead);
  //console.log(book.bookInfo());

  addBookToLibrary(book);

  console.log(myLibrary);

  displayBooks(myLibrary, book);

  document.getElementById('form').reset();  

  
});


let myLibrary = [];

class Book {
  constructor(title, author, pages, hasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
  //this.bookInfo = "Author: " + author + "Title: " + title + "\nPages: " + pages + "\nHave you read this before?: " + hasRead;
  };

  bookInfo(){
    console.log("Author: " + this.author + "\nTitle: " + this.title + "\nPages: " + this.pages + "\nHave you read this before?: " + this.hasRead);
  };

  toggleRead(){
    this.hasRead = this.hasRead? false : true
  };


};


function addBookToLibrary(book) {
 myLibrary.push(book);
};

function displayBooks(myLibrary, book) {

  const newestBook = myLibrary[myLibrary.length - 1];
  const bookIndex = myLibrary.length - 1
  const library = document.querySelector('#library');

  const createBook = document.createElement('div');
  const showAuthor = document.createElement('div');
  const showTitle = document.createElement('div');
  const showPages = document.createElement('div');
  const showRead = document.createElement('button');
  const removeBook = document.createElement('div');
  const removeButton = document.createElement('button');
  
  createBook.classList.add('createBook');
  createBook.setAttribute('data', bookIndex);
  showAuthor.classList.add('showAuthor');
  showTitle.classList.add('showTitle');
  showPages.classList.add('showPages');
  showRead.classList.add('showRead');
  removeBook.classList.add('removeBook');
  removeButton.classList.add('removeButton');

  showAuthor.innerText = "Author:\n" + newestBook.author;
  showTitle.innerText = "Title:\n" + newestBook.title;
  showPages.innerText = "Pages:\n" + newestBook.pages;
  showRead.textContent = "Read: " + newestBook.hasRead;
  removeButton.textContent = "Remove Book";

  library.appendChild(createBook);
  createBook.appendChild(showTitle);
  createBook.appendChild(showAuthor);
  createBook.appendChild(showPages);
  createBook.appendChild(showRead);
  createBook.appendChild(removeBook);
  removeBook.appendChild(removeButton);

  //Toggle for Read
  showRead.addEventListener('click', function(){
    book.toggleRead();
    showRead.textContent = "Read: " + newestBook.hasRead;
    console.log(myLibrary);   
  });
  

  //Remove element and delete book from Library
  const getBookIndex = createBook.getAttribute('data');

  removeButton.addEventListener('click', function() {
    if (confirm("Are you sure you want to delete this book?") === true) {
      createBook.remove(), myLibrary.pop(getBookIndex);
    } 
    console.log(myLibrary);
   });
};