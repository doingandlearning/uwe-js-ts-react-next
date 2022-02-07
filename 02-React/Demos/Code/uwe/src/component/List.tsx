import React, { ReactNode } from "react"
import ListElement from "./ListElement"

function List({ data = [], children }: { data: string[], children?: ReactNode }) {
	const dataListItems = data.map((item) => (
		<ListElement key={item} item={item} />
	));

	return (
		<>
			<ul>{dataListItems}</ul>
			{children ? children : null}
		</>
	);
}

export default List;