import React, { Component } from "react";
// import components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import RepMaxForms from "../Components/RepMaxForms";
import SecondaryMaxes from '../Components/SecondaryMaxes';
import ChooseWeek531 from "../Components/ChooseWeek531";
import FiveThreeOneLifts from '../Components/FiveThreeOneLifts';

/* 
The parent page component containing other child components that make up Wender's 5/3/1 program.
*/

class FiveThreeOne extends Component {
  render() {
    return (
      <div className="FiveOneThree">
        <HeaderNav />
        <MainNav />
        <RepMaxForms />
        <SecondaryMaxes/>
        <ChooseWeek531 />
        <FiveThreeOneLifts/>
      </div>
    );
  }
}

export default FiveThreeOne;
