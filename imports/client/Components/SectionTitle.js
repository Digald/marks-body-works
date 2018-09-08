import React, { Component } from "react";

/* 
Title component for different sections. Pass a "title" as props to this compoent to have a title rendered where needed.
*/

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
