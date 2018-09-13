import React, { Component } from "react";
import { Link } from "react-router-dom";

/* 

*/

class ProgramBox extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <div className={this.props.class}>
          <img src={this.props.image} alt={this.props.altText} />
          <p>{this.props.description}</p>
        </div>
      </Link>
    );
  }
}

export default ProgramBox;
