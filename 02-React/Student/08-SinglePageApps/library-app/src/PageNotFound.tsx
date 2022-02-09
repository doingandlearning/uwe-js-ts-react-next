import React from "react";
import './PageNotFound.css'

function PageNotFound() {
	return (
		<div className="pagenotfound">
			{window.location.pathname} is not found.
		</div>
	)
}
export default PageNotFound;