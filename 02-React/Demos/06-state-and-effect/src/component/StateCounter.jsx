import React from 'react';

function Example() {
  const [count, setCount] = React.useState(0);
	const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
		console.log("useEffect running.")
    document.title = `You clicked ${count} times`;
  }, [count]);

	React.useEffect(() => {
		console.log("Triggering darkmode")
	}, [darkMode])

	console.log("Component (re)-rendering")

  return (
    <div>
      <p>You clicked {count} times</p>
			<input type="checkbox" value={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example