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



// let myLibrary = [];


// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = false;
//   this.info = "Author: " + author + "\nTitle: " + title + "\nPages: " + pages + "\nHave you read this before?: " + read;
// };

// const TheHobbit = new Book('The Hobbit', 'JR Tolkein', 310, false);

// const HouseofLeaves = new Book('House of Leaves', 'Mark Z. Danielewski', 709, true)

// console.log(TheHobbit.info);

// function addBookToLibrary(){
//   myLibrary.push(TheHobbit);
//   myLibrary.push(HouseofLeaves);
// }
// addBookToLibrary();

// console.log(myLibrary[1])