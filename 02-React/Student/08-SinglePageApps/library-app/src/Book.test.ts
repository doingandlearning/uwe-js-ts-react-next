import Book from "./Book";

// 3 As
test("That the book toString method works as expected", () => {
  // Arrange
  const newBook = new Book("Old Man's War", "John Scalzi");
  // Act
  // Assert
  expect(newBook.toString()).toBe("Old Man's War, by John Scalzi");
});

// class Book {
// 	constructor(public title: String, public author: String) {}

// 	toString() {
// 			return `${this.title}, by ${this.author}`
// 	}
// }

// export default Book;
