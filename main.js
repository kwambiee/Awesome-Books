const collection = document.querySelector(".table");

class BookLists {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem("library")) || [];
  }

  // Display books and save in Local Storage

  showBooks() {
    const bookTable = document.getElementById("table-body");
    bookTable.innerHTML = "";
    this.bookList.forEach((book, index) => {
      bookTable.innerHTML += `
    <tr>
      <th scope="row">${index}</th>  
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td ><span id="${index}" onClick="remove(this.index)" class="btn btn-danger btn-sm delete del py-2 px-3">Delete</span></td>
    </tr>`;
    });
  }

  // add a book to library array
  addBook(title, author) {
    const book = {
      title,
      author,
    };

    this.bookList.push(book);
    localStorage.setItem("library", JSON.stringify(this.bookList));
  }

  // delete a book
  removeBook(bk) {
    this.bookList.splice(bk, 1);
    localStorage.setItem("library", JSON.stringify(this.bookList));
    this.showBooks();
  }
}

const bookList = new BookLists();
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const addInput = document.querySelector("#button");

console.log(bookList.showBooks());

function remove(index) {
  //eslint-disable-line
  bookList.removeBook(index);
}

addInput.addEventListener("click", (e) => {
  e.preventDefault();
  if (titleInput.value && authorInput.value) {
    bookList.addBook(titleInput.value, authorInput.value);
    bookList.showBooks();
    console.log((titleInput.value = ""));
    console.log((authorInput.value = ""));
  }
});
// load books list when page loads
window.onload = show();
