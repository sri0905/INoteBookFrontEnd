import React from 'react'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation()
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <h3 style={{color:"white"}} className='mx-3'>INoteBook</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ml-3">
          <Link className={`nav-link ${location.pathname==="/"? "active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">About</Link>
        </li>
        
      </ul>
 
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
