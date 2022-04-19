const bookForm = document.querySelector('#form');
const collection = document.querySelector('.table');

function Book() {
  this.title = document.querySelector('#title').value;
  this.author = document.querySelector('#author').value;
}