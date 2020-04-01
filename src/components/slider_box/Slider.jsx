import React, { Component } from "react";
import "./Slider.css";
import { Carousel, CarouselItem } from "react-bootstrap";
import img1 from "../../media/slider_image1.jpg";
import img2 from "../../media/slider_image2.jpg";
import img3 from "../../media/slider_image3.jpg";
import CarouselCaption from "react-bootstrap/CarouselCaption";

class Slider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <CarouselItem>
            <img className="d-block w-100" src={img1} alt="img1" />
            <CarouselCaption>
              <h3>1st</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src={img2} alt="img2" />
            <CarouselCaption>
              <h3>2nd</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img className="d-block w-100" src={img3} alt="img3" />
            <CarouselCaption>
              <h3>3rd</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </CarouselCaption>
          </CarouselItem>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
