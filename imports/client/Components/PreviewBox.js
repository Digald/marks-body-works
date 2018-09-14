import React, { Component } from "react";
import { Link } from "react-router-dom";

/* 
Individual boxes that describe each program in the application. 
Each box is also a link to that program if a user would click on it.
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
