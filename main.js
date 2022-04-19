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
const render = (books) => {
  let booksList = '';
  books.forEach((book, i) => {
    const { title, author } = book;
    booksList += `
    <tr>
      <th scope="row">${i + 1}</th>  
      <td>${title}</td>
      <td>${author}</td>
      <td ><span onClick="removeBook(${i})" class="btn btn-danger btn-sm delete del py-2 px-3">Delete</span></td>
    </tr>`;
  });
  return booksList;
};
const show = () => {
  document.getElementById('table-body').innerHTML = render(getBooks());
};
const save = (book) => {
  localStorage.setItem('library', JSON.stringify(book));
  show();
};