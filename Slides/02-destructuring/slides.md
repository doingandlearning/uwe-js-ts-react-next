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

# Destructuring

---

# Aims

- Overview of destructuring
- Destructuring an array
- Destructuring an object literal
- Specifying default values
- Destructuring parameters
- Destructuring a return value 

---

# Overview of destructuring

<p></p>

Destructuring allows you to unpack items in an array, object literal, or function arguments/returns
- Similar-ish to tuples in other languages

Destructuring looks a bit odd initially, but you soon get used to it
- And it can simplify your code considerably! 

---
layout: two-cols
---

# Destructuring an Array

<v-click>

You can use destructuring with an array
- Assigns array items to variables in left-hand-side array

```js
let [a,b,c] = [1,2,3] // a=1, b=2, c=3 
```
</v-click>

<v-click>

- If surplus variables, they are undefined
```js
let [a,b,c,d] = [1,2,3] // d is undefined 
```
</v-click>

::right::

<v-click>

- If surplus array items, they are not assigned 
```js
let [a,b] = [1,2,3] // a=1, b=2
```
</v-click>

<v-click>

- You can use the destructure part of an array if you like 
```js
let [el0, el1, ...others] = [10,20,30,40]
console.log(el0) // 10
console.log(el1) // 20
console.log(others.length) // 2
console.log(others[0]) // 30
console.log(others[1]) // 40 
```
</v-click>

---
layout: two-cols
---

# Destructuring an object


You can use destructuring with an object literal
- Assigns object properties to variable names in LHS object

```js
let {x, y, z} = {x:10, y:20, z:30}
console.log(x, y, z) // 10 20 30 
```


<v-click>

You can give different names for variables in LHS object
- Use the syntax keyName:newKeyName

```js
let {x:h, y:w, z:d} = {x:10, y:20, z:30}
console.log(h, w, d) // 10 20 30
```

</v-click>

::right::

<v-click>

LHS object can specify a subset of properties

```js
let {x, y} = {x:10, y:20, z:30}
console.log(x, y) // 10 20 
```

</v-click>

<v-click>

LHS object can specify missing properties
- Will be undefined


```js
let {x, y, z} = {x:10, y:20}
console.log(x, y, z) // 10 20 undefined 
```

</v-click>

---

# Specifying Default Values

<v-click>

You can specify default values for array items:

```js
let [http='80',https='443'] = ['8080']
console.log(http, https) // 8080 443 
```

</v-click>

<v-click>

You can specify default values for object properties: 

```js
let {x=0, y=0, z=0} = {x: 100, y: 200}
console.log(x, y, z) // 100 200 0 
```

</v-click>

---
layout: two-cols
---

# Destructuring Parameters
<p></p>
<v-click>

You can use destructuring with function parameters
- In the function declaration, group parameters in {}
- In the function call, pass in an object literal

```js
function displayPoint({x, y, z}) {
 console.log(x, y, z)
}
displayPoint({x:10, y:20, z:30}) // 10 20 30
```
</v-click>

<v-click>

- You can define default values for individual properties
```js
function displayPoint({x=0, y=0, z=0}) {
 console.log(x, y, z)
}
displayPoint({x:10, z:30}) // 10 0 30 
```

</v-click>

::right::

<v-click>

You can rename properties, if you like 

```js
function displayPoint({x:h=0, y:w=0, z:d=0}) {
 console.log(h, w, d)
}
displayPoint({x:10, z:30}) // 10 0 30
```
</v-click>

<v-click>

You can define a default value for the parameter object
- You can even combine this with individual defaults!

```js
function displayPoint(
 {x=0, y=0, z=0} = {x:1, y:2, z:3}) {

 console.log(x, y, z)
}
displayPoint({x:10, z:30}) // 10 0 30
displayPoint({}) // 0 0 0
displayPoint() // 1 2 3 
```

</v-click>

---

# Destructuring a Return Value

<v-click>

If you return an object from a function…

```js
function convertEuros(euroAmount) {
 return {
  USD: euroAmount * 1.17,
  GBP: euroAmount * 0.89,
  NOK: euroAmount * 9.27
 }
}
```

</v-click>

<v-click>

You can destructure the return value (no obligation)

```js
let allAmounts = convertEuros(100)
let {USD, GBP, NOK} = convertEuros(100) 
```

</v-click>

---

# Summary

- Overview of destructuring
- Destructuring an array
- Destructuring an object literal
- Specifying default values
- Destructuring parameters
- Destructuring a return value 