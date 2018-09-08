import React, { Component } from "react";
// import components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import RepMaxForms from "../Components/RepMaxForms";
import PBBLifts from "../Components/PBBLifts";
import ChooseWeekDropDown from "../Components/ChooseWeekDropDown";

/* 
The parent page component containing other child components that make up the Power BB program.
*/

class Powerbb extends Component {
  render() {
    return (
      <div className="Powerbb">
        <HeaderNav />
        <MainNav />
        <RepMaxForms />
        <ChooseWeekDropDown />
        <PBBLifts />
      </div>
    );
  }
}

export default Powerbb;
