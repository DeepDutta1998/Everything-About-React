import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React Crud Application</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/all-user">AllUser</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/add-user">AddUser</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/api">FetchApi</Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
