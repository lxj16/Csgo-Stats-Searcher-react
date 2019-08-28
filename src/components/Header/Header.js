import React from "react";
import mainlogo from "../../assets/csgo-logo-white.png";
import "./Header.css";

const header = () => {
  return (
    <div>
      <img src={mainlogo} alt="logo" />
    </div>
  );
};

export default header;
