import { NavLink } from "react-router-dom"
import "./Menu.css"

function Menu() {
	return <nav>
		<NavLink to="/">Home</NavLink> |
		<NavLink to="/about">About</NavLink> |
		<NavLink to="/contact">Contact</NavLink> |
		<NavLink to="/products">Products</NavLink> |
	</nav>
}

export default Menu