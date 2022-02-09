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

# Optimizing NextJS Apps

---

# Meta data in `<head>`

```ts
import Head from "next/head";
```

- Can be added anywhere (not just page level)
- NextJS will inject this data at the correct point
- Often used in an SEO component
- Can use dynamic values based on the page/component data

---

# _app.js file

- This is the root app component that is injected to the div 
- Could add the global Head features here with dynamic overrides on some pages
- If there are conflicting tags (like title), NextJS will take the latest.
- Other uses might be registering analytics or adding global context providers

---

# _document.js

- Added in the pages/ folder
- This is the HTML shell and allows us to modify the entire document where the app is mounted
- This allows us to update the html and body tags used to render the page.
- Only rendered on the server, so event handlers can't be used
- Different Head component
- No React rendering outside of Main 
- No data fetching on this page

```js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head /> 
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

---

# Images

```ts
import Image from "next/image"
```


```tsx
<Image src alt width height />
```