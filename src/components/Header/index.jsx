import React from 'react';

import Button from '../Button';
import SocialLinks from '../SocialLinks';

import menuIcon from '../../assets/menu.svg';
import logo from '../../assets/Teste web.svg';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__block">
          <img className="header__menu" src={menuIcon} alt="Menu" />
          <img className="header__logo" src={logo} alt="Teste web" />
        </div>

        <div className="header__block">
          <Button />
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
