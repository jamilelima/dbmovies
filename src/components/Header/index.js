import React from "react";

// STYLES
import "../../styles/header.scss";

const Header = () => {
  return (
    <header className="header-content">
      <a href="/dbmovies">
        <h1 className="header-title">Movies</h1>
      </a>
    </header>
  );
};

export default Header;
