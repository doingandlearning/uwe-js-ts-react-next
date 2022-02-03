---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
---

# TypeScript Fundamentals

---

- Getting Started with TypeScript
- TypeScript and Functions
- TypeScript and Objects
- Basic Types
- Making Your Own Types

---

# Getting Started with TypeScript

- Purpose
- Install tsc
- The TypeScript Compiler
- Setting up a TypeScript Project

---

# Purpose

- Designed by Microsoft to help write large applications
- Enhance developer tooling
- Generate clean, idomatic JavaScript
- Align with future JS standards

--- 

# Install tsc globally

```js
npm install -g typescript@latest
```

- TypeScript files end in `.ts`

```ts
function add(x, y) {
  return x + y
}
```

---

# The TypeScript Compiler (tsc)

```bash
tsc --all
```

Most common:

<v-clicks>

- -outFile
- -outDir
- -types
- -lib
- -target

</v-clicks>

---

# Setting up a TypeScript Project

The compiler has lots of options, rather than remembering which we want each time we can use a tsconfig.json.

We'll create and initialise a new TypeScript project with `tsc --init`.

Ignoring all of the comments, this is what we get:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  } 
}
```

---
layout: two-cols
---
# Exercise 1

1. Create a new folder and execute the following command in a new terminal window 

```
tsc --init
```

2. Verify that a new `tsconfig.json` file is created in the folder and the target value is es5.

3. Create a new file called `squares.ts` inside the folder.

4. In `squares.ts`, create a function called `squares`:

5. Create a new array from the input, using the JS map function:

6. Return the new array from the function.

::right::

The TypeScript should look like:

```ts
 function squares(array: number[]) {
   const result = array.map(x => x * x)
   return result
 }
```



7. Save the file and run `tsc squares.ts` in the folder.

8. Verify that there is a new file called `squares.js` with the following content.

```js
function squares(array) {
    var result = array.map(function (x) { return x * x; });
    return result;
}
```

9. Run `tsc --target es6 squares.ts` and compare the outputs.

---

# Types and their uses

```ts
let count = 3;

count = "string";
count = new Date();
count = false;
count = [1, 2, 3];
count = { key: "value" };
```

---

# TypeScript and Functions

```ts
function add(x, y) {
  return x + y;
}
```

---

# Annotating parameters

```ts
function add (x: number, y: number) {
  return x + y;
}
```

---

# Annotating return values

```ts
function add (x: number, y: number): number {
  return x + y;
}
```

---
layout: two-cols
---

# Exercise 2

---

# TypeScript and Objects

```js
const person = {
    firstName: "Ada",
    lastName: "Lovelace"
}
```

In JS we can add properties willy-nilly!

```js
person.age = 36;
```

And there is no guard or hint about typos:

```js
console.log("Hi, " + person.fristName);
```

---

# Interface

We can explicitly define the type of our object using a TypeScript interface.

```ts
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}
```

<v-click>

Using this definition, we can define and use our object:

```ts
const person: Person = {
    firstName: "Ada",
    lastName: "Lovelace"
}
person.age = 36;
```

</v-click>

<v-click>

We can also use interfaces as type annotations for function arguments and return types:

```ts
function showFullName (person: Person) {
  console.log(`${person.firstName} ${person.lastName}`)
}
```

</v-click>

---

# Exercise 3 - Working with objects