import React from "react"
import { Link, NavLink } from "react-router-dom"
function Menu() {
  const customStyle = {
    color: "red",
  }
  return (
    <ul>
      <li>
        <NavLink
          to="/hello"
          style={({ isActive }) => (isActive ? customStyle : undefined)}
        >
          Home
        </NavLink>{" "}
        {/* <Link to="/hello">Home</Link> */}
      </li>
      <li>
        <NavLink
          to="/teachers/tasks"
          style={({ isActive }) => (isActive ? customStyle : undefined)}
        >
          My tasks
        </NavLink>

        {/* <Link to="/tasks"> My tasks</Link> */}
      </li>
    </ul>
  )
}

export default Menu
