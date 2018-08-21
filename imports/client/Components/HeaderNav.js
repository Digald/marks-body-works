import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountsUIWrapper from '../AccountsUIWrapper';

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
        <AccountsUIWrapper/>
      </div>
    );
  }
}

export default HeaderNav;
