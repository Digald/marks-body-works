import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class RepMaxForms extends Component {
  handleSubmit(e) {
    e.preventDefault();

    // Parse submitted values into integers to store
    const squatMax = parseInt(this.refs.squatmax.value.trim());
    const benchMax = parseInt(this.refs.benchmax.value.trim());
    const deadliftMax = parseInt(this.refs.deadmax.value.trim());
    const overheadMax = parseInt(this.refs.ohpmax.value.trim());
    if (WeightSettings.find({ user: Meteor.userId() })) {
      console.log("A user has been found and updated");
      console.log(this.props.weights);
      Meteor.call(
        "updateRepMaxForUser",
        overheadMax,
        benchMax,
        squatMax,
        deadliftMax,
        Meteor.userId(),
        (err, res) => {
          if (err) console.log(err);
        }
      );
    } else if (localStorage.getItem("weightReferenceId")) {
      console.log("A cookie but not a user has been found and updated");

      Meteor.call(
        "updateRepMaxLocalStorage",
        overheadMax,
        benchMax,
        squatMax,
        deadliftMax,
        localStorage.getItem("weightReferenceId"),
        (err, res) => {
          if (err) console.log(err);
        }
      );
    } else {
      console.log("No user or cookie and must be inserted");

      Meteor.call(
        "insertRepMaxes",
        overheadMax,
        benchMax,
        squatMax,
        deadliftMax,
        Meteor.userId(),
        (err, res) => {
          if (err) console.log(err);
          if (!Meteor.user()) {
            localStorage.setItem("weightReferenceId", res);
          }
        }
      );
    }
  } // end of handleSubmit()

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
