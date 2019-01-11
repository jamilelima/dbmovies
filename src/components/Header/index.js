import React from 'react';
import '../../styles/header.scss';

const Header = () => (
  <nav>
    <div class="logo">
      <h1>MOVIES DB</h1>
    </div>
    <div class="search">
      <input class="search-input" placeholder="Search" />
      <button class="fa fa-search search-button"></button>
    </div>
  </nav>
)


export default Header;