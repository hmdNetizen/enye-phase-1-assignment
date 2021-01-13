import React from "react";
import logo from "../../src/assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Enye Logo" width={150} />
      <h3 className="header__title">Phase 1.1: Front-end</h3>
    </header>
  );
};

export default Header;
