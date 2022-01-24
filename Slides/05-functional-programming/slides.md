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

# Functional Programming

---

# 1. What is functional programming?

# 2. Why JavaScript works well with functional programming

---

# 1. What is functional programming?

- First-class
- Higher-order functions
- Pure functions
- Recursion

---

# First class functions

- Functions can be passed as parameters, set as variable values and treated like any other data type.
- They can be returned as a result

```js
const getWorld = () => {
  return "World";
};

function sayHello(getName) {
  console.log(`Hello ${getName()}`);
}

sayHello(getWorld);
```

---

layout: two-cols

---

# Higher order functions

- Functions that accept other functions as parameters and/or returns a function

<v-click>

```js
function greaterThan(n) {
  return (m) => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
```

</v-click>

::right::

<v-click>

```js
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});
// → 0 is even
// → 2 is even
```

</v-click>

---

# Pure functions

- Same arguments always produce the same result
- No side effects
- Timing isn't important - always has the same value

```js
function pureAdd(a, b) {
  return a + b;
}

// Impure
let a = 1;
function imPureAdd(b) {
  return a + b;
}
```

---

# Recursion

- Calling itself with different parameters

```js
function factorial(x) {
  // if number is 0
  if (x === 0) {
    return 1;
  }

  // if number is positive
  else {
    return x * factorial(x - 1);
  }
}
```

---

# 2. Why JavaScript works well with functional programming

## The Array methods!

- map
- filter
- reduce

---

# map

The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const usersMock = [
  { id: 1, name: "user1", age: 11 },
  { id: 2, name: "user2", age: 21 },
  { id: 3, name: "user3", age: 23 },
  { id: 4, name: "user4", age: 11 },
  { id: 5, name: "user5", age: 37 },
  { id: 6, name: "user6", age: 23 },
];

const mappedUsers = usersMock.map((item) => item.id);

console.log(usersMock);
console.log(mappedUsers);
```

---

# filter

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

```js
const filteredUsers = usersMock.filter((item) => item.age > 20);
console.log(filteredUsers);
```

---

# reduce

The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

```js
const averageAge = usersMock.reduce((a, c) => a + c, 0) / usersMock.length;
```

---

# Other Array Manipulation functions

- every(fn)
- some(fn) / includes(fn)
- find(fn)
- sort(fn(a,b)) !!! Not pure
  - [...array].sort() to avoid mutation
- reverse() !!! not pure

---

# Summary

1. What is functional programming?
2. Why JavaScript works well with functional programming
