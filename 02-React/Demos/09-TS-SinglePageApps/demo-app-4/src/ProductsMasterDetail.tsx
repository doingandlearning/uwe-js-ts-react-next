import React from "react";
import { Link, Routes, Route, } from "react-router-dom";
import ProductStore from './ProductStore'
import Product from './Product'

function ProductsMasterDetail() {

	let products = ProductStore.getAllProductItems()

	return (
		<React.Fragment>
			<div className="content">
				<h1>Products</h1>
				<ul>
					{products.map((product, i) =>
						<li key={i}>
							{/* Render a link with a path such as /productsmasterdetail/42 */}
							<Link to={`${product.id}`}>{product.description}</Link>
						</li>
					)}
				</ul>
				<hr />
			</div>

			{/* Define a nested route table, to decide what else to display on this page */}
			<Routes>

				{/* If the path is just /productsmasterdetail, i.e. user hasn't clicked a product yet... */}
				<Route path="/" element={<div className="content">Select a product...</div>} />

				{/* If the path is something like /productsmasterdetail/42, display that product here and now */}
				<Route path={`/:id`} element={<Product />} />

			</Routes>
		</React.Fragment>
	)
}
export default ProductsMasterDetail;