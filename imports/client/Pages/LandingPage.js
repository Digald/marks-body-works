import React, { Component } from "react";
// Components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import ImageCarousel from "../Components/ImageCarousel";

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <div className="LandingPage__wrapper">
          <HeaderNav />
          <MainNav />
          <ImageCarousel />
        </div>
      </div>
    );
  }
}

export default LandingPage;
