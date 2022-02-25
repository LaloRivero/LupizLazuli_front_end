import React from "react";
import { Link } from "react-router-dom";
import "./styles/Wedding.css";
const Wedding = ({wedding}) => {
  return (
    <React.Fragment>
      <Link to="/" className="Wedding__container">
        <img src={wedding.url} alt="gallery" />
        <p className="Wedding__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          suscipit hic excepturi corrupti ipsum.
        </p>
      </Link>
    </React.Fragment>
  );
};

export default Wedding;
