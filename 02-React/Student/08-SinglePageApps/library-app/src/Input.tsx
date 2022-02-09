import React from "react"

function Input() {
	const [name, setName] = React.useState("Initial text")

	return <div>
		<label htmlFor="name">Name: <input id="name" value={name} onChange={(e) => setName(e.target.value)} /></label>

		{name.length > 0 ? <p>The name is {name}.</p> : null}
	</div>
}

export default Input