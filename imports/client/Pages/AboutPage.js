import React, { Component } from "react";
// import components
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import ProgramDescriptions from '../Components/ProgramDescriptions';

/*
Text page that contains all the instructions for completing the programs in this application.
*/

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <HeaderNav />
        <MainNav />
        <ProgramDescriptions/>
      </div>
    );
  }
}

export default AboutPage;
