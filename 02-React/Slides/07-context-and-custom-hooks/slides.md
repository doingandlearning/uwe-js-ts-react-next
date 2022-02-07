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

# Hooks 2: Context and Custom Hooks

---

- What is Context?
- Using Context
- Creating your own hooks

---

# What is Context?

Context provides a way to pass data through the component tree without having to pass props down manually.

Designed to share data that can be considered "global" for a tree of React components. 

- current authenticated user
- theme
- preferred language

---
layout: two-cols
---

# When to use context

- Data needs to be accessible by many components at different nesting levels

- Consider whether component composition might be a solution:

```tsx
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... which renders ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... which renders ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

::right::

could become 

```tsx
function Page(props) {
  const user = props.user;
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Now, we have:
<Page user={user} avatarSize={avatarSize} />
// ... which renders ...
<PageLayout userLink={...} />
// ... which renders ...
<NavigationBar userLink={...} />
// ... which renders ...
{props.userLink}
```

---
layout: two-cols
---

# API

## React.createContext

```tsx
const MyContext = React.createContext(defaultValue);
```

Creates a Context object. The defaultValue arg is only used when a component does not have a matching Provider above it in the tree.

## Context.Provider

```tsx
<MyContext.Provider value={/* some value */}>
```

Every Context object comes with a Provdier component that allows consuming components to subscribe to context changes.

::right::

## Context.Consumer

```tsx
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

A React component that subscribes to context changes. The required child function receives the current context value and returns a React node.

## Context.displayName

```tsx
const MyContext = React.createContext(/* some value */);
MyContext.displayName = 'MyDisplayName';
```

Helpful for showing display name in the dev tools.

---

# Build a music player

---

# Custom Hooks

Building your own hooks lets you extract component logic into resuable functions.

When we want to share logic between two JS functions, we extract it to a third function.

A custom hook is a JS function whose name starts with `use` and that may call other hooks.

---

# Refactor our music player