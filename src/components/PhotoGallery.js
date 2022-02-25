import React from "react";
import { Link } from "react-router-dom";
import "./styles/PhotoGallery.css";
const PhotoGallery = ({gallery}) => {
  return (
    <React.Fragment>
      <Link to="/" className="PhotoGallery__container">
        <img src={gallery.url} alt="gallery" />
        <p className="PhotoGallery__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          suscipit hic excepturi corrupti ipsum.
        </p>
      </Link>
    </React.Fragment>
  );
};

export default PhotoGallery;
