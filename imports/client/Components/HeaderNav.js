import React, { Component } from "react";
import AccountsUIWrapper from '../AccountsUIWrapper';

/* 
A different type of navagation bar. Usually displayed at the 
very top of the application, this component is in charge of containing 
the user authentication component as well as for external links to linkedin
or github.
*/

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
