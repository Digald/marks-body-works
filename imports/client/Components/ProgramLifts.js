import React, { Component } from "react";
import SectionTitle from './SectionTitle';

class ProgramLifts extends Component {
  render() {
    return (
      <div className="ProgramLifts">
        <SectionTitle title={"props.week.title"}/>
      </div>
    );
  }
}

export default ProgramLifts;
