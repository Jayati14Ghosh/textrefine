import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
export class Navbar extends Component{
  render(){
    return(
      <>
      <nav className={`navbar navbar-expand-lg navbar-${this.props.navbar} bg-${this.props.bg} text-${this.props.color}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{this.props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse">
      <div className="navbar-nav">
        <Link className="nav-link" to="/about">About</Link>
      </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li onClick={this.props.lightmode} className="d-flex align-items-center justify-content pointer"><span className="light-theme-round"></span> Light Mode</li>
      <li onClick={this.props.darkmode} className="d-flex align-items-center justify-content pointer"><span className="dark-theme-round"></span> Dark Mode</li>
      </ul>

    </div>
  </div>
</nav>
      </>
    )
  }
}
