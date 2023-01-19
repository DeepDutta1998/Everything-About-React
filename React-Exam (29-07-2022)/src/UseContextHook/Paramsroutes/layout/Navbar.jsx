import React from 'react'
import { BrowserRouter as Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
  <div>
    <NavLink to="/">Use Context Example</NavLink>
  <div>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>       
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar