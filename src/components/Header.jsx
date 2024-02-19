import React from "react";

import dinoLogo from "../assets/dinoLogo.jpg";

import "./Header.css";

export const Header = (props) => {
  return (
    <header className="header">
      <div>
        <img src={dinoLogo} alt="logo dino" />
      </div>
    </header>
  );
};
