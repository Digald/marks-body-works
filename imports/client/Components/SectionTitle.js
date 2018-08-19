import React, { Component } from "react";

class SectionTitle extends Component {
  render() {
    return (
      <div className="Powerbb__max-title">
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default SectionTitle;
