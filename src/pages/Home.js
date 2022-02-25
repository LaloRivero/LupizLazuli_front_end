import React from "react";
import PhotoCarousel from "../components/PhotoCarousel";
import SectionCard from "../components/SectionCard";
import Divisor from "../components/Divisor";
import PhotoGalery from "../components/PhotoGalery";
import "./styles/Home.css";
import recent_galeries from "../assets/recent_galeries";
const Home = () => {
  return (
    <React.Fragment>
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
      <div className="Home__photoGalery">
        {recent_galeries.map((galery) => {
          return <PhotoGalery galery={galery} />;
        })}
      </div>
    </React.Fragment>
  );
};

export default Home;
