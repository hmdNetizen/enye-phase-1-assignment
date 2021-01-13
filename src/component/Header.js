import React from "react";
import logo from "../../src/assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <img src={logo} alt="Enye Logo" className="header__logo" />
        <h3 className="header__title">Phase 1.1: Front-end</h3>
      </nav>
    </header>
  );
};

export default Header;
