import React from "react";
import Button from "./Button";
import logo from "../assets/img/logo.png";
import "./styles/SectionCard.css";

const SectionCard = () => {
  return (
    <div className="SectionCard">
      <div className="SectionCard__content">
        <div className="Image__container">
          <img src={logo} alt="logo" />
        </div>
        <div className="Text__container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            neque provident recusandae quasi doloremque impedit, voluptas
            eligendi, soluta, culpa dignissimos incidunt alias tempore! Minima
            esse ratione reiciendis recusandae fugit corporis.
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
