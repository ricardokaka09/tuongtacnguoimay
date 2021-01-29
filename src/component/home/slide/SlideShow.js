import React from 'react';
import { Zoom,Slide } from 'react-slideshow-image';
import './SlideShow.css'
import 'react-slideshow-image/dist/styles.css'
 
const images = [
    'https://laz-img-cdn.alicdn.com/images/ims-web/TB19LLQWlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp',
    'https://laz-img-cdn.alicdn.com/images/ims-web/TB16CLPWlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp',
    'https://laz-img-cdn.alicdn.com/images/ims-web/TB1VRQ4iCslXu8jSZFuXXXg7FXa.jpg_1200x1200Q100.jpg_.webp',
  
  ];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  // scale: 0.4,
  // easing: "linear",
  arrows: true,
  prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
};
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%",height:'300px'}} src={each} />)
          }
        </Slide>
      </div>
    )
}

export default Slideshow;