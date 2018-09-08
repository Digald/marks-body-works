import React, { Component } from "react";
// Meteor Imports
import { withTracker } from "meteor/react-meteor-data";
import { WeightSettings } from "../../api/weightSettings";

class NotesField extends Component {
  handleChange(e) {
    e.preventDefault();
    const notes = e.target.value;
    const { program, weights } = this.props;
    if (weights.length > 0 && Meteor.user()) {
      console.log("A user has been found and updated");

      Meteor.call(
        "updateNotesUser",
        notes,
        program,
        Meteor.userId(),
        (err, res) => {
          if (err) console.log(err);
        }
      );
    } else if (localStorage.getItem("weightRefId") && !Meteor.user()) {
      console.log("Localstorage but not a user has been found and updated");

      Meteor.call(
        "updateNotesStorage",
        notes,
        program,
        localStorage.getItem("weightRefId"),
        (err, res) => {
          if (err) console.log(err);
        }
      );
    } else if (!localStorage.getItem("weightRefId")) {
      console.log("No user or localstorage and must be inserted");

      Meteor.call(
        "insertNotes",
        notes,
        program,
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

  renderDefaultValue() {
    const { program, weights, nonUserWeights } = this.props;
    const programArr = program.split(".");
    if (Meteor.user() && weights.length > 0) {
      return weights[0][programArr[0]][programArr[1]];
    } else if (!Meteor.user() && localStorage.getItem("weightRefId")) {
      return nonUserWeights[0][programArr[0]][programArr[1]];
    }
  }

  render() {
    return (
      <form className="NotesField">
        <textarea
          className="NotesField__textarea"
          defaultValue={this.renderDefaultValue()}
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
    weights: WeightSettings.find({ user: Meteor.user() }).fetch()
  };
})(NotesField);
