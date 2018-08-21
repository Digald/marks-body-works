import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import PBBTable from "./PBBTable";

class PBBLifts extends Component {
  render() {
    return (
      <div className="PBBLifts">
        <SectionTitle title={"props.week.title"} />
        <PBBTable />
      </div>
    );
  }
}

export default PBBLifts;
