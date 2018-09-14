import React, { Component } from "react";
import { Link } from "react-router-dom";

/* 
The dropdown navagation menu that appears when clicking on the 
hamburger menu on smaller devices.
*/

class MobileNav extends Component {
  toggleNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  render() {
    return (
      <div className="MobileNav overlay" id="myNav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => this.toggleNav()}
        >
          &times;
        </a>
        <div className="overlay-content">
          <Link to="/">Home</Link>
          <Link to="/programs/powerbb">Power BodyBuilding</Link>
          <Link to="/programs/531">Simplest Template 5/3/1</Link>
          <Link to="/about">Help</Link>
        </div>
      </div>
    );
  }
}

export default MobileNav;
