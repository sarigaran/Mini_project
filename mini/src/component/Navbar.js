import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   <>
   <nav className="navbar bg-primary sticky-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <Link className="navbar-brand" to="/">LOKI</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Link</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contuct">Contact</Link>
        </li> 
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar;