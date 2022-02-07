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

# Next.js - The React Framework for Production

---

- Client side vs server side rendering (SSR)
- Routing
- "Fullstack" React

---

# Framework vs Libary

- React is a library and is only focused on the UI
- You need to add other libraries if you want to build large apps
- A framework gives you more guidance and rules
- It enhances React and makes building large scale apps easier
- Adds core features that reduce your workload

---

# Server-Side Rendering

- Prepare the content on the server rather than the client
- Better for SEO
- Better experience for the user (no waiting for initial fetch)
- Doesn't need any set up and automatically pre-renders
- Blend between fully SSG, SSR and on client pages

---

# File based routing

- Hijack the browser defaults
- Define pages and routes with files and folders
- The file structure controls the routing and reduces code
- Easier to understand

---

# Full Stack Framework

- Easier to add backend code
- Store data, get data, auth, etc - all in NodeJS 
- All backend code can be deployed as serverless functions by default

---

# create-next-app

---


