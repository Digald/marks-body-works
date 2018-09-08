import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class ChooseWeekDropDown extends Component {
  state = {
    arrayOfValues: [
      "Week 1 Phase 1",
      "Week 2 Phase 1",
      "Week 3 Phase 1",
      "Week 4 Phase 1",
      "Week 5 Phase 2",
      "Week 6 Phase 2",
      "Week 7 Phase 2",
      "Week 8 Phase 2",
      "Week 9 Phase 3",
      "Week 10 Phase 3",
      "Week 11 Phase 3",
      "Week 12 Phase 3"
    ]
  };

  async handleChange(e) {
    const week = e.target.value;
    const { weights } = this.props;
    if (weights.length > 0 && Meteor.user()) {

      console.log("A user has been found and updated");
      Meteor.call("updateWeekOfUser", week, Meteor.userId(), (err, res) => {
        if (err) console.log(err);
      });

    } else if (localStorage.getItem("weightRefId") && !Meteor.user()) {
      
      console.log("Localstorage but not a user has been found and updated");
      Meteor.call(
        "updateWeekOfStorage",
        week,
        localStorage.getItem("weightRefId"),
        (err, res) => {
          if (err) console.log(err);
        }
      );

    } else {
      
      console.log("No user or localstorage and must be inserted");
      Meteor.call(
        "insertWeekOfProgramPowerbb",
        week,
        Meteor.userId(),
        (err, res) => {
          if (err) console.log(err);
          if (!Meteor.user()) {
            localStorage.setItem("weightRefId", res);
          }
        }
      );
      
    }
  }

  renderSavedWeek() {
    const { weights, nonUserWeights } = this.props;
    if (Meteor.user() && weights.length > 0) {
      return weights[0].powerbb.workoutWeek;
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return nonUserWeights[0].powerbb.workoutWeek;
    }
  }

  render() {
    if (!this.props.ready) {
      return <div>Loading</div>;
    }
    return (
      <div className="ChooseWeekDropDown">
        <SectionTitle title={"Choose Week"} />
        <form>
          <select
            value={this.renderSavedWeek()}
            onChange={e => this.handleChange(e)}
            name="week"
          >
            {this.state.arrayOfValues.map((element, i) => {
              return (
                <option key={i} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </form>
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
})(ChooseWeekDropDown);
