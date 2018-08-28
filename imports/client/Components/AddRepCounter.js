import React, { Component } from "react";

class AddRepCounter extends Component {
  state = {
    counterArr: [],
    key: 0
  };

  addRepCounter(e, counter) {
    e.preventDefault();
    if (counter === "+") {
      const symbol = "√";
      this.setState({ counterArr: [this.state.counterArr, ...symbol], key: this.state.key + 1 });
    } else if (counter === "-") {
      const symbol = "x";
      this.setState({ counterArr: [this.state.counterArr, ...symbol], key: this.state.key + 1 });
    }
  }

  render() {
    return (
      <span className="AddRepCounter">
        {this.state.counterArr.map(element => {
          return <p key={this.state.key}>{element}</p>;
        })}
        <button
          onClick={e => this.addRepCounter(e, "+")}
          className="AddRepCounter__success"
        >
          +
        </button>
        <button
          onClick={e => this.addRepCounter(e, "-")}
          className="AddRepCounter__fail"
        >
          -
        </button>
      </span>
    );
  }
}

export default AddRepCounter;
