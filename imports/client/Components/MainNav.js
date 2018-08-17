import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => (
  <div className="MainNav">
    <Link to="/">
      <h1 className="MainNav__logo">Mark's Body Works</h1>
    </Link>
    <div className="MainNav__main-items">
      <Link to="/programs/powerbb">
        <p className="MainNav__main-items__item">Power BB</p>
      </Link>
      <Link to="programs/531">
        <p className="MainNav__main-items__item MainNav__main-items__item-last">5/3/1 Simplest Template</p>
      </Link>
    </div>
  </div>
);

export default MainNav;
