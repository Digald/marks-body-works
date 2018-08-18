import React, { Component } from "react";
import HeaderNav from "../Components/HeaderNav";
import MainNav from "../Components/MainNav";
import RepMaxForms from '../Components/RepMaxForms';

class Powerbb extends Component {
  render() {
    return (
      <div className="Powerbb">
        <HeaderNav />
        <MainNav />
        <div className="Powerbb__max-title">
            <h2>1 Rep Max</h2>
        </div>
        <RepMaxForms/>
      </div>
    );
  }
}

export default Powerbb;
