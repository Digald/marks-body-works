import React, { Component } from "react";
import { Link } from "react-router-dom";

/* 

*/

class ProgramBox extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <Link to={this.props.link}>
          <div className="PreviewBox__styles">
            <img src={this.props.image} alt={this.props.altText} />
            <p>{this.props.description}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProgramBox;
