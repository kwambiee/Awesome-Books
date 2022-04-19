const bookForm = document.querySelector('#form');
const collection = document.querySelector('.table');

function Book() {
  this.title = document.querySelector('#title').value;
  this.author = document.querySelector('#author').value;
}
// get books from Local Storage
const getBooks = () => {
  const lib = localStorage.getItem('library');
  return lib ? JSON.parse(lib) : [];
};