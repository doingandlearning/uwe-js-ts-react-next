## Exercise

In the exercise, we have a component set up where we can fetch data when a user
clicks a button. It'd be a much nicer user experience to fetch that data as soon
as the user visits the page and our components are rendered, instead of making
them click a button! The `useEffect` hook can help us out with this.

Follow the instructions in the `exercise/01.js` file to use the `useEffect`
hook. If your code works correctly, you should be able to fetch the images from
the server and display them without needing to click the button.

As you're working, check the console to see when your component re-renders. If
you notice you component is caught in an _infinite loop_ of fetching data,
setting state, and re-rendering, check the following:

- Is your `fetch` written _inside_ the `useEffect` callback function?
- Did you include the second argument of an empty array in the `useEffect`
  function?

If you're stuck, check out this
[example from the React docs](https://reactjs.org/docs/faq-ajax.html#example-using-ajax-results-to-set-local-state)
(at the bottom of the page, you'll find an example using the `useEffect` hook).

### Extra Credit

When we're fetching data from an API, it can sometimes take a long time for the
server to send back a response for any number of reasons:

- The user's network is slow
- The server's network is slow
- The database operation is slow
- Etc

In cases like these, it's a good idea to show some kind of indication to our
users that work is being done in the background by showing some kind of loading
indicator.

For extra credit, update the App component:

- when the component first renders, display a `<h1>` element that says
  "Loading..."
- when the we have the image data from the server, display the images

> Hint: you may need to add new state to your component to keep track of the
> status of the fetch request, and update it when a new response comes back!

It may be tough to see the loading indicator in real time depending on how fast
the API is able to respond. You can
[use the Dev Tools to simulate a slow network](https://developers.google.com/web/tools/chrome-devtools/device-mode#network)
if you want to check on your loading indicator implementation.