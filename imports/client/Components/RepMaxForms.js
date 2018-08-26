import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class RepMaxForms extends Component {
  state = {
    defaultMaxes: {},
    defaultSquatValue: 0
  };

  handleSubmit(e) {
    e.preventDefault();

    // Parse submitted values into integers to store
    const squatMax = parseInt(this.refs.squatmax.value.trim());
    const benchMax = parseInt(this.refs.benchmax.value.trim());
    const deadliftMax = parseInt(this.refs.deadmax.value.trim());
    const overheadMax = parseInt(this.refs.ohpmax.value.trim());
    if (WeightSettings.find({ user: Meteor.userId() }) && Meteor.user()) {
      console.log("A user has been found and updated");
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
            localStorage.setItem("weightRefId", res);
          }
        }
      );
    }
  } // end of handleSubmit()

  updateState() {
    // Doing this on component did update is causing an infinite loop. Working but must be changed
    if (this.props.ready) {
      this.props.weights.map(i => {
        if (i._id === localStorage.getItem("weightRefId")) {
          return this.setState({ defaultMaxes: i });
        }
      });
    }
  }

  render() {
    return (
      <div className="RepMaxForms">
        <SectionTitle title="1 Rep Max" />
        <form id="repmaxform" onSubmit={e => this.handleSubmit(e)}>
          <label>
            <input
              name="squat"
              type="text"
              ref="squatmax"
              defaultValue={
                Meteor.user()
                  ? this.props.weights.squatMax
                  : this.state.defaultMaxes
              }
            />
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
          Save
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  const allWeights = Meteor.subscribe("allWeights");
  return {
    ready: allWeights.ready(),
    weights: WeightSettings.find({}).fetch()
  };
})(RepMaxForms);
