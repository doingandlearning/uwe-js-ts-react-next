import React from "react";

function Swapi() {
	// Create a state variable
	const [data, setData] = React.useState([])
	const [loading, setLoading] = React.useState(true)

	// Add a useEffect => get data, set state variable
	// https://swapi.dev/api/people

	React.useEffect(() => {
		window.fetch("https://swapi.dev/api/people")
			.then(response => response.json())
			.then(parsed => {
				setData(parsed.results)
				setLoading(false)
			})
	}, [])

	console.log(data)
	// Rendering of data
	return <>
		{loading ? <p>Loading data ... </p> :
			<ul>{data.map((person) =>
				<li key={person.url}>
					{person.name} is {person.height} tall.
				</li>)}
			</ul>}
	</>
}

export default Swapi