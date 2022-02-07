import React from "react"

// Create three inputs (Name, Place, What you're having for dinner?)

// Below the form render `${name} is having ${food} for dinner in ${place}`

function Form() {
	// You'll want to use React.useState({name: , food:, place: }) or three React.useState()
	const [name, setName] = React.useState("")
	const [food, setFood] = React.useState("")
	const [place, setPlace] = React.useState("")

	return <div>
		<label htmlFor="name">Name: <input id="name" value={name} onChange={e => setName(e.target.value)} /></label>
		<label htmlFor="food">Food: <input id="food" value={food} onChange={e => setFood(e.target.value)} /></label>
		<label htmlFor="place">Place: <input id="place" value={place} onChange={e => setPlace(e.target.value)} /></label>
		<p>{name} is having {food} for dinner in {place}.</p>
	</div>
}

export default Form