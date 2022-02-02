import React from "react";
import './Home.css'
import splash from './splash.jpg';

function Home() {
	return (
		<div className="container">
			<img src={splash} alt="peaceful background" />
			<div className="centered">Router techniques</div>
		</div>
	)
}
export default Home;