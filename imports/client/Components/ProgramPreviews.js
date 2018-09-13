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
        <PreviewBox
          class="PreviewBox PreviewBox-first"
          link="/programs/531"
          image="barbell.jpeg"
          altText="Loaded barbell on floor."
          description="The Simplest Template for those wanting to build raw strength
              slowly but surely!"
        />
        <PreviewBox
          class="PreviewBox PreviewBox-last"
          link="/programs/powerbb"
          image="curlbar.jpg"
          altText="EZcurl barbell loading on the floor surounded by weights."
          description="The program For those wanting to lose fat, and maintain as much
          strength as possible, and make those muscles show!"
        />
      </div>
    );
  }
}

export default ProgramPreviews;
