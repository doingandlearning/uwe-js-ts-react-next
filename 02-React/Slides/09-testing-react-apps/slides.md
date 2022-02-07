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

# Testing React Apps

---

# Why we don't write tests

- It's boring
- We don't have enough time
- We don't have enough budget
- QA should do that
- We don't use TDD
...

---

# When we normally start to write tests

- It's a specific task
- There are no interesting features to work on
- Project is almost done
- There was a huge *#$% up recently

--- 

# Why should we write tests

- It will increase the stability of our app
- Extending the app will be less risky
- Architecture will be better
- Code will be more understandable
- It will make your customers and users happier

---

# Our first test

```tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
```

---

# Matchers


---

# React Testing Library

Test your applications in the ways that users are going to use them.

