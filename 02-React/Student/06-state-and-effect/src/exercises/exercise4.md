## Exercise

In the exercise, we have a `Clock` component that displays the current date and
time. To keep the clock up to date, we set up an interval to run every 1 second
using `setInterval`, where we trigger an update to state with the new time.

However, sometimes we don't want to show the `Clock` component to our users! We
can toggle the clock on and off by clicking the button, which will
_conditionally render_ the `Clock` component.

_When the Clock component unmounts_, we want to stop the interval from running
by using
[`clearInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval),
so we aren't wasting resources by running the interval in the background.

Use the cleanup function for the `useEffect` callback to clear the interval!

> Make sure you have your console open as you're working, so that you can see
> when state is being updated. The desired behavior is that when the clock is no
> longer being displayed, you will no longer see "Setting state" in the console.