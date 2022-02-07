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

# Pages and File-based Routing

---

# What is file based routing?

- Traditionally we're using react-router-dom or other library
- NextJS will infer the routes from the folder structure
- The special `/pages` folder is what will be used

---
layout: image
image: ./assets/pagestructure.png
---

---

# Adding some pages

- Add index.js
- Add about.js

---

# Working with nested paths

- Use folders to /pages to nest

---

# Working with Dynamic Path

- Square bracket which captures URL parameter to variable
- To get the data, we use the `useRouter` hook from `next/router`.
  - pathname
  - query

--- 

# Nested dynamic routes and paths

- /clients/index.js
- /clients/[id]/about.js
- /clients/[id]/projects/[projectid]/index.js
- /clients/[id]/projects/[projectid]/about.js

---

# Adding Catch-All/Collect All

Maybe we have different ways to access data.

- /blog/[id].js
- /blog/[slug].js
- /blog/[date].js

Use the spread operator:

- /blug/[...slug].js

--- 

# The Link Component

- Using `<a></a>` tags, we don't get the SPA experience

```ts
<Link href=""></Link>
```

- Prefetches
- Other optimisations
- Handles dynamic paths as well

---

# Navigate programatically

```tsx
router.push()
```

---

# Custom 404

Just create a 404.js at the top level :) 