import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link">Notes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">New Notes</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
