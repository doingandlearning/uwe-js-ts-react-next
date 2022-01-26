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

# Array Enhancements

---

# Aims

1. Core enhancements
2. Typed arrays

---

# 1. Core Enhancements

- Creating an array
- Iterating over an array
- Finding an element
- Finding an element index
- Copying elements within an array
- Filling elements in an array
- Holes in arrays

---

# Creating an array

In ES6++, the Array class has two new static methods
for creating an array

- Array.from() - create from a collection
- Array.of() - create from a series of values

---
layout: two-cols
---
# Using Array.from

You can use Array.from() to create an array from
an array-like object

- length property and indexed elements

```js
let obj = { length: 3, 0: "Jo", 1: "Mo", 2: "Zoe" };
let array = Array.from(obj);
console.log(array);
```

::right::

<v-click>

You can create an array from a NodeList returned
from a call to document.querySelectorAll()

```js
let spans = document.querySelectorAll("span");
let texts = Array.from(spans, (s) => s.textContent);
console.log(texts);
```

Note:
Array.from() can take an optional second argument,
to map items

</v-click>

---

# Using Array.of

Array.of() creates an array from a series of values

- Create an array containing several items

```js
let a = [10, 20, 30]; // 3 elems
let b = Array.of(10, 20, 30); // Equivalent
let c = new Array(10, 20, 30); // Equivalent
```

<v-click>

• Create an array containing a single item

```js
let a = [3]; // 1 elem, with value 3
let b = Array.of(3); // Equivalent
let c = new Array(3); // 3 elems, all undefined
```

</v-click>

---

# Iterating over an array

ES5 provides several ways to iterate over an array

```js
var array = [10, 20, 30];
for (var i = 0; i < array.length; i++) console.log(array[i]);
for (var i in array) console.log(array[i]);
array.forEach(function (elem) {
  console.log(elem);
});
```

---

# Iterating over an Array in ES6++ (1/3)

In ES6++ you can use for-of to iterate over elements

```js
var array = [10, 20, 30];
for (let elem of array) {
  console.log(elem);
}
```

<v-click>

In ES6++ you can use an arrow function with forEach

```js
var array = [10, 20, 30];
array.forEach((elem) => console.log(elem));
```

</v-click>

---

# Iterating over an Array in ES6++ (2/3)

In ES6++, Array has an entries() method

- Iterates through array and gives index/element pairs
- You can use this in conjunction with destructuring

```js
var array = [10, 20, 30];
for (let [i, e] of array.entries()) {
  console.log(`At index ${i} is value ${e}`);
}
```

---

# Iterating over an Array in ES6++ (3/3)

Array also has keys() and values() methods

- Return the keys and values, respectively

```js
var array = [10, 20, 30];
for (let key of array.keys()) {
  // 0, 1, 2
  console.log(key);
}
for (let value of array.values()) {
  // 10, 20, 30
  console.log(value);
}
```

---

# Finding an element

In ES6++, Array has a find() method

- Executes call-back on each elem until it finds an item
- Call-back args: Elem, index (optional), array (optional)
- Call-back return: Located item, or undefined

```js
var array = ["today", "is", "the", "day"];
var item = array.find((e, i, a) => {
  console.log(`${e} ${i} ${a}`);
  return e.startsWith("th");
});
console.log(item);
```

---

# Finding an element index

In ES6++, Array has a findIndex() method

- Executes call-back on each elem until it finds an item
- Call-back args: Elem, index (optional), array (optional)
- Call-back return: Index of located item, or -1

```js
var array = [10, 20, 30, 42, 50];
var index = array.findIndex((e, i, a) => {
  console.log(`${e} ${i} ${a}`);
  return e === 42;
});
console.log(index);
```

---

# Copying elements within an array

In ES6++, Array has a copyWithin() method

- Copies elements within an array
- You specify a target index, plus [start,end) indexes

```js
let array = [10, 20, 30, 40, 50];
array.copyWithin(1, 0, 3);
console.log(array); // [10,10,20,30,50]
```

---

# Filling elements in an array

In ES6++, Array has a fill() instance method

- Fills elements in an array
- You specify a fill value, plus optional [start,end)

```js
let array = [10, 20, 30, 40, 50];
array.fill(42); // [42, 42, 42, 42, 42]
array.fill(55, 1); // [42, 55, 55, 55, 55]
array.fill(99, 2, 4); // [42, 55, 99, 99, 55]
```

---

# Holes in arrays

In ES6++, you can create an array with holes

- A hole is an index that has no associated element
- ES6++ treats a hole as if it were undefined

```js
let array = [10, , , 20];
for (let k of array.keys()) {
  console.log(k);
} // 0,1,2,3
for (let v of array.values()) {
  console.log(v);
} // 10,undefined,undefined,20
```

---

# 2. Typed Arrays

- Overview
- Using a typed array
- Typed arrays available
- How data is stored
- Creating an ArrayBuffer
- Alternative view on data

---

# Overview

ES6++ defines typed arrays, for holding binary data
• E.g. Int32Array holds an array of 32-bit ints
You can create a typed array from a normal array

```js
let nums = new Int32Array([10, 20, 30]);
console.log(Int32Array.BYTES_PER_ELEMENT); // 4
```

---

# Using a typed array

Typed arrays are very similar to normal arrays

- They have a length property
- You can use [] to access an element
- You can iterate over the elements

```js
let nums = new Int32Array([10, 20, 30]);
console.log(nums.length); // 3
console.log(nums[0]); // 10
for (let n of nums) {
  console.log(n); // 10 20 30
}
```

---

# Typed arrays available

The following typed arrays are available:

- Int8 8-bit signed int
- Int16 16-bit signed int
- Int32 32-bit signed int
- Uint8 8-bit unsigned int
- Uint16 16-bit unsigned int
- Uint32 32-bit unsigned int
- Float32 32-bit fraction
- Float64 64-bit fraction

---

# How data is stored

A typed array doesn't store the data inside itself

- It has a buffer property, points to an ArrayBuffer
- The ArrayBuffer stores the raw data


---

# Creating an ArrayBuffer

It's possible to create an ArrayBuffer directly

```js
var buf = new ArrayBuffer(128); // 128 bytes
```

Many JS APIs use ArrayBuffer to hold binary data

- File API
- Canvas API for processing images
- Ajax calls via XMLHttpRequest
- Web sockets
- WebGL for low-level pixel handling in graphics processing

---

# Alternative view on data

You can get an alternative view on the raw data

- Create a DataView that points to the ArrayBuffer
- DataView can reinterpret data as a particular type
- E.g. getInt8/setInt8 reinterpret data as 8-bit ints

```js
var buf = new ArrayBuffer(128);
let dataView = new DataView(buf);
// Treat data as 8-bit ints, set/get elem [5]
dataView.setInt8(5, 100);
console.log(dataView.getInt8(5));
```

---

# Summary

- Core enhancements
- Typed arrays
