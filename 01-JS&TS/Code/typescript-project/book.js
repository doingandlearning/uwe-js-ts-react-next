// author, title, pages, isRead
// showBook
// -> console.log -> author and title
// -> if isRead !== undefined   I have read/not read this book
function showBook(book) {
    console.log("".concat(book.author, " wrote ").concat(book.title, "."));
    if (book.isRead !== undefined) {
        console.log("I have ".concat(book.isRead ? "read" : "not read", " this book."));
    }
}
// setPages
// @params {book: Book, pages: number}
// @returns {void}
function setPages(book, pages) {
    book.pages = pages;
}
// readBook
function readBook(book) {
    book.isRead = true;
}
var mindstorms = {
    title: "Mindstorms",
    author: "Seymour Papert"
};
setPages(mindstorms, 300);
readBook(mindstorms);
console.log(mindstorms);
showBook(mindstorms);
