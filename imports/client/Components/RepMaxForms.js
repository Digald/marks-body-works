import React, { Component } from "react";

class RepMaxForms extends Component {
  render() {
    return (
      <div className="RepMaxForms">
        <form>
          <label>
            <input name="squat" type="text" />
            Squat
          </label>
          <label>
            <input name="bench" type="text" />
            Bench
          </label>
          <label>
            <input name="dead" type="text" />
            Deadlift
          </label>
          <label>
            <input name="ohp" type="text" />
            Overhead Press
          </label>
        </form>
      </div>
    );
  }
}

export default RepMaxForms;
