import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class SecondaryMaxes extends Component {
  handleSubmit(e) {
    e.preventDefault();
    // Parse submitted values into integers to store
    const sumoMax = parseInt(this.refs.sumomax.value.trim());
    const inclineMax = parseInt(this.refs.inclinemax.value.trim());
    const frontMax = parseInt(this.refs.frontmax.value.trim());
    const closegripMax = parseInt(this.refs.closegripmax.value.trim());
    if (weights.length > 0 && Meteor.user()) {
      console.log("A user has been found and updated");
      Meteor.call(
        "updateSecondaryMaxForUser",
        frontMax,
        closegripMax,
        sumoMax,
        inclineMax,
        Meteor.userId(),
        (err, res) => {
          if (err) console.log(err);
        }
      );
    } else if (localStorage.getItem("weightRefId") && !Meteor.user()) {
      console.log("Localstorage but not a user has been found and updated");

      Meteor.call(
        "updateSecondaryMaxLocalStorage",
        frontMax,
        closegripMax,
        sumoMax,
        inclineMax,
        localStorage.getItem("weightRefId"),
        (err, res) => {
          if (err) console.log(err);
        }
      );
    } else {
      console.log("No user or localstorage and must be inserted");

      Meteor.call(
        "insertSecondaryMaxes",
        frontMax,
        closegripMax,
        sumoMax,
        inclineMax,
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

  renderSavedWeights(whatLift) {
    const { weights, nonUserWeights } = this.props;
    if (Meteor.user() && weights.length > 0) {
      return weights[0].fivethreeone[whatLift];
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return nonUserWeights[0].fivethreeone[whatLift];
    }
  }

  render() {
    if (!this.props.ready) {
      return <div>Loading</div>;
    }
    return (
      <div className="RepMaxForms">
        <SectionTitle title="Secondary Maxes" />
        <form id="secondarymaxform" onSubmit={e => this.handleSubmit(e)}>
          <label>
            <input
              name="sumo"
              type="text"
              ref="sumomax"
              defaultValue={this.renderSavedWeights("sumoDeadliftMax")}
            />
            Sumo Deadlift
          </label>
          <label>
            <input
              name="incline"
              type="text"
              ref="inclinemax"
              defaultValue={this.renderSavedWeights("inclineBenchMax")}
            />
            Incline Bench
          </label>
          <label>
            <input
              name="front"
              type="text"
              ref="frontmax"
              defaultValue={this.renderSavedWeights("frontSquatMax")}
            />
            Front Squat
          </label>
          <label>
            <input
              name="closegrip"
              type="text"
              ref="closegripmax"
              defaultValue={this.renderSavedWeights("closeGripBenchMax")}
            />
            Close Grip Bench
          </label>
        </form>
        <button
          type="submit"
          className="RepMaxForms__save"
          form="secondarymaxform"
        >
          Save
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  const localStorageId = localStorage.getItem("weightRefId");
  const allWeights = Meteor.subscribe("allWeights");
  return {
    nonUserWeights: WeightSettings.find({ _id: localStorageId }).fetch(),
    ready: allWeights.ready(),
    weights: WeightSettings.find({}).fetch()
  };
})(SecondaryMaxes);
