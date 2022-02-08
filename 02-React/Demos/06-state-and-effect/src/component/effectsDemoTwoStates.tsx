import React from "react"

function EffectsDemoTwoStates() {
	const [title, setTitle] = React.useState("default title");
	const [darkMode, setDarkMode] = React.useState(false);
	React.useEffect(() => {
		console.log("useEffect");
		document.title = title;
	}, [title]);
	console.log("render");
	const handleCheckboxChange = () => setDarkMode((prev) => !prev);
	return (
		<div className={darkMode ? "dark-mode" : ""}>
			<label htmlFor="darkMode">dark mode</label>
			<input
				name="darkMode"
				type="checkbox"
				checked={darkMode}
				onChange={handleCheckboxChange}
			/>
			<input value={title} onChange={(e) => setTitle(e.target.value)} />
		</div>
	);
}

export default EffectsDemoTwoStates;