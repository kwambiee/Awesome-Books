class BookLists {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('library')) || [];
  }

  // Display books and save in Local Storage

  showBooks() {
    const bookTable = document.getElementById('table-body');
    let table = '';
    this.bookList.forEach((book, i) => {
      table += `
    <tr>
      <th scope="row">${i + 1}</th>  
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td><span id="${book.id}" onClick="remove(${
  book.id
})" class="btn btn-danger btn-sm delete del py-2 px-3">Delete</span></td>
    </tr>`;
    });
    bookTable.innerHTML = table;
  }

  // add a book to library array
  addBook(title, author) {
    const book = {
      id: this.bookList.length + 1,
      title,
      author,
    };

    this.bookList = [...this.bookList, book];
    localStorage.setItem('library', JSON.stringify(this.bookList));
  }

  // delete a book
  removeBook(index) {
    this.bookList = this.bookList.filter((b) => b.id !== index);
    localStorage.setItem('library', JSON.stringify(this.bookList));
    this.showBooks();
  }
}

const bookList = new BookLists();
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addInput = document.querySelector('#button');

bookList.showBooks();

// eslint-disable-next-line no-unused-vars
function remove(index) {
  //eslint-disable-line
  bookList.removeBook(index);
}

addInput.addEventListener('click', (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    bookList.addBook(titleInput.value, authorInput.value);
    bookList.showBooks();
    titleInput.value = '';
    authorInput.value = '';
  }
});
// load books list when page loads
// window.onload = show();
