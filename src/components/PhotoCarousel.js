import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import images from "../assets/hero_images";
import "./styles/Carousel.css";

const PhotoCarousel = () => {
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={75}
      autoPlay={true}
      showArrows={true}
      infiniteLoop={true}
      interval={7000}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      transitionTime={1500}
    >
      {images.map((image) => {
        return (
          <div key={image.name}>
            <img src={image.url} alt={image.name} />
          </div>
        );
      })}
    </Carousel>
  );
};

export default PhotoCarousel;
