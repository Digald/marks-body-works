import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class ChooseWeek531 extends Component {
  state = {
    arrayOfValues: [
      "5 / 5 / 5",
      "3 / 3 / 3",
      "5 / 3 / 1",
      "Deload"
    ]
  };

  async handleChange(e) {
    await this.setState({ week: e.target.value });
    const { week } = this.state;
    if (
      WeightSettings.find({ user: Meteor.userId() }).fetch().length > 0 &&
      Meteor.user()
    ) {
      console.log("A user has been found and updated");

      Meteor.call("updateWeekOfUserFiveThreeOne", week, Meteor.userId(), (err, res) => {
        if (err) console.log(err);
      });
    } else if (localStorage.getItem("weightRefId")) {
      console.log("Localstorage but not a user has been found and updated");

      Meteor.call(
        "updateWeekOfStorageFiveThreeOne",
        week,
        localStorage.getItem("weightRefId"),
        (err, res) => {
          if (err) console.log(err);
        }
      );
    } else {
      console.log("No user or localstorage and must be inserted");

      Meteor.call("insertWeekOfProgramFiveThreeOne", week, Meteor.userId(), (err, res) => {
        if (err) console.log(err);
        if (!Meteor.user()) {
          localStorage.setItem("weightRefId", res);
        }
      });
    }
  }
  
  renderSavedWeek() {
    const { weights, nonUserWeights } = this.props;
    if (Meteor.user() && weights) {
      return weights[0].fivethreeone.workoutWeek;
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return nonUserWeights[0].fivethreeone.workoutWeek;
    } else if (!Meteor.user() && !localStorage.getItem("weightRefId")) {
      return "5 / 5 / 5";
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
          <select value={this.renderSavedWeek()} onChange={e => this.handleChange(e)} name="week">
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
})(ChooseWeek531);
