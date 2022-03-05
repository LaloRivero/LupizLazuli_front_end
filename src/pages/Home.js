import React from "react";
import PhotoCarousel from "../components/PhotoCarousel";
import SectionCard from "../components/SectionCard";
import Divisor from "../components/Divisor";
import Wedding from "../components/Wedding";
import weddings from "../assets/weddings";
import recent_galleries from "../assets/recent_galleries";
import "./styles/Home.css";
import text from '../assets/text.js'

const Home = () => {
  return (
    <div className="Home">
      <PhotoCarousel />
      <div className="Home__SecondSection">
        <div className="SecondSection__container">
          <img
            className="SecondSection__image"
            src="https://res.cloudinary.com/lupislazuli-fotografia/image/upload/v1646355679/foto%201%20acompa%C3%B1ada%20de%20texto%201/LYF_postboda_web_coelgp.jpg"
            alt="Section"
          />
          <SectionCard text={text.section1_text.text}/>
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
        {recent_galleries.map((gallery) => {
          return(
            <div className="Gallery__image">
              <img src={gallery.url} alt={gallery.id} />
            </div>
          )
        })}
      </div>
      <Divisor />
    </div>
  );
};

export default Home;
