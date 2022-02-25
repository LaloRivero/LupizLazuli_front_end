import React from "react";
import PhotoCarousel from "../components/PhotoCarousel";
import SectionCard from "../components/SectionCard";
import Divisor from "../components/Divisor";
import PhotoGallery from "../components/PhotoGallery";
import "./styles/Home.css";
import recent_galleries from "../assets/recent_galleries";
const Home = () => {
  return (
    <div className="Home">
      <PhotoCarousel />
      <div className="Home__SecondSection">
        <div className="SecondSection__container">
          <img
            className="SecondSection__image"
            src="https://res.cloudinary.com/lupislazuli-fotografia/image/upload/v1630613988/Eunice%20y%20Daniel/EyD_web_pre-29_o0ffvn.jpg"
            alt="Section"
          />
          <SectionCard />
        </div>
      </div>
      <Divisor text={"WEDDINGS"} />
      <div className="Home__photoGallery">
        <div className="PhotoGalery__content">
          {recent_galleries.map((gallery) => {
            return <PhotoGallery gallery={gallery} />;
          })}
        </div>
      </div>
      <Divisor text={"RECENT GALLERIES"} />
    </div>
  );
};

export default Home;
