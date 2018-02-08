import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuIconOpen: false
    };

    this.onMenuIconClick = this.onMenuIconClick.bind(this);
    this.onMenuIconKeyPress = this.onMenuIconKeyPress.bind(this);
  }

  onMenuIconClick() {
    this.setState(prevState => ({
      isMenuIconOpen: !prevState.isMenuIconOpen
    }));
  }

  onMenuIconKeyPress(event) {
    if (event.key === 'Enter') {
      this.setState(prevState => ({
        isMenuIconOpen: !prevState.isMenuIconOpen
      }));
    }
  }

  render() {
    return (
      <header>
        <div className="header-container">
          <h1 className="header-title">
            <Link to="/">Ryan Medina</Link>
          </h1>
          <div className="mobile-menu-block" onClick={this.onMenuIconClick} onKeyPress={this.onMenuIconKeyPress} role="button" tabIndex="0">
            <h2>Menu</h2>
            <div className={this.state.isMenuIconOpen ? 'menu-icon open' : 'menu-icon'}>
              <div className="bar-1" />
              <div className="bar-2" />
              <div className="bar-3" />
            </div>
          </div>
          <div className="desktop-menu-block">
            <div className="sub-menu-block">
              <Link to="/">Portfolio</Link>
              <Link to="/">About & Contact</Link>
            </div>
            <div className="sub-menu-block">
              <Link to="/">Twitter</Link>
              <Link to="/">Instagram</Link>
              <Link to="/">Dribble</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}