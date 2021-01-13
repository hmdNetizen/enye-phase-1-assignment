import React from "react";
import logo from "../../src/assets/logo.png";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <img src={logo} alt="Enye Logo" className="header__logo" />
        <h3 className="header__title">Phase 1.1: Front-end</h3>
      </header>
      <div className="toolbar"></div>
    </React.Fragment>
  );
};

export default Header;
