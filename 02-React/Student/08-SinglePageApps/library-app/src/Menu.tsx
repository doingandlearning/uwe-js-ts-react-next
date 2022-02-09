import "./Menu.css";
import { NavLink } from "react-router-dom"

function Menu() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/books">Books</NavLink>
      <NavLink to="/films">Films</NavLink>
      <NavLink to="/morestuff">More Stuff</NavLink>
    </nav>
  )
}
export default Menu;

