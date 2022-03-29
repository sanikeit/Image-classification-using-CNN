import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {
  return (
    <div className="high">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/ModelAnalysis" className="cleanLink">
            <span className="nav-item nav-link">ModelAnalysis</span>
          </Link>
          <Link to="/Tryit" className="cleanLink">
            <span className="nav-item nav-link">Tryit</span>
          </Link>
          <Link to="/Documentation" className="cleanLink">
            <span className="nav-item nav-link">Documentation</span>
          </Link>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar