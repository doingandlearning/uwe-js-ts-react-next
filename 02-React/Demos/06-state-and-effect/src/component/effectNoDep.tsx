import React from "react";

function EffectsDemoNoDependency() {
	const [title, setTitle] = React.useState("default title");
	React.useEffect(() => {
		console.log("useEffect");
		document.title = title;
	});
	console.log("render");
	return (
		<div>
			<input value={title} onChange={(e) => setTitle(e.target.value)} />
		</div>
	);
}

export default EffectsDemoNoDependency
