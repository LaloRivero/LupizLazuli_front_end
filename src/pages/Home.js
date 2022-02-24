import React from 'react';
import PhotoCarousel from '../components/PhotoCarousel';
import SectionCard from '../components/SectionCard';


const Home = () => {
  return (
    <React.Fragment>
      <PhotoCarousel/>
      <div>
        <img src="https://res.cloudinary.com/lupislazuli-fotografia/image/upload/v1630614425/Sofia%20y%20Julienne/SyJ_Boda_Pre-4_yiv2uk.jpg" alt="image" />
        <SectionCard/>
      </div>
    </React.Fragment>
  );
}

export default Home;
