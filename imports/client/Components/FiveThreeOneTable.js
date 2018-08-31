import React, { Component } from "react";
import NotesField from './NotesField';
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class FiveThreeOneTable extends Component {
  calculateForUser() {
    const { weights } = this.props;
    const phase = weights[0].powerbb.workoutWeek.split(" ")[3];
    if (phase === "1") {
      return `${weights[0].whatLift * 0.7} 5x4`;
    } else if (phase === "2") {
      return `${weights[0].whatLift * 0.8} 5x3`;
    } else if (phase === "3") {
      return `${weights[0].whatLift * 0.9} 5x2`;
    }
  }

  calculateForNonUser() {
    const { nonUserWeights } = this.props;
    const phase = nonUserWeights[0].fivethreeone.workoutWeek;
    if (phase === "1") {
      return `${(nonUserWeights[0][whatLift] * 0.7).toFixed(1)} 5x4`;
    } else if (phase === "2") {
      return `${(nonUserWeights[0][whatLift] * 0.8).toFixed(1)} 5x3`;
    } else if (phase === "3") {
      return `${(nonUserWeights[0][whatLift] * 0.9).toFixed(1)} 5x2`;
    }
  }

  renderCalculateProgram() {
    const { weights } = this.props;
    if (Meteor.user() && weights) {
      return this.calculateRepsUser();
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return this.calculateForNonUser();
    } else if (!Meteor.user() && !localStorage.getItem("weightRefId")) {
      return "??";
    }
  }

  render() {
    return (
      <div className="FiveThreeOneTable">
        <div className="FiveThreeOneTable__day1">
          <h3>Day 1 (Overhead Press)</h3>
          <p>Overhead Press {this.renderCalculateProgram("overheadMax")}</p>
          <p>Close Grip Bench</p>
          <NotesField day="SHOULDERS"/>
        </div>
        <div className="FiveThreeOneTable__day2">
          <h3>Day 2 (Squat)</h3>
          <p>Squat {this.renderCalculateProgram("squatMax")}</p>
          <p>Sumo Deadlift</p>
          <NotesField day="LEGS"/>
        </div>
        <div className="FiveThreeOneTable__day3">
          <h3>Day 4 (Bench Press)</h3>
          <p>Bench Press {this.renderCalculateProgram("benchMax")}</p>
          <p>Incline Dumbell Press</p>
          <NotesField day="CHEST"/>
        </div>
        <div className="FiveThreeOneTable__day4">
          <h3>Day 5 (Deadlift)</h3>
          <p>Deadlift {this.renderCalculateProgram("deadliftMax")}</p>
          <p>Front Squat</p>
          <NotesField day="BACK"/>
        </div>
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
})(FiveThreeOneTable);
