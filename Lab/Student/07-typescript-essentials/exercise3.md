# Exercise 3 - Working with Objects

1. Create a new file called `book.ts`.

2. Define a simple interface called Book. We will have properties for the author and the title of the book, optional properties for the number of pages of the book, and a Boolean that denotes whether we have read the book.

3. Add a function called `showBook` that will display the book's author and title to the console. It should also display whether the book has been read or not.

4. Add a function call `setPages` that will take a book and a number of pages as parameters, and set the `pages` property of the book to the provided value.

5. Add a function called `readBook` that will take a book and mark it as having been read.

6. Create several objects the fulfill the intervate. You can, but don't have to, annotate them with the interface.

7. Add code that will call the methods on the books.

8. Save the file and fun `tsc book.ts`.

9. Verify that the compilation ended successfully and that there is a `book.js` file. Execute it in the node environment

```
node book.js
```

---

# Basic Types

Even though JS is a loosely typed language, there is still primitive types. 

You can use the typeof operator to get the type of values.

- Strings
- Numbers
- Booleans
- Arrays
- null
- undefined

---

# Some TypeScript Types

- Enums
- Any
- Unknown
- void
- never

---

# Make your own type

```ts
type integer = number
```

```ts
type Person = {
    firstName: string;
    lastName: string;
    age?: number;
}
```

---

# Exercise 4 - Making a calculator function
