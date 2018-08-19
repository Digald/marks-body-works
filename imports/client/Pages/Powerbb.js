import React, { Component } from "react";
// import components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import RepMaxForms from '../Components/RepMaxForms';
import ProgramLifts from '../Components/ProgramLifts';
import ChooseWeekDropDown from '../Components/ChooseWeekDropDown';

class Powerbb extends Component {
  render() {
    return (
      <div className="Powerbb">
        <HeaderNav />
        <MainNav />
        <RepMaxForms/>
        <ChooseWeekDropDown/>
        <ProgramLifts/>
      </div>
    );
  }
}

export default Powerbb;
