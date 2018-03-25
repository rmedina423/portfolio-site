import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <h1 className="header-title">
          <Link to="/">Ryan Medina</Link>
        </h1>
        <div className="desktop-menu-block">
          <div className="sub-menu-block">
            <Link to="/">Portfolio</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
