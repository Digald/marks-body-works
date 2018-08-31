import React, { Component } from "react";
// import components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import RepMaxForms from "../Components/RepMaxForms";
import ChooseWeek531 from "../Components/ChooseWeek531";
import FiveThreeOneLifts from '../Components/FiveThreeOneLifts';

class FiveThreeOne extends Component {
  render() {
    return (
      <div className="FiveOneThree">
        <HeaderNav />
        <MainNav />
        <RepMaxForms />
        <ChooseWeek531 />
        <FiveThreeOneLifts/>
      </div>
    );
  }
}

export default FiveThreeOne;
