import React from 'react';

export default class Header extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isMenuIconOpen: false
    }

    this.menuIconClick = this.menuIconClick.bind(this);
  }

  menuIconClick () {
    this.setState(prevState => ({
      isMenuIconOpen: !prevState.isMenuIconOpen
    }));
  }

  render () {
    return (
      <header>
        <div className="header-container">
          <h1 className="header-title">
            <a href="/">Ryan Medina</a>
          </h1>
          <div className="mobile-menu-block">
            <h2>Menu</h2>
            <MenuIcon isMenuIconOpen={this.state.isMenuIconOpen} menuIconClick={this.menuIconClick} />
          </div>
          <div className="desktop-menu-block">
            <div className="sub-menu-block">
              <a href="/">Portfolio</a>
              <a href="/">About & Contact</a>
            </div>
            <div className="sub-menu-block">
              <a href="/">Twitter</a>
              <a href="/">Instagram</a>
              <a href="/">Dribble</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const MenuIcon = ({isMenuIconOpen, menuIconClick}) => {  
  return (
    <div className={isMenuIconOpen ? `menu-icon open` : `menu-icon`} onClick={menuIconClick}>
      <div className="bar-1"></div>
      <div className="bar-2"></div>
      <div className="bar-3"></div>
    </div>
  )
};