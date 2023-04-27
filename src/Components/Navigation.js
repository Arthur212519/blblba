import React from 'react';
import Menu from './Menu';
import SearchBox from './SearchBox';

function Navigation() {
  return (
    <nav className="navigation">
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>

      <a href="index.html" className="logo">
        Filmes Online
      </a>

      <Menu />

      <SearchBox />
    </nav>
  );
}

export default Navigation;
