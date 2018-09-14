import React, { Component } from "react";
// import components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import RepMaxForms from "../Components/RepMaxForms";
import SecondaryMaxes from "../Components/SecondaryMaxes";
import ChooseWeek531 from "../Components/ChooseWeek531";
import FiveThreeOneLifts from "../Components/FiveThreeOneLifts";
import MobileNav from "../Components/MobileNav";
// meteor imports
import { withTracker } from "meteor/react-meteor-data";

/* 
The parent page component containing other child components that make up Wender's 5/3/1 program.
*/

class FiveThreeOne extends Component {
  render() {
    if (!this.props.ready) {
      return <div className="loading-screen">Loading...</div>;
    }
    return (
      <div className="FiveOneThree">
        <HeaderNav />
        <MainNav />
        <MobileNav />
        <h1 className="program-title">Simplest Template 5/3/1</h1>
        <RepMaxForms />
        <SecondaryMaxes />
        <ChooseWeek531 />
        <FiveThreeOneLifts />
      </div>
    );
  }
}

export default withTracker(() => {
  const allWeights = Meteor.subscribe("allWeights");
  return {
    ready: allWeights.ready()
  };
})(FiveThreeOne);
