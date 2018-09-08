import React, { Component } from "react";
// Components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import ImageCarousel from "../Components/ImageCarousel";

/* 
The landing page at the root directory of the applicaiton. Contains navagation components mostly.
*/

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage__wrapper">
          <HeaderNav />
          <div className="LandingPage__wrapper__grid">
            <MainNav />
            <ImageCarousel />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
