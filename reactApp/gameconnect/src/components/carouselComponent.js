import React from 'react';
import { Carousel } from 'react-bootstrap';

const JBTCarousel = (props) => {
  return(
    <Carousel fade
    interval={2500}
    keyboard={false}
    indicators={false}
    controls={true}
    pause={false}>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={props.informationPanel[0].imageURL}
          alt="First slide"
        />
        <Carousel.Caption>
          <span style={{fontSize: "4vw"}}><strong>{props.informationPanel[0].title}</strong></span><span> &copy;</span>
          <h2 style={{fontSize: "3vw"}}>{props.informationPanel[0].subtitle}</h2>
          <p style={{fontSize: "1.7vw"}}>{props.informationPanel[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.informationPanel[1].imageURL}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4 style={{fontSize: "4vw"}}>{props.informationPanel[1].title}</h4>
          <h2 style={{fontSize: "3vw"}}>{props.informationPanel[1].subtitle}</h2>
          <p style={{fontSize: "1.7vw"}}>{props.informationPanel[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default JBTCarousel;
