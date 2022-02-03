---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# apply any windi css classes to the current slide
class: "text-center"
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

# Getting Started With ES6

---

# Aims

1. ES versions and tools
2. Variables, scope and strings
3. Function enhancements
4. Arrow functions

---

# 1. ES versions and tools

- Setting the scene
- Browser suppoer
- Babel
- Online transpiler

---

# Setting the scene

Most JavaScript applications have traditionally been
written using "classic" JavaScript

- ECMAScript 5 (ES5)

The ECMAScript standard has evolved a lot since then:

- ES2015, aka ES6 - major changes, e.g. lambdas etc.
- ES2016, aka ES7 - async/await etc.
- ES2017, aka ES8 - more async/await features etc.
- ES2018, aka ES9 - variadic functions etc.
- ES2019, aka ES10 - array changes etc.
- ES2020 (BigInt, nullish coalescing, optional chaining, Promise.allSettled)
- ES2021 (Logical assignment, String.replaceAll, Numeric separator, Promise.any)
- ES2022 (Class enhancements, top-level await, Array.at())

---

# Browser Support

Not all browser support the new features in ES6++

- For max portability, you should "transpile" into ES5
- Use a transpiler such as Babel or Traceur
- Next uses Babel
- It'll be installed along with other related dependencies

Node Package Manager (npm)

---

# Online transpiler

Babel has an online transpiler, so you can play with settings and see what the output would be like.

https://babeljs.io/repl

---

# 2. Variables, scope, strings

- Variable scope
- Constants
- Goodbye IIFEs, hello blocks
- String interpolation
- Multi-line strings

---
layout: two-cols
---

# Variable scope

In ES5, variables are function-scoped

- Local variables are hoisted to the top of the function

In ES6++, you can define block-scoped variables

- Use the let keyword, rather than var
- The transpiler renames the block-scope variable

::right::

ES6

```js
let s = "Hi";
if (true) {
  let s = "Bye";
}
console.log(s); // Hi
```

ES5

```js
var s = "Hi";
if (true) {
  var _s = "Bye";
}
console.log(s); // Hi
```

---

# Constants

<p></p>

ES6++ supports constants, i.e. immutable variables

- Use const keyword and supply a value in declaration

```js
const PI = 3.14;
PI = 99.5; // Error
```

If you use const with an object or an array reference:

- The ref is const,
  not the properties

```js
const obj = { prop: 1 };
obj = { prop: 2 }; // Error
obj.prop = 3; // OK
```

---

# Goodbye IIFEs, Hello Blocks

In ES6++ you can define a scoped block using {}

- No need for ugly IIFEs, which were necessary in ES5

```js
{
  let num = 42;

  let f = function () {
    console.log("Hello");
  };
}
console.log(num); // Error, num not accessible.
f(); // Error, f not accessible.
```

---

# String Interpolation

ES6++ supports string interpolation via template literals

- Enclose the string in `back-ticks`
- Embed expressions in ${xxx}

```js
let n = "John";
let a = 21;
let html = `<b>${n}</b> will be ${a + 1} soon`;
console.log(html);
```

---

# Multi-Line Strings

<p></p>

ES6++ supports multi-line strings

- Enclose the string in back-ticks
- Useful if you want to build an HTML string, for example

```js
let p = { name: "Jane", age: 21 };
const personHtml = `
 <dl>
 <dt>Person info</dt>
 <dd>Name: ${p.name}</dd>
 <dd>Age next birthday: ${p.age + 1}</dd>
 </dl>`;
```

---

# 3. Function Enhancements

- Default parameters
- Rest parameters
- Spread parameters

---
 layout: two-cols
---
# Default parameters

<p></p>

<v-click>

You can specify default values for parameters

```js
function totalSal(base, bonus1 = 0.0, bonus2 = 0.0) {
  return base + bonus1 + bonus2;
}
```
</v-click>

<v-click>

Client code can omit default parameters, and can also skip parameters via undefined

```js
console.log(totalSal(100));
console.log(totalSal(100, 20));
console.log(totalSal(100, undefined, 30));
```

</v-click>

::right::

<v-click>

A default parameter value can use an earlier parameter

```js
function calcRectArea(width, height = width) {
  return width * height;
}
```

</v-click>


<v-click>

A default parameter value can use a global variable

```js
let defHeight = 5;
function calcRectArea(width, height = defHeight) {
  return width * height;
}
```

</v-click>

---

# Rest Parameters

You can define variadic functions via "rest" parameters

- Precede final parameter in the function definition with `...`
- The parameter values will be accumulated into an array

```js
function list(heading, ...items) {
  let str = `<h3>${heading}</h3>`;
  for (let item of items) str += `${item}<br>`;
  return str;
}
console.log(list("Ducks", "Huey", "Luey", "Duey"));
```

---

# Spread Parameters

<p></p>

You can use `...` to expand an array into its separate values

<v-click>

- In this context `...` is called the "spread operator"

```js
let nums = [100, 200, 300];
console.log(...nums);
```

</v-click>

<v-click>

A common use of … is when you want to pass an array
into a function that expects separate arguments

- E.g. Math.min() takes a variadic series of parameters

```js
let result = Math.min(300, 100, 200);
```

</v-click>

<v-click>

- It doesn't take an array - in ES5 you must use apply()

```js
let result = Math.min.apply(Math, [300, 100, 200]);
```

</v-click>

<v-click>

- In ES6++ you can use the spread operator instead

```js
let result = Math.min(...[300, 100, 200]);
```

</v-click>

---

# Arrow functions

- Introduction to arrow functions
- Multi-line arrow functions
- Arrow functions and 'this'

---

# Introduction to arrow functions

<p></p>

ES6++ supports arrow functions

<v-clicks>

- () encloses params - you can omit () if 1 param
- => separates params from body
- The function body is implicitly the return expression

```js
let getFullName = (fn, ln) => `${ln}, ${fn}`;
```

You call an arrow function just like a regular function

```js
console.log(getFullName("John", "Smith"));
```

</v-clicks>

---

# Multi-Line Arrow Functions

You can define an arrow function over multiple lines

- Enclose function body in {} braces
- Use an explicit return statement to return a value

```js
let getFullName = (fn, ln) => {
  let fullName = `${ln.toUpperCase()}, ${fn}`;
  return fullName;
};
```

---

# Arrow functions and 'this' (1/2)

In ES5, nested functions have problems with this

- This example copies the name param to this.name
- But when setInterval calls the anonymous function, this points to the global Window object

```js {all|4}
function MessageGenerator1(name) {
  this.name = name;
  setInterval(function () {
    console.log("Hello " + this.name);
  }, 1000);
}
var gen1 = new MessageGenerator1("Janet");
```

---

# Arrow functions and 'this' (2/2)

Arrow functions overcome the this problem

- Arrow functions store this in a variable called \_this
- When you use this in an arrow function, it uses \_this

```js {all|4}
function MessageGenerator2(name) {
  this.name = name;
  setInterval(() => {
    console.log("Hello " + this.name);
  }, 1000);
}
var gen2 = new MessageGenerator2("John");
```

---

# Summary

- ES versions and tools
- Variables, scope, and strings
- Function enhancements
- Arrow functions
