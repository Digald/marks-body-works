import React, { Component } from "react";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class PBBTable extends Component {

  calculateForUser(whatLift) {
    const {weights} = this.props;
    const phase = weights[0].powerbb.workoutWeek.split(' ')[3];
    if (phase === "1") {
      return `${weights[0].whatLift * 0.7} 5x4`
    } else if (phase === "2") {
      return `${weights[0].whatLift * 0.8} 5x3`
    } else if (phase === "3") {
      return `${weights[0].whatLift * 0.9} 5x2`
    }
  }

  calculateForNonUser(whatLift) {
    const {nonUserWeights} = this.props;
    const phase = nonUserWeights[0].powerbb.workoutWeek.split(' ')[3];
    if (phase === "1") {
      return `${nonUserWeights[0][whatLift] * 0.7} 5x4`
    } else if (phase === "2") {
      return `${nonUserWeights[0][whatLift] * 0.8} 5x3`
    } else if (phase === "3") {
      return `${nonUserWeights[0][whatLift] * 0.9} 5x2`
    }
  }

  renderCalculateProgram(whatLift) {
    const {weights} = this.props;
    if (Meteor.user() && weights) {
      return this.calculateRepsUser(whatLift);
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return this.calculateForNonUser(whatLift);
    } else if (!Meteor.user() && !localStorage.getItem("weightRefId")) {
      return "Week 1 Phase 1";
    }
  }

  render() {
    return (
      <table className="PBBTable">
        <thead>
          <tr>
            <th>Day 1 (Shoulders)</th>
            <th>Day 2 (Legs)</th>
            <th>Day 3 (Arms)</th>
            <th>Day 4 (Chest)</th>
            <th>Day 5 (Back)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Overhead Press {this.renderCalculateProgram("overheadMax")}</td>
            <td>Squat {this.renderCalculateProgram("squatMax")}</td>
            <td>Bicep Curl</td>
            <td>Bench Press {this.renderCalculateProgram("benchMax")}</td>
            <td>Deadlift {this.renderCalculateProgram("deadliftMax")}</td>
          </tr>
          <tr>
            <td>Side Lateral Raise</td>
            <td>Hamstring Curl</td>
            <td>Hammer Curl</td>
            <td>Incline Dumbell Press</td>
            <td>Dumbell Rows</td>
          </tr>
          <tr>
            <td>Rear Deltoid Raise</td>
            <td>Leg Extension</td>
            <td>Preacher Curl</td>
            <td>Incline Dumbell Fly</td>
            <td>Lat Pulldown</td>
          </tr>
          <tr>
            <td>Personal Ab Routine</td>
            <td>Personal Ab Routine</td>
            <td>Laying Tricep Extension</td>
            <td>Personal Ab Routine</td>
            <td>Personal Ab Routine></td>
          </tr>
          <tr>
            <td>HIIT Cardio Routine</td>
            <td>HIIT Cardio Routine</td>
            <td>Straight Bar Tripcep Pushdown</td>
            <td>HIIT Cardio Routine</td>
            <td>HIIT Cardio Routine</td>
          </tr>
          <tr>
            <td />
            <td />
            <td>Tripcep Kickbacks</td>
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td>Personal Ab Routine</td>
            <td />
            <td />
          </tr>
          <tr>
            <td />
            <td />
            <td>HIIT Cardio Routine</td>
            <td />
            <td />
          </tr>
        </tbody>
      </table>
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
