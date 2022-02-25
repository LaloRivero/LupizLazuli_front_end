import React from "react";
import { Link } from "react-router-dom";
import "./styles/PhotoGalery.css";
const PhotoGalery = ({galery}) => {
  return (
    <React.Fragment>
      <Link to="/" className="PhotoGalery__container">
        <img src={galery.url} alt="galery" />
        <p className="PhotoGalery__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          suscipit hic excepturi corrupti ipsum, odio placeat consectetur
          aliquid veritatis dolor explicabo cupiditate harum, sapiente sunt
          fugiat minus consequatur amet eum.
        </p>
      </Link>
    </React.Fragment>
  );
};

export default PhotoGalery;
