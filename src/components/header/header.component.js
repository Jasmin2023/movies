import React from 'react';
import './header.styles.scss';
import image from './../../assets/logo.png';
import BurgerMenuImage from './../../assets/burger-menu.png';
const Header = () => (
    <header className="header">
          <div className="inner">
            <div className="logo">
              <img src={image} alt="Logo Flix"></img>
            </div>
            <div className="burger-menu-container">
              <img src={BurgerMenuImage} alt="burger menu"></img>
            </div>
          </div>
    </header>
);

export default Header;