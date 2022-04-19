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
// add a book to library array
const addBook = (book) => {
  const { title, author } = book; // object destructuring

  const books = getBooks();
  const dup = books.filter(
    // eslint-disable-next-line comma-dangle
    (item) => item.title === title && item.author === author
  );
  if (dup.length === 0 && title.length > 0) {
    books.push({
      title,
      author,
    });
  }
  return save(books);
};

// delete a book
// eslint-disable-next-line no-unused-vars
const removeBook = (bk) => {
  const books = getBooks();
  books.splice(bk, 1);
  save(books);
};

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  collection.style.display = 'block';
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const book = new Book();
  addBook(book);
  bookForm.reset();
  show();
});
// load books list when page loads
window.onload = show();
