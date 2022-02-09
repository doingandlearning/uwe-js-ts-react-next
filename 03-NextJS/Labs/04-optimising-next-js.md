# Exercise 1: Metadata

- Add a title tag to each of the main pages (/, /events/, /events/[id], /events/[...slug])
- For the dynamic paths, have the title be relevant to the data

# Exercise 2: Create and use an SEO component

Here's a basic set of meta tags. Create a component that returns these and use it in your pages.

What props would you need to pass through? Which pieces would remain consistent?

```html
<title></title>
<meta name="description" content="">

<!-- Google / Search Engine Tags -->
<meta itemprop="name" content="">
<meta itemprop="description" content="">
<meta itemprop="image" content="">

<!-- Facebook Meta Tags -->
<meta property="og:url" content="">
<meta property="og:type" content="website">
<meta property="og:title" content="">
<meta property="og:description" content="">
<meta property="og:image" content="">

<!-- Twitter Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="">
<meta name="twitter:description" content="">
<meta name="twitter:image" content="">
```

# Exercise 4: Images

- Update the `event-logistics.js` image call to use the next/image component.
- This is used in /events/[eventId] for you to test

# Extra credit: _app.js

- Add a ThemeContext provider in _app.js
- You'll need to create the provider and context, import and wrap the main component.


