## Exercise

In the exercise, we're fetching a random cat image with from the
[CATAAS (Cat as a service) API](https://cataas.com/#/).

The code for fetching data is written in a `useEffect` function, and we can
successfully fetch an image when the page first loads. However, we should _also_
be able to fetch an image when the form is submitted, and the `text` or `filter`
state in the `App` component is updated.

You don't have to write too much code to get this working! Just fix the warning
message related to the dependencies array, and you're good to go.

> NOTE: even though we are using the `useEffect` to fetch data "after" a form
> submits, you don't always need to follow this approach! You can also write
> your fetch code in the event handler directly. The reason for using
> `useEffect` in this example is because we want to initiate a fetch request _as
> soon as the component loads_, as well as _anytime the text or filter state
> changes_. If we only wanted to fetch data when the form submits, we could
> approach this problem differently.