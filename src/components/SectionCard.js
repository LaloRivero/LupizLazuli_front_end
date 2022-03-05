import React from "react";
import Button from "./Button";
import "./styles/SectionCard.css";

const SectionCard = ({text}) => {
  return (
    <div className="SectionCard">
      <div className="SectionCard__content">
        <div className="Image__container">
          <img src={"https://res.cloudinary.com/lupislazuli-fotografia/image/upload/v1646451761/logo_xqwrty.png"} alt="logo" />
        </div>
        <div className="Text__container">
          <p>
            {text}
          </p>
        </div>
      </div>
      <div className="SectionCard__button">
        <div className="Button__card">
          <Button text={"FIND OUT MORE"} />
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
