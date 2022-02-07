import React from "react"

function ListElement({ item }: { item: string }) {
	const [mentions, setMentions] = React.useState(0)

	return <div style={{ display: "flex" }}>
		<li>{item} has been mentioned {mentions} times.</li>
		<button onClick={() => setMentions(mentions + 1)}>+</button>
	</div>
}

export default ListElement;
