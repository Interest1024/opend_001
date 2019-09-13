import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a className="brand-logo" href=" ">Opend</a>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/report">Report</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);