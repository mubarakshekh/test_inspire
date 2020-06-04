import React from 'react';
import { navBarMenus } from '../config/navBar'
import '../component_css/navbar.css'

function Navbar() {



  return (
    <div className="container">
      <nav className="navbar fixed-top navbar-expand-lg bg-transparent">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <span className="navbar-brand text-white">Master O</span>

          </li>
        </ul>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">



          <ul className="nav navbar-nav ml-auto">
            {
              navBarMenus.map((menuItem, index) => {
                return <li className="nav-item" key={index}>
                  <span className="nav-link text-white pad">{menuItem.title}</span>
                </li>
              })
            }
            <li className="nav-item pad">
              <button className="btn btn-danger">Schedule a demo</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
