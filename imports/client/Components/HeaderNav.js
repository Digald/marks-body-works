import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderNav extends Component {
  render() {
    return (
      <div className="HeaderNav">
        <a target="_blank" href="https://github.com/Digald">
          <p className="HeaderNav__item">Github</p>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/markalaniz/">
          <p className="HeaderNav__item">LinkedIn</p>
        </a>
        <Link to="/">
          <p className="HeaderNav__item">Login</p>
        </Link>
        <Link to="/">
          <p className="HeaderNav__item">Sign Up</p>
        </Link>
      </div>
    );
  }
}

export default HeaderNav;
