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

# Page Rendering and Data Fetching

---

# The problem with traditional React Apps

- HTML built and rendered by the client
- Can cause layout flashes before initial data fetch
- Can have issues with SEO
- Security issues when querying APIs, etc.

---
layout: image
image: ./assets/prerender.jpeg
---

# Page Pre-rendering

![](https://cln.sh/DFjvuF)

---
layout: image
image: ./assets/static.png
---

# Static Generation (typically recommended)

---

# Live Coding

- Product list
- Product with getStaticProps
- Local file with getStaticProps
- next build

---

# Incremental Static Generation

Data that changes frequently can make full site generation slow and unwieldly.

Fixes?

1. Use SSG for build and useEffect to get fresh data.

OR

2. Re-generate the data at most every X seconds
  - serve "old" page if not needed
  - generate, store and serve "new" pages

```js
return {
  props: {},
  revalidate: 10 // time in seconds
}
```

---

# Check it out 

- Dev server
- Local production server

---

# getStaticProps

Other return keys:

- notFound: true 
  - Used to show the 404 - maybe because no data found?
- redirect
  - Maybe no data? 

--- 

# Dynamic Pages

- Rather than using the router, we use the context object.

```js
const { params } = context;
```

Let's get the individual product.

---

# getStaticPaths

When pre-rendering a dynamic route there are a potential infinite number of pages that could be generated.

We use the getStaticPaths to tell Next which are valid paths for the route.

```ts
export async function getStaticPaths() { ... }
```

- paths
- fallback

---

# Server Side Rendering

This is the alternate form of pre-rendering:
- we've looked at static generation
- *now* we're looking at server side rendering

We now have access to the actual incoming request. 

This isn't a big deal for a lots of use cases but if you need cookies or something else then SSR (rather than SSG) is what is required.

```ts
export async function getServerSideProps() { ... }
```

We should only run one type of pre-rendering.

---

# getServerSideProps

Won't be called in advance. Only on the server *after* deployment.

```ts
export async function getServerSideProps(context) { 
  return {
    props: {}
  } // same sig as getStaticProps except for revalidate.

}
```

- params
- req
- res

---

# Dynamic Pages and getServerSideProps

The dynamic paths are available in the context object.

---

# What about client side data fetching?

- Data changes *very* fast (e.g. stock data)
- Highly user-specific data (e.g. last order in an online shop)
- Partial data (e.g. data that's only used on a part of the page)

Pre-fetching the data for page generation might not work or be required.

---

# useEffect

This is where we fall back on the useEffect fetching that we know and love :) 

---

# Managing Server State

- useSWR
- react-query
- ...

There are solutions (React and Next) that allow for isomorphic data fetching - using the same data fetching solution for both pre-rendering and client rendering.


