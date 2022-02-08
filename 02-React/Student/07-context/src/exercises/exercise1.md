# Exercise

We're putting everything in one file to keep things simple, but I've labeled things a bit so you know that typically your context provider will be placed in a different file and expose the provider component itself as well as the custom hook to access the context value.

We're going to take the Count component that we had before and separate the button from the count display. We need to access both the count state as well as the setCount updater in these different components which live in different parts of the tree. Normally lifting state up would be the way to solve this trivial problem, but this is a contrived example so you can focus on learning how to use context.

Your job is to fill in the CountProvider function component so that the app works and the tests pass.

## Extra Credit

### 1. 💯 create a consumer hook

Imagine what would happen if someone tried to consume your context value without
using your context provider. For example, as mentioned above when discussing the
default value:

```javascript
ReactDOM.render(<FooDisplay />, document.getElementById('root'))
```

If you don't provide a default context value, that would render
`<div>Foo is: </div>`. This is because the context value would be `undefined`.
In real-world scenarios, having an unexpected `undefined` value can result in
errors that can be difficult to debug.

In this extra credit, you need to create a custom hook that I can use like this:

```javascript
const [count, setCount] = useCount()
```

And if you change the `App` to this:

```javascript
function App() {
  return (
    <div>
      <CountDisplay />
      <Counter />
    </div>
  )
}
```

It should throw an error indicating that `useCount` must be used within a
CountProvider.