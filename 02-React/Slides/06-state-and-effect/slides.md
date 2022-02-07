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

# Hooks 

---

- What are hooks?
- useState recap
- Prop drilling
- useEffect

---

# What are hooks?

- Allow us to use state and other React features without using classes
- Make it easier to reuse stateful logic between components
- Reduces complexity of individual components

---

# Rules of hooks

> Hooks are functions that let you "hook into" React state and lifecycle features from function components.

- Hooks don't work inside classes.
- You can only call hooks at the top level.
  - Don't call Hooks inside loops, conditions, or nested functions.
- You can only call hooks from React function components.
  - Don't call Hooks from regular JS functions

---

# useState recap

```ts {all|1|4|9|all}
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

([Should I use many or one state variables?](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables))

---

# Prop drilling

This is a strategy to get state to the part of the component tree that needs it. 

Let's look at this example:

```ts
function Toggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(o => !o)
  return (
    <div>
      <div>The button is {on ? 'on' : 'off'}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}
```

and refactor this into two components:

---

# Refactor

```ts {all|2|4|10|11|all}
function Toggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(o => !o)
  return <Switch on={on} onToggle={toggle} />
}

function Switch({on, onToggle}) {
  return (
    <div>
      <div>The button is {on ? 'on' : 'off'}</div>
      <button onClick={onToggle}>Toggle</button>
    </div>
  )
}
```

---

# Thoughts about prop drilling

## Pros
- It doesn't add complexity
- State can be as local as possible (less globals)
- Easier to track all the places code is being used

## Cons
- Things start to get unwieldly
  - Might overforward props as your remove child components
  - Might underforward props and find it hard to find bugs
  - Renaming props during the forwarding process can cause bugs

---

# Lifecycle diagrams

- [Class lifecycle](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [Hook lifecycle](https://wavez.github.io/react-hooks-lifecycle/)

--- 

# useEffect

> The effect hook lets you perform side effects in function components.

```ts
import React from 'react';

function Example() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

What are effects, really? Examples are:

- Fetching data
- Reading from local storage
- Registering and deregistering event listeners

---

# useEffect signature

```ts
React.useEffect(
    () => {
        // execute side effect
    },
    // optional dependency array
    [
        // 0 or more entries
    ] 
)
```

> The question is not ‘when does this effect run,’ the question is ‘with which state does this effect synchronize with?’

For your fellow developers, useEffect code blocks are clear indicators of asynchronous tasks. 

It is possible to write asynchronous code without useEffect, but it increases both complexity and the likelihood of introducing errors.

---

# Update the title

```ts
import React, { useState, useRef, useEffect } from "react";
function EffectsDemoNoDependency() {
  const [title, setTitle] = useState("default title");
  useEffect(() => {
    console.log("useEffect");
    document.title = title;
  });
  console.log("render");
  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}
```