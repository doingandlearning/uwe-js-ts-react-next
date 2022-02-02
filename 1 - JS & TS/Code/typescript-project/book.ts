// author, title, pages, isRead

interface Book {
  author: string;
  title: string;
  pages?: number;
  isRead?: boolean;
}

// showBook
// -> console.log -> author and title
// -> if isRead !== undefined   I have read/not read this book

function showBook(book: Book) {
  console.log(`${book.author} wrote ${book.title}.`);
  if (book.isRead !== undefined) {
    console.log(`I have ${book.isRead ? "read" : "not read"} this book.`);
  }
}

// setPages
// @params {book: Book, pages: number}
// @returns {void}

function setPages(book: Book, pages: number) {
  book.pages = pages;
}

// readBook
function readBook(book: Book) {
  book.isRead = true;
}

const mindstorms: Book = {
  title: "Mindstorms",
  author: "Seymour Papert",
};

setPages(mindstorms, 300);
readBook(mindstorms);

console.log(mindstorms);
showBook(mindstorms);
