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
    if (
      WeightSettings.find({ user: Meteor.userId() }).fetch().length > 0 &&
      Meteor.user()
    ) {
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
      console.log("Localstorage but not a user has been found and updated");

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
      console.log("No user or localstorage and must be inserted");

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

  renderSavedWeights(whatLift) {
    if (Meteor.user() && this.props.weights) {
      return this.props.weights[0][whatLift];
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return this.props.nonUserWeights[0][whatLift];
    } else if (!Meteor.user() && !localStorage.getItem("weightRefId")) {
      return 0;
    }
  }

  render() {
    if (!this.props.ready) {
      return <div>Loading</div>;
    }
    console.log(this.props);
    return (
      <div className="RepMaxForms">
        <SectionTitle title="1 Rep Max" />
        <form id="repmaxform" onSubmit={e => this.handleSubmit(e)}>
          <label>
            <input
              name="squat"
              type="text"
              ref="squatmax"
              defaultValue={this.renderSavedWeights("squatMax")}
            />
            Squat
          </label>
          <label>
            <input
              name="bench"
              type="text"
              ref="benchmax"
              defaultValue={this.renderSavedWeights("benchMax")}
            />
            Bench
          </label>
          <label>
            <input
              name="dead"
              type="text"
              ref="deadmax"
              defaultValue={this.renderSavedWeights("deadliftMax")}
            />
            Deadlift
          </label>
          <label>
            <input
              name="ohp"
              type="text"
              ref="ohpmax"
              defaultValue={this.renderSavedWeights("overheadMax")}
            />
            Overhead Press
          </label>
        </form>
        <button type="submit" className="RepMaxForms__save" form="repmaxform">
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
})(RepMaxForms);
