import React, { Component } from "react";

class AddRepCounter extends Component {
  render() {
    return (
      <span className="AddRepCounter">
        <button className="AddRepCounter__success">+</button>
        <button className="AddRepCounter__fail">x</button>
      </span>
    );
  }
}

export default AddRepCounter;
