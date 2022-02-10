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

# API Routes

---

- What are API routes?
- Adding and using API routes
- Working with requests and responses

---

# What are they?

- Single files that are deployed as serverless routes
- Handles all HTTP verbs
- Completes the entire request/response cycle
- They generally return JSON but can return anything

---

# Example

```tsx
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
```

---

# Preparing the Frontend form

---

# Writing the API route

- Test the verb
- Destructure the fields from the body
- Create a new feedback object
- Import path and fs
- Push this object to the fs
- Send a response

---

# Using the route

- Use handler to POST data

---

# Getting data

- Update the route to serve all the feedback on GET
- Handle this in a useEffect
- Move into a getStaticProps

