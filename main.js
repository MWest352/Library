

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
  console.log(title)

  var author = document.getElementById('author').value
  console.log(author)

  var pages = document.getElementById('pages').value
  console.log(pages)

  let hasRead = document.querySelector('#hasRead').checked
  console.log(hasRead.checked)

  const book = new Book(title, author, pages, hasRead);
  console.log(book.info)

  addBookToLibrary(book);

  console.log(myLibrary)

  document.getElementById('form').reset();  
})



let myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.info = "Author: " + author + "\nTitle: " + title + "\nPages: " + pages + "\nHave you read this before?: " + read;
};

function addBookToLibrary(book){
 myLibrary.push(book)
}


