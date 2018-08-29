import React, { Component } from "react";

class AddRepCounter extends Component {
  state = {
    counterArr: []
  };

  addRepCounter(e, counter) {
    e.preventDefault();
    if (counter === "Rep") {
      const symbol = "√";
      this.setState({ counterArr: [...this.state.counterArr, ...symbol] });
    } else if (counter === "Fail") {
      const symbol = "-";
      this.setState({ counterArr: [...this.state.counterArr, ...symbol] });
    }
  }

  renderCounter() {
    this.state.counterArr.map((element, i) => {
      console.log(element);
      return <p>{element}</p>;
    });
  }

  render() {
    return (
      <span className="AddRepCounter">
        {this.state.counterArr.map((element, i) => {
          console.log(element);
          return (
            <p className={`AddRepCounter__${element}`} key={i}>
              {element}
            </p>
          );
        })}
        <button
          onClick={e => this.addRepCounter(e, "Rep")}
          className="AddRepCounter__success"
        >
          Rep
        </button>
        <button
          onClick={e => this.addRepCounter(e, "Fail")}
          className="AddRepCounter__fail"
        >
          Fail
        </button>
      </span>
    );
  }
}

export default AddRepCounter;
