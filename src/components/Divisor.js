import React from "react";
import "./styles/Divisor.css";

const Divisor = ({ text }) => {
  if(text){
    return (
      <div className="Divisor">
        <div className="Divisor__line">
          <hr />
        </div>
        <p className="Divisor__text">{text}</p>
        <div className="Divisor__line">
        <hr />
        </div>
      </div>
    );
  }else{
    return (
      <div className="Divisor">
        <div className="Divisor__line--alone">
          <hr />
        </div>
      </div>
    );
  }
};

export default Divisor;
