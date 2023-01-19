import React from 'react'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div style={{
      background: ' #36D1DC',
      background: '-webkit-linear-gradient(to right, #5B86E5, #36D1DC)',
      background: 'linear-gradient(to right, #5B86E5, #36D1DC)',
      padding: "6px"
    }}>
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}><h3>React-Curd</h3></a>
          <button className="navbar-toggler" type="button" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" exact to='/' style={{ color: 'white' }}><h5>Home</h5></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to='/add' style={{ color: 'white' }} ><h5>Add_User</h5></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" exact to='/view' style={{ color: 'white' }}><h5>View_Users</h5></NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
