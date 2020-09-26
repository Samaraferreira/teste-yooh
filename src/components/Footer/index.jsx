import React from 'react';

import SocialLinks from '../SocialLinks';

import logo from '../../assets/Teste web.svg';
import logoYooh from '../../assets/logo-yooh.svg';
import emailIcon from '../../assets/email.svg';

import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer__contact">
          <img
            className="footer__logo footer-logo--desktop"
            src={logo}
            alt="Teste web"
          />

          <div className="wrapper">
            <div className="email">
              <img src={emailIcon} alt="E-mail" />
              <strong className="email__text">email@testeweb.com</strong>
            </div>

            <SocialLinks />
          </div>
        </div>

        <span className="footer__line" />

        <div className="footer__infos">
          <img
            className="footer__infos-logo footer__infos-logo--mobile"
            src={logo}
            alt="Teste web"
          />

          <span className="footer__infos-copy">
            &copy; Todos os direitos reservados.
          </span>

          <div className="info-credits">
            <span className="info-credits__text">Desenvolvido por</span>
            <img src={logoYooh} alt="Yooh" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
