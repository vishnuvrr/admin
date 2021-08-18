import React from 'react'

import {
    Link
  } from "react-router-dom";
  

export default function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

   
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

   
    <hr className="sidebar-divider my-0"/>

   
    <li className="nav-item active">
        <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
    </li>

    
    <hr className="sidebar-divider"/>

    
    <div className="sidebar-heading">
        Interface
    </div>

    
    <li className="nav-item">
        <Link className="nav-link collapsed" to="/users">
            <i className="fas fa-fw fa-cog"></i>
            <span>USERS</span>
        </Link>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>

    
    <li className="nav-item">
        <Link className="nav-link collapsed" to="/products">
            <i className="fas fa-fw fa-wrench"></i>
            <span>PRODUCTS</span>
        </Link>
        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Utilities:</h6>
                <a className="collapse-item" href="utilities-color.html">Colors</a>
                <a className="collapse-item" href="utilities-border.html">Borders</a>
                <a className="collapse-item" href="utilities-animation.html">Animations</a>
                <a className="collapse-item" href="utilities-other.html">Other</a>
            </div>
        </div>
    </li>
</ul>
  )
}
