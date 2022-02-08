import React from "react";
import splash from "./splash.jpg"

function Home() {
	return (
		<div className="content">
			<h1>Welcome to Home page</h1>
			<img src={splash} alt="Forest river" />
		</div>
	)
}
export default Home;