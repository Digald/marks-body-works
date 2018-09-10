import React, { Component } from "react";
import NotesField from "./NotesField";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

/* 
This component is the list of exercises for 5/3/1 that get displayed to 
the page. Methods in this component also take the one rep maxes and calculate 
the appropriate weights for the core exercises. The secondary maxes component 
also gets used and rendered. The amount of reps is determined from the "workoutWeek"
 property.
*/

class FiveThreeOneTable extends Component {
  state = {
    weeks: [
      [
        [0.65, 0.75, 0.85],
        [0.5, 0.6, 0.7],
        "5 / 5 / 5",
        ["5", "5", "5+"],
        ["10", "10", "10"]
      ],
      [
        [0.7, 0.8, 0.9],
        [0.6, 0.7, 0.8],
        "3 / 3 / 3",
        ["3", "3", "3+"],
        ["8", "8", "6"]
      ],
      [
        [0.75, 0.85, 0.95],
        [0.65, 0.75, 0.85],
        "5 / 3 / 1",
        ["5", "3", "1+"],
        ["5", "5", "5", "5"]
      ],
      [
        [0.4, 0.5, 0.6],
        [0.4, 0.5, 0.6],
        "Deload",
        ["5", "5", "5"],
        ["5", "5", "5"]
      ]
    ]
  };

  calculateForUser(whatLift, option) {
    const { weights } = this.props;
    const { weeks } = this.state;
    if (option === "main") {
      return weeks.map(element => {
        if (weights[0].fivethreeone.workoutWeek === element[2]) {
          return element[0].map((percentage, i) => {
            return `${(weights[0][whatLift] * 0.9 * percentage).toFixed(1)}x${
              element[3][i]
            } `;
          });
        }
      });
    } else if (option === "secondary") {
      return weeks.map(element => {
        if (weights[0].fivethreeone.workoutWeek === element[2]) {
          return element[1].map((percentage, i) => {
            return `${(weights[0].fivethreeone[whatLift] * percentage).toFixed(
              1
            )}x${element[4][i]} `;
          });
        }
      });
    }
  }

  calculateForNonUser(whatLift, option) {
    const { nonUserWeights } = this.props;
    const { weeks } = this.state;
    if (option === "main") {
      return weeks.map(element => {
        if (nonUserWeights[0].fivethreeone.workoutWeek === element[2]) {
          return element[0].map((percentage, i) => {
            return `${(nonUserWeights[0][whatLift] * 0.9 * percentage).toFixed(
              1
            )}x${element[3][i]} `;
          });
        }
      });
    } else if (option === "secondary") {
      return weeks.map(element => {
        if (nonUserWeights[0].fivethreeone.workoutWeek === element[2]) {
          return element[1].map((percentage, i) => {
            return `${(
              nonUserWeights[0].fivethreeone[whatLift] * percentage
            ).toFixed(1)}x${element[4][i]} `;
          });
        }
      });
    }
  }

  renderCalculateProgram(whatLift, option) {
    const { weights } = this.props;
    if (Meteor.user() && weights.length > 0) {
      return this.calculateForUser(whatLift, option);
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return this.calculateForNonUser(whatLift, option);
    } else if (!Meteor.user() && !localStorage.getItem("weightRefId")) {
      return "???";
    }
  }

  render() {
    return (
      <div className="FiveThreeOneTable PBBTable">
        <div className="FiveThreeOneTable__day1 PBBTable__day1">
          <h3>Day 1 (Overhead Press)</h3>
          <p>
            Overhead Press {this.renderCalculateProgram("overheadMax", "main")}
          </p>
          <p>
            Close Grip Bench{" "}
            {this.renderCalculateProgram("closeGripBenchMax", "secondary")}
          </p>
          <p>Barbell Row 3x10</p>
          <p>Lat Pulldown 3x10</p>
          <p>Bicep Curl 3x10</p>
          <p>DB Tricep Extension 3x10</p>
          <NotesField day="SHOULDERS" program="fivethreeone.shoulderText" />
        </div>
        <div className="FiveThreeOneTable__day2 PBBTable__day2">
          <h3>Day 2 (Squat)</h3>
          <p>Squat {this.renderCalculateProgram("squatMax", "main")}</p>
          <p>
            Sumo Deadlift{" "}
            {this.renderCalculateProgram("sumoDeadliftMax", "secondary")}
          </p>
          <p>Personal Ab Routine</p>
          <p>HIIT Cardio Routine</p>
          <NotesField day="LEGS" program="fivethreeone.legText" />
        </div>
        <div className="FiveThreeOneTable__day3 PBBTable__day3">
          <h3>Day 4 (Bench Press)</h3>
          <p>Bench Press {this.renderCalculateProgram("benchMax", "main")}</p>
          <p>
            Incline Dumbell Press{" "}
            {this.renderCalculateProgram("inclineBenchMax", "secondary")}
          </p>
          <p>Barbell Row 3x10</p>
          <p>Lat Pulldown 3x10</p>
          <p>Hammer Curl 3x10</p>
          <p>Tricep Flat Pushdown 3x10</p>
          <NotesField day="CHEST" program="fivethreeone.chestText" />
        </div>
        <div className="FiveThreeOneTable__day4 PBBTable__day4">
          <h3>Day 5 (Deadlift)</h3>
          <p>Deadlift {this.renderCalculateProgram("deadliftMax", "main")}</p>
          <p>
            Front Squat{" "}
            {this.renderCalculateProgram("frontSquatMax", "secondary")}
          </p>
          <p>Personal Ab Routine</p>
          <p>HIIT Cardio Routine</p>
          <NotesField day="BACK" program="fivethreeone.backText" />
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
