import React from "react";
import PhotoCarousel from "../components/PhotoCarousel";
import SectionCard from "../components/SectionCard";
import Divisor from "../components/Divisor";
import Wedding from "../components/Wedding";
import weddings from "../assets/weddings";
import recent_galleries from "../assets/recent_galleries";
import "./styles/Home.css";

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
      <div className="Home__weddings">
        <div className="Weddings__content">
          {weddings.map((wedding) => {
            return <Wedding wedding={wedding} />;
          })}
        </div>
      </div>
      <Divisor text={"RECENT GALLERIES"} />
      <div className="Home__galleries">
        {recent_galleries.map((gallery) => {})}
      </div>
    </div>
  );
};

export default Home;
