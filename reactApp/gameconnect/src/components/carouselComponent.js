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
          width="100%"
          height="100%"
          className="d-block w-100"
          src={props.informationPanel[0].imageURL}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4>{props.informationPanel[0].title}</h4>
          <h2>{props.informationPanel[0].subtitle}</h2>
          <p>{props.informationPanel[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          height="100%"
          className="d-block w-100"
          src={props.informationPanel[1].imageURL}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>{props.informationPanel[1].title}</h4>
          <h2>{props.informationPanel[1].subtitle}</h2>
          <p>{props.informationPanel[1].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default JBTCarousel;
