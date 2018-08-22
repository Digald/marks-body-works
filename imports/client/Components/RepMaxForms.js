import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
import ReactDOM from "react-dom";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class RepMaxForms extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const squatMax = parseInt(
      ReactDOM.findDOMNode(this.refs.squatmax).value.trim()
    );
    const benchMax = parseInt(
      ReactDOM.findDOMNode(this.refs.benchmax).value.trim()
    );
    const deadliftMax = parseInt(
      ReactDOM.findDOMNode(this.refs.deadmax).value.trim()
    );
    const overheadMax = parseInt(
      ReactDOM.findDOMNode(this.refs.ohpmax).value.trim()
    );
    const result = Meteor.call(
      "insertRepMaxes",
      overheadMax,
      benchMax,
      squatMax,
      deadliftMax,
      (err, res) => {
        if (err) console.log(err);
        console.log(res);
      }
    );
  }

  render() {
    return (
      <div className="RepMaxForms">
        <SectionTitle title={"1 Rep Max"} />
        <form id="repmaxform" onSubmit={e => this.handleSubmit(e)}>
          <label>
            <input name="squat" type="text" ref="squatmax" />
            Squat
          </label>
          <label>
            <input name="bench" type="text" ref="benchmax" />
            Bench
          </label>
          <label>
            <input name="dead" type="text" ref="deadmax" />
            Deadlift
          </label>
          <label>
            <input name="ohp" type="text" ref="ohpmax" />
            Overhead Press
          </label>
        </form>
        <button type="submit" form="repmaxform">
          Submit
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("allWeights");
  return {
    weights: WeightSettings.find({}).fetch()
  };
})(RepMaxForms);
