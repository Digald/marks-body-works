import React, { Component } from "react";
// Components
import HeaderNav from "../Components/HeaderNav";
import MainNav from '../Components/MainNav';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <HeaderNav />
        <MainNav/>
      </div>
    );
  }
}

export default LandingPage;
