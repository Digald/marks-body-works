import React, { Component } from "react";
import SectionTitle from "./SectionTitle";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class ChooseWeekDropDown extends Component {

  async handleChange(e) {
    await this.setState({ week: e.target.value });
    const { week } = this.state;
    if (
      WeightSettings.find({ user: Meteor.userId() }).fetch().length > 0 &&
      Meteor.user()
    ) {
      console.log("A user has been found and updated");

      Meteor.call("updateWeekOfUser", week, Meteor.userId(), (err, res) => {
        if (err) console.log(err);
      });
    } else if (localStorage.getItem("weightRefId")) {
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

      Meteor.call("insertWeekOfProgram", week, Meteor.userId(), (err, res) => {
        if (err) console.log(err);
        if (!Meteor.user()) {
          localStorage.setItem("weightRefId", res);
        }
      });
    }
  }

  render() {
    return (
      <div className="ChooseWeekDropDown">
        <SectionTitle title={"Choose Week"} />
        <form>
          <select onChange={e => this.handleChange(e)} name="week">
            <option value="Week 1 Phase 1">Week 1 Phase 1</option>
            <option value="Week 2 Phase 1">Week 2 Phase 1</option>
            <option value="Week 3 Phase 1">Week 3 Phase 1</option>
            <option value="Week 4 Phase 1">Week 4 Phase 1</option>
            <option value="Week 5 Phase 2">Week 5 Phase 2</option>
            <option value="Week 6 Phase 2">Week 6 Phase 2</option>
            <option value="Week 7 Phase 2">Week 7 Phase 2</option>
            <option value="Week 8 Phase 2">Week 8 Phase 2</option>
            <option value="Week 9 Phase 3">Week 9 Phase 3</option>
            <option value="Week 10 Phase 3">Week 10 Phase 3</option>
            <option value="Week 11 Phase 3">Week 11 Phase 3</option>
            <option value="Week 12 Phase 3">Week 12 Phase 3</option>
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
