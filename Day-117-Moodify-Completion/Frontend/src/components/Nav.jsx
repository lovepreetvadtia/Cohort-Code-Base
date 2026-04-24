import { NavLink } from "react-router"

const Nav = () => {
  return (
    <nav>
        <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        </div>
    </nav>
  )
}

export default Nav