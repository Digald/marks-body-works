import React, { Component } from "react";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class NotesField extends Component {
  handleChange(e) {
    e.preventDefault();
    const notes = e.target.value;
    const { program } = this.props;
    if (
      WeightSettings.find({ user: Meteor.userId() }).fetch().length > 0 &&
      Meteor.user()
    ) {
      console.log("A user has been found and updated");

      Meteor.call("updateWeekOfUser", notes, Meteor.userId(), (err, res) => {
        if (err) console.log(err);
      });
    } else if (localStorage.getItem("weightRefId")) {
      console.log("Localstorage but not a user has been found and updated");

      Meteor.call(
        "updateWeekOfStorage",
        notes,
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

  render() {
    console.log(this.props);
    return (
      <form className="NotesField">
        <textarea
          className="NotesField__textarea"
          defaultValue={`${this.props.day} notes`}
          onChange={e => this.handleChange(e)}
        />
      </form>
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
})(NotesField);
