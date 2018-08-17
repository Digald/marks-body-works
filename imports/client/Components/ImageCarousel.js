import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

class ImageCarousel extends Component {
  render() {
    return (
      <div className="ImageCarousel">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} interval={10000} autoPlay={true}>
          <div>
            <img src="barbell.jpeg" alt="Loaded barbell with a plate with additional plate on floor"/>
            <p className="legend">5/3/1 Simplest Template for those wanting to build raw strength over time</p>
          </div>
          <div>
            <img src="curlbar.jpg" alt="EZ curl bar with additional weights on the floor" />
            <p className="legend">Power BB for those wanting to lose fat, and maintain as much strength as possible</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageCarousel;
