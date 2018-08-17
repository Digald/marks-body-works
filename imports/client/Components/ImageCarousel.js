import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ImageCarousel extends Component {
  render() {
    return (
      <div className="ImageCarousel">
        <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay={true}>
          <div>
            <img src="barbell.jpeg" alt="Picture of workout equipment"/>
          </div>
          <div>
            <img src="curlbar.jpg" alt="Picture of more workout equipment" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default ImageCarousel;
