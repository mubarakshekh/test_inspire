import React from 'react';
import { Zoom } from 'react-slideshow-image';

const images = [

  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=2'
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}



function Slider() {

  return (

    <div  className="slide-container">
      <div style={{padding:'20% 0'}}>
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} alt={each} />)
        }
      </Zoom>
      </div>
    </div>

  );
}

export default Slider;
