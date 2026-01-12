import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
const Dash = () => {
  return (
    <div>
        <nav>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </nav>

      <Outlet/>
    </div>
  )
}

export default Dash
