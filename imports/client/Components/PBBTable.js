import React, { Component } from "react";
import NotesField from "./NotesField";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class PBBTable extends Component {
  calculateForUser(whatLift) {
    const { weights } = this.props;
    const phase = weights[0].powerbb.workoutWeek.split(" ")[3];
    if (phase === "1") {
      return `${(weights[0][whatLift] * 0.7).toFixed(1)} 5x4`;
    } else if (phase === "2") {
      return `${(weights[0][whatLift] * 0.8).toFixed(1)} 5x3`;
    } else if (phase === "3") {
      return `${(weights[0][whatLift] * 0.9).toFixed(1)} 5x2`;
    }
  }

  calculateForNonUser(whatLift) {
    const { nonUserWeights } = this.props;
    const phase = nonUserWeights[0].powerbb.workoutWeek.split(" ")[3];
    if (phase === "1") {
      return `${(nonUserWeights[0][whatLift] * 0.7).toFixed(1)} 5x4`;
    } else if (phase === "2") {
      return `${(nonUserWeights[0][whatLift] * 0.8).toFixed(1)} 5x3`;
    } else if (phase === "3") {
      return `${(nonUserWeights[0][whatLift] * 0.9).toFixed(1)} 5x2`;
    }
  }

  renderCalculateProgram(whatLift) {
    const { weights } = this.props;
    if (Meteor.user() && weights.length > 0) {
      return this.calculateForUser(whatLift);
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return this.calculateForNonUser(whatLift);
    } else if (!Meteor.user() && !localStorage.getItem("weightRefId")) {
      return "???";
    }
  }

  render() {
    return (
      <div className="PBBTable">
        <div className="PBBTable__day1">
          <h3>Day 1 (Shoulders)</h3>
          <p>Overhead Press {this.renderCalculateProgram("overheadMax")}</p>
          <p>Side Lateral Raise 5x10</p>
          <p>Rear Deltoid Raise 3x8</p>
          <p>Personal Ab Routine</p>
          <p>HIIT Cardio Routine</p>
          <NotesField day="SHOULDERS" program="powerbb.shoulderText"/>
        </div>
        <div className="PBBTable__day2">
          <h3>Day 2 (Legs)</h3>
          <p>Squat {this.renderCalculateProgram("squatMax")}</p>
          <p>Hamstring Curl 5x10</p>
          <p>Rear Deltoid Raise 3x8</p>
          <p>Personal Ab Routine</p>
          <p>HIIT Cardio Routine</p>
          <NotesField day="LEGS" program="powerbb.legText"/>
        </div>
        <div className="PBBTable__day3">
          <h3>Day 3 (Arms)</h3>
          <p>Bicep Curl 3x8</p>
          <p>Hammer Curl 3x12</p>
          <p>Preacher Curl 3x10</p>
          <p>Laying Tricep Extension 3x8</p>
          <p>Tripcep Kickbacks 3x10</p>
          <p>Straight Bar Tripcep Pushdown 3x12</p>
          <p>Personal Ab Routine</p>
          <p>HIIT Cardio Routine</p>
          <NotesField day="ARMS" program="powerbb.armText"/>
        </div>
        <div className="PBBTable__day4">
          <h3>Day 4 (Chest)</h3>
          <p>Bench Press {this.renderCalculateProgram("benchMax")}</p>
          <p>Incline Dumbell Press 5x10</p>
          <p>Incline Dumbell Fly 3x8</p>
          <p>Personal Ab Routine</p>
          <p>HIIT Cardio Routine</p>
          <NotesField day="CHEST" program="powerbb.chestText"/>
        </div>
        <div className="PBBTable__day5">
          <h3>Day 5 (Back)</h3>
          <p>Deadlift {this.renderCalculateProgram("deadliftMax")}</p>
          <p>Dumbell Rows 5x10</p>
          <p>Lat Pulldown 3x8</p>
          <p>Personal Ab Routine</p>
          <p>HIIT Cardio Routine</p>
          <NotesField day="BACK" program="powerbb.backText"/>
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
})(PBBTable);
