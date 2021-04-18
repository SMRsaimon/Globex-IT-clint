import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import background1 from "../../Resource/background1.jpg";
import background2 from "../../Resource/background2.jpg";
import background3 from "../../Resource/background3.jpg";
import "./InTro.css";

const InTro = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={background1} alt="First slide" />
          <Carousel.Caption className="text-container">
            <h1>We Mantain Heigh Quility Services</h1>
            <h5>Nulla vitae elit libero, a pharetra augue mollis interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={background2} alt="Second slide" />

          <Carousel.Caption className="text-container">
            <h1>We are First</h1>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carousel-img" src={background3} alt="Third slide" />

          <Carousel.Caption className="text-container">
            <h1>100% Clint satisfy </h1>
            <h5>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default InTro;
