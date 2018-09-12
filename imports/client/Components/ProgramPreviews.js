import React, { Component } from "react";
// Component imports
import PreviewBox from "./PreviewBox";

/* 
Body section of landing page. Contains all of the preview components for each of the available programs.
*/

class ProgramPreviews extends Component {
  render() {
    return (
      <div className="ProgramPreviews">
        <PreviewBox />
      </div>
    );
  }
}

export default ProgramPreviews;
