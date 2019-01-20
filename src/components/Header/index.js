import React from "react";

// STYLES
import "../../styles/header.scss";

const Header = () => {
  return (
    <div className="logo-container">
      <a href="/">
        <h1 className="header-title">Movies</h1>
      </a>
    </div>
  );
};

export default Header;
