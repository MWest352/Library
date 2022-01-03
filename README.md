# Library
The Odin Projects JavaScript library project.

theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library
Write a constructor for making “Book” objects.
Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.
Put a function into the constructor that can report the book info like so:

theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

Let’s extend the ‘Book’ example and turn it into a small Library app.
Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”.
Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: 
author, title, number of pages, whether it’s been read and anything else you might want.
Add a button on each book’s display to remove the book from the library.
You will need to associate your DOM elements with the actual book objects in some way.
One easy solution is giving them a data-attribute that corresponds to the index of the library array.
Add a button on each book’s display to change its read status.
To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
